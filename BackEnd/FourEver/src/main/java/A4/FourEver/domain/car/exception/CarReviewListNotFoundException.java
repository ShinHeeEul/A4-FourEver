package A4.FourEver.domain.car.exception;

import A4.FourEver.global.exception.NotFoundException;

public class CarReviewListNotFoundException extends NotFoundException {
    public CarReviewListNotFoundException(Long id) {
        super("아이디가 " + id + "인 차가 존재하지 않거나, 선택 품목 리스트의 아이디값이 유효하지 않습니다.");
    }
}
