package A4.FourEver.domain.trim.engine.exception;

import A4.FourEver.global.exception.FourEverException;

public class EngineNotFoundException extends FourEverException {

    public EngineNotFoundException(final Long id) {
        super("아이디가 "+ id + "인 엔진이 존재하지 않습니다.");
    }
}
