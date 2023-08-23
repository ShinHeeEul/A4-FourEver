package A4.FourEver.global.exception;

import org.springframework.http.HttpStatus;

public class DuplicateDataException extends FourEverException {

    private static final int code = 10100;

    public DuplicateDataException(String message) {
        super(HttpStatus.BAD_REQUEST, message, code);
    }
}
