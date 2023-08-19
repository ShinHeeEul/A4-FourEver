package A4.FourEver.domain.user.application;

import A4.FourEver.domain.user.dto.UserFeedDTO;

public interface UserService {

    Long saveUser(String email, String password);
    UserFeedDTO getUserFeedsById(Long userId);
}
