package A4.FourEver.domain.user.api;

import A4.FourEver.domain.user.application.UserService;
import A4.FourEver.domain.user.application.auth.AuthService;
import A4.FourEver.domain.user.application.auth.JwtProvider;
import A4.FourEver.domain.user.dto.LoginRequestDTO;
import A4.FourEver.domain.user.dto.LoginResponseDTO;
import A4.FourEver.domain.user.exception.InvalidLoginException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Primary;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Tag(name = "유저 정보")
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Primary
public class UserControllerDefaultImpl implements UserController  {

    private final AuthService authService;
    private final UserService userService;
    private final JwtProvider jwtProvider;

    @Value("${jwt.expired}")
    private int expired;

    @Override
    @Operation(summary = "현대 통합 API 로그인")
    @GetMapping("/oauth")
    public LoginResponseDTO oauth(@RequestParam String code,
                                  @RequestParam String state) {

        String userEmail = authService.getToken(code,state);
        Long userId = userService.saveUser(userEmail, userEmail);
        String token = jwtProvider.getJwtToken(userId);

        return LoginResponseDTO.builder()
                .JwtToken(token)
                .expired(Timestamp.valueOf(LocalDateTime.now().plusSeconds(expired)))
                .build();
    }

    @Override
    @Operation(summary = "자체 로그인 API")
    @PostMapping("/")
    public LoginResponseDTO login(@Valid @RequestBody LoginRequestDTO loginRequestDTO, BindingResult bindingResult) {

        if(bindingResult.hasErrors()) {
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
}
