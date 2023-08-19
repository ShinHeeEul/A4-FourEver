package A4.FourEver.domain.user.exception;

import A4.FourEver.global.exception.FourEverException;
import org.springframework.http.HttpStatus;

public class InvalidPasswordException extends FourEverException {

    public InvalidPasswordException() {
        super(HttpStatus.BAD_REQUEST,"비밀번호가 일치하지 않습니다.", 10012);
    }
}
