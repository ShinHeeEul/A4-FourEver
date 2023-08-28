package A4.FourEver.domain.user.application;


import A4.FourEver.domain.carReview.dto.CarReviewOverviewDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingOverviewDTO;
import A4.FourEver.domain.user.application.auth.PasswordUtil;
import A4.FourEver.domain.user.domain.User;
import A4.FourEver.domain.user.dto.UserFeedDTO;
import A4.FourEver.domain.user.dto.UserMapper;
import A4.FourEver.domain.user.exception.InvalidPasswordException;
import A4.FourEver.domain.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
public class UserServiceDefaultImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserServiceDefaultImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    @Transactional
    public Long saveUser(final String userEmail, final String password) {
        User user = userRepository.findUserByEmail(userEmail);
        if (user == null) {
            userRepository.saveUser(userEmail, PasswordUtil.hashPassword(password));
            user = userRepository.findUserByEmail(userEmail);
        }
        if (!PasswordUtil.verifyPassword(password, user.getPassword())) {
            throw new InvalidPasswordException();
        }
        return user.getId();
    }

    @Override
    public UserFeedDTO getUserFeedsById(final Long userId) {
        Set<MyChivingOverviewDTO> myChivingSet = userRepository.findMyChivingById(userId);
        Set<CarReviewOverviewDTO> carReviewSet = userRepository.findCarReviewById(userId);

        return userMapper.generateUserFeedDTO(myChivingSet, carReviewSet);
    }

    @Override
    @Transactional
    public void saveUserCarReviewById(final Long userId, final Long carReviewId) {
        userRepository.saveUserCarReviewById(userId, carReviewId);
    }

    @Override
    @Transactional
    public void deleteUserCarReviewById(final Long userId, final Long carReviewId) {
        userRepository.removeUserCarReviewById(userId, carReviewId);
    }
}
