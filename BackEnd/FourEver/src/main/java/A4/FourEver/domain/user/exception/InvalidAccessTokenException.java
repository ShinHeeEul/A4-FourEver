package A4.FourEver.domain.user.exception;

import A4.FourEver.global.exception.FourEverException;
import org.springframework.http.HttpStatus;

public class InvalidAccessTokenException extends FourEverException {

    public InvalidAccessTokenException() {
        super(HttpStatus.BAD_REQUEST, "액세스 토큰이 유효하지 않습니다.", 10006);
    }
}
