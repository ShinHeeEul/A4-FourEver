package A4.FourEver.domain.user.application.auth;

public interface AuthService {

    String getToken(String code, String state);
}
