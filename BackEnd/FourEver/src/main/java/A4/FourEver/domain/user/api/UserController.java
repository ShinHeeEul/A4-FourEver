package A4.FourEver.domain.user.api;

import A4.FourEver.domain.user.dto.LoginRequestDTO;
import A4.FourEver.domain.user.dto.LoginResponseDTO;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;

public interface UserController {
    @Operation(summary = "현대 통합 API 로그인")
    @GetMapping("/oauth")
    LoginResponseDTO oauth(@RequestParam String code,
                           @RequestParam String state);

    @Operation(summary = "자체 로그인 API")
    @PostMapping("/")
    LoginResponseDTO login(@Valid @RequestBody LoginRequestDTO loginRequestDTO, BindingResult bindingResult);
}
