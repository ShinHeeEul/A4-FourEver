package A4.FourEver.domain.trim.body.exception;

import A4.FourEver.global.exception.FourEverException;

public class BodyNotFoundException extends FourEverException {

    public BodyNotFoundException(Long id) {
        super("아이디가 " + id + "인 바디타입이 존재하지 않습니다.");
    }
}
