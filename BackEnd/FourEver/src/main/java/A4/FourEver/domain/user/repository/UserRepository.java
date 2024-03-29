package A4.FourEver.domain.user.repository;

import A4.FourEver.domain.carReview.dto.CarReviewOverviewDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingOverviewDTO;
import A4.FourEver.domain.user.domain.User;

import java.util.Set;

public interface UserRepository {
    User findUserByEmail(final String userEmail);

    void saveUser(final String email, final String password);

    void saveUserCarReviewById(final Long userId, final Long carReviewId);

    void removeUserCarReviewById(final Long userId, final Long carReviewId);

    Set<MyChivingOverviewDTO> findMyChivingById(final Long userId);

    Set<CarReviewOverviewDTO> findCarReviewById(final Long userId);
}
