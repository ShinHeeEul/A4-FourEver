package A4.FourEver.domain.myChiving.exception;

import A4.FourEver.global.exception.NotFoundException;

public class MyChivingNotFoundException extends NotFoundException {
    public MyChivingNotFoundException(Long id) {
        super("아이디가 " + id + "인 내 차 만들기 결과는 존재하지 않거나 아직 완성되지 않았습니다.");
    }
}
