package A4.FourEver.domain.user.api;

import A4.FourEver.domain.user.application.UserService;
import A4.FourEver.domain.user.application.auth.AuthService;
import A4.FourEver.domain.user.application.auth.JwtProvider;
import A4.FourEver.domain.user.dto.LoginRequestDTO;
import A4.FourEver.domain.user.dto.LoginResponseDTO;
import A4.FourEver.domain.user.dto.UserFeedDTO;
import A4.FourEver.domain.user.exception.InvalidLoginException;
import A4.FourEver.global.annotation.LoginUserId;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Primary;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Tag(name = "유저 정보")
@RestController
@RequestMapping("/users")
@Primary
public class UserControllerDefaultImpl implements UserController {

    private final AuthService authService;
    private final UserService userService;
    private final JwtProvider jwtProvider;

    @Value("${jwt.expired}")
    private int expired;

    public UserControllerDefaultImpl(AuthService authService, UserService userService, JwtProvider jwtProvider) {
        this.authService = authService;
        this.userService = userService;
        this.jwtProvider = jwtProvider;
    }

    @Override
    @Operation(summary = "현대 통합 API 로그인")
    @GetMapping("/hyundai-login")
    public LoginResponseDTO oauth(@RequestParam final String code,
                                  @RequestParam final String state) {

        String userEmail = authService.getToken(code, state);
        Long userId = userService.saveUser(userEmail, userEmail);
        String token = jwtProvider.getJwtToken(userId);

        return LoginResponseDTO.builder()
                .JwtToken(token)
                .expired(Timestamp.valueOf(LocalDateTime.now().plusSeconds(expired)))
                .build();
    }

    @Override
    @Operation(summary = "자체 로그인 API")
    @PostMapping("/self-login")
    public LoginResponseDTO login(@Valid @RequestBody final LoginRequestDTO loginRequestDTO, final BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            bindingResult.getAllErrors().forEach(objectError -> {
                throw new InvalidLoginException(objectError.getDefaultMessage());
            });
        }
        Long userId = userService.saveUser(loginRequestDTO.getEmail(), loginRequestDTO.getPassword());
        String token = jwtProvider.getJwtToken(userId);

        return LoginResponseDTO.builder()
                .JwtToken(token)
                .expired(Timestamp.valueOf(LocalDateTime.now().plusSeconds(expired)))
                .build();
    }

    @Override
    @Operation(summary = "유저의 피드 정보 조회")
    @SecurityRequirement(name = "JWT")
    @GetMapping("/feeds")
    public UserFeedDTO getUserFeedsById(@LoginUserId final Long userId) {
        return userService.getUserFeedsById(userId);
    }

    @Override
    @Operation(summary = "유저의 피드 목록에 특정 후기 추가")
    @SecurityRequirement(name = "JWT")
    @PostMapping("/feeds/{carReviewId}")
    public void createUserCarReviewById(@LoginUserId final Long userId, @PathVariable final Long carReviewId) {
        userService.saveUserCarReviewById(userId, carReviewId);
    }

    @Override
    @Operation(summary = "유저의 피드 목록에서 특정 후기 삭제")
    @SecurityRequirement(name = "JWT")
    @DeleteMapping("/feeds/{carReviewId}")
    public void deleteUserCarReviewById(@LoginUserId final Long userId, @PathVariable final Long carReviewId) {
        userService.deleteUserCarReviewById(userId, carReviewId);
    }
}
