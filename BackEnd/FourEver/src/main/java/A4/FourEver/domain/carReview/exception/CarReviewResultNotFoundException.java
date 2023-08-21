package A4.FourEver.domain.carReview.exception;

import A4.FourEver.global.exception.NotFoundException;

public class CarReviewResultNotFoundException extends NotFoundException {
    public CarReviewResultNotFoundException() {
        super("주어진 데이터를 이용했을 때 올바른 응답 결과를 찾을 수 없습니다.");
    }
}
