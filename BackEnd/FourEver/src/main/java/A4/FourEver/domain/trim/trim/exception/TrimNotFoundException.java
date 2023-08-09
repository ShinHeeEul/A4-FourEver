package A4.FourEver.domain.trim.trim.exception;

import A4.FourEver.global.exception.NotFoundException;

public class TrimNotFoundException extends NotFoundException {
    public TrimNotFoundException(final Long id) {
        super(id + "를 가진 트림이 존재하지 않습니다.");
    }
}
