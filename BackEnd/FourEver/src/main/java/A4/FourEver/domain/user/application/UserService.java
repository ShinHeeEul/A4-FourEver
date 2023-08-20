package A4.FourEver.domain.user.application;

import A4.FourEver.domain.user.dto.UserFeedDTO;

public interface UserService {

    Long saveUser(final String email, final String password);
    UserFeedDTO getUserFeedsById(final Long userId);
    void saveUserCarReviewById(final Long userId, final Long carReviewId);
    void deleteUserCarReviewById(final Long userId, final Long carReviewId);
}
