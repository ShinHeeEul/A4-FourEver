package A4.FourEver.domain.user.api;

import A4.FourEver.domain.user.application.auth.AuthService;
import A4.FourEver.domain.user.application.UserService;
import A4.FourEver.domain.user.application.auth.JwtProvider;
import A4.FourEver.domain.user.dto.LoginResponseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Tag(name = "유저 정보")
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Primary
public class UserControllerDefaultImpl  {

    private final AuthService authService;
    private final UserService userService;
    private final JwtProvider jwtProvider;

    @Operation(summary = "로그인 요청 처리")
    @GetMapping("/login")
    public LoginResponseDTO login(@RequestParam String code,
                                  @RequestParam String state) {

        String userEmail = authService.getToken(code,state);
        Long userId = userService.saveUser(userEmail);
        String token = jwtProvider.getJWTToken(userId);

        return new LoginResponseDTO(token, Timestamp.valueOf(LocalDateTime.now().plusDays(1)));
    }



}
