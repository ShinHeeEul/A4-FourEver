package A4.FourEver.domain.user.api;

import A4.FourEver.domain.user.dto.LoginResponseDTO;

import javax.servlet.http.HttpServletResponse;

public interface UserController {

    LoginResponseDTO login(final String code, final String state, HttpServletResponse tokenResponsex);
}
