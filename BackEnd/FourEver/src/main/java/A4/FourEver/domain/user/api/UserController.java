package A4.FourEver.domain.user.api;

import A4.FourEver.domain.user.dto.LoginRequestDTO;
import A4.FourEver.domain.user.dto.LoginResponseDTO;
import A4.FourEver.domain.user.dto.UserFeedDTO;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;

public interface UserController {
    LoginResponseDTO oauth(final String code, final String state);
    LoginResponseDTO login(final LoginRequestDTO loginRequestDTO, final BindingResult bindingResult);
    UserFeedDTO getUserFeedsById(Long userId);
}
