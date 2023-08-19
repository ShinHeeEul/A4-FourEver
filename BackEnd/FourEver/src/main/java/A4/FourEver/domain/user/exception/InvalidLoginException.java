package A4.FourEver.domain.user.exception;

import A4.FourEver.global.exception.FourEverException;
import org.springframework.http.HttpStatus;

public class InvalidLoginException extends FourEverException {

    public InvalidLoginException(String message) {
        super(HttpStatus.BAD_REQUEST,  message, 10011);
    }
}
