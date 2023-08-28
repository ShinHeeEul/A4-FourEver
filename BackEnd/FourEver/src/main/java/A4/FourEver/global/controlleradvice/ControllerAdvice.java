package A4.FourEver.global.controlleradvice;

import A4.FourEver.global.controlleradvice.responseDto.ErrorResponse;
import A4.FourEver.global.exception.FourEverException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RequiredArgsConstructor
@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(FourEverException.class)
    public ResponseEntity<ErrorResponse> processValidationError(FourEverException e) {
        return ResponseEntity.status(e.getHttpStatus()).body(new ErrorResponse(e.getCode(), e.getMessage()));
    }

}
