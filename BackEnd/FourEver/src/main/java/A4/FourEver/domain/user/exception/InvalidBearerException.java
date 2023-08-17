package A4.FourEver.domain.user.exception;

import A4.FourEver.global.exception.FourEverException;
import org.springframework.http.HttpStatus;

public class InvalidBearerException extends FourEverException {

    public InvalidBearerException() {
        super(HttpStatus.BAD_REQUEST, "로그인 후 이용해주세요.", 10007);
    }
}
