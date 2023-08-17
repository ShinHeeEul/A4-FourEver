package A4.FourEver.domain.user.exception;

import A4.FourEver.global.exception.FourEverException;
import org.springframework.http.HttpStatus;

public class InvalidTokenException extends FourEverException {

    public InvalidTokenException() {
        super(HttpStatus.BAD_REQUEST, "없는 토큰입니다", 10002);
    }

}
