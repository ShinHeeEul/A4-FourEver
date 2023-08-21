package A4.FourEver.domain.carReview.exception;

import A4.FourEver.global.exception.NotFoundException;

public class CarReviewDetailNotFoundException extends NotFoundException {
    public CarReviewDetailNotFoundException(final Long carReviewId) {
        super("아이디가 " + carReviewId + "인 구매 혹은 시승 후기는 존재하지 않습니다.");
    }
}
