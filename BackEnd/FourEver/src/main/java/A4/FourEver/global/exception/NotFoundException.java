package A4.FourEver.global.exception;

import org.springframework.http.HttpStatus;

public class NotFoundException extends FourEverException {

    private static final int code = 404;

    public NotFoundException(String message) {
        super(HttpStatus.NOT_FOUND, message, code);
    }
}
