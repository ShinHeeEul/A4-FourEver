package A4.FourEver.domain.user.application;


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
    public Long saveUser(String userEmail) {
        return userRepository.saveOrFindUser(userEmail);
    }
}
