package A4.FourEver.domain.user.repository;

import A4.FourEver.domain.user.domain.User;

public interface UserRepository {
    User findUserById(Long userId);

    User findUserByEmail(String userEmail);

    void saveUser(String email, String password);
}
