package A4.FourEver.domain.user.application.auth;

public interface AuthService {

    String getToken(String code, String state);

    // 계정 API 예제 사용자 정보 조회

}
