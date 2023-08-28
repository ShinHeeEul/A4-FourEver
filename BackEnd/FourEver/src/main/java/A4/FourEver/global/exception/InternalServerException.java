package A4.FourEver.global.exception;

import org.springframework.http.HttpStatus;

public class InternalServerException extends FourEverException {

    public InternalServerException() {
        super(HttpStatus.INTERNAL_SERVER_ERROR, "서버 에러", 50000);
    }
}
