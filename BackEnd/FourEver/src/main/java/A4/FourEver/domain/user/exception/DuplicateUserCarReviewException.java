package A4.FourEver.domain.user.exception;

import A4.FourEver.global.exception.DuplicateDataException;

public class DuplicateUserCarReviewException extends DuplicateDataException {
    public DuplicateUserCarReviewException(Long userId, Long reviewId) {
        super("아이디가 " + userId + " 사용자는 이미 아이디가 " + reviewId + "인 후기를 저장한 상태입니다." );
    }
}
