package A4.FourEver.domain.user.exception;

import A4.FourEver.global.exception.FourEverException;
import org.springframework.http.HttpStatus;

public class LoginStateException extends FourEverException {

    public LoginStateException() {
        super(HttpStatus.BAD_REQUEST, "status 코드 이상", 10001);
    }
}
