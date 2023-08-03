package A4.FourEver.domain.trim.trim.exception;

import A4.FourEver.global.exception.FourEverException;

public class TrimNotFoundException extends FourEverException {

    public TrimNotFoundException(final Long id) {
        super("아이디가" + id + "인 트림이 존재하지 않습니다.");
    }
}
