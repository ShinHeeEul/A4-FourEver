package A4.FourEver.domain.user.exception;

import A4.FourEver.global.exception.FourEverException;
import org.springframework.http.HttpStatus;

public class InvalidCodeException extends FourEverException {

    public InvalidCodeException() {
        super(HttpStatus.BAD_REQUEST, "코드가 일치하지 않습니다.", 10005);
    }
}
