package A4.FourEver.domain.user.api;

import A4.FourEver.domain.user.dto.LoginRequestDTO;
import A4.FourEver.domain.user.dto.LoginResponseDTO;
import A4.FourEver.domain.user.dto.UserFeedDTO;
import A4.FourEver.global.annotation.LoginUserId;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

public interface UserController {
    LoginResponseDTO oauth(final String code, final String state);
    LoginResponseDTO login(final LoginRequestDTO loginRequestDTO, final BindingResult bindingResult);
    UserFeedDTO getUserFeedsById(Long userId);
    void createUserCarReviewById(final Long userId, final Long carReviewId);
    void deleteUserCarReviewById(final Long userId, final Long carReviewId);
}
