package A4.FourEver.domain.user.exception;

import A4.FourEver.global.exception.FourEverException;
import org.springframework.http.HttpStatus;

public class BlankTokenException extends FourEverException {

    public BlankTokenException() {
        super(HttpStatus.BAD_REQUEST, "토큰 값이 없습니다.", 10007);
    }
}
