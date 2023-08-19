package A4.FourEver.domain.user.application;


import A4.FourEver.domain.user.application.auth.PasswordUtil;
import A4.FourEver.domain.user.domain.User;
import A4.FourEver.domain.user.exception.InvalidPasswordException;
import A4.FourEver.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Primary
public class UserServiceDefaultImpl implements UserService{
    private final UserRepository userRepository;


    @Override
    public Long saveUser(String userEmail, String password) {
        User user = userRepository.findUserByEmail(userEmail);
        if(user == null) {
            userRepository.saveUser(userEmail, PasswordUtil.hashPassword(password));
            user = userRepository.findUserByEmail(userEmail);
        }
        if(!PasswordUtil.verifyPassword(password, user.getPassword())) {
            throw new InvalidPasswordException();
        }
        return user.getId();
    }

}
