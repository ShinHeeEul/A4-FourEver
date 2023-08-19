package A4.FourEver.domain.user.dto;

import lombok.*;

import java.sql.Timestamp;
@Getter
@Builder
public class LoginResponseDTO {
        private String JwtToken;
        private Timestamp expired;
}
