package A4.FourEver.domain.user.domain;

import lombok.Builder;
import lombok.Getter;



@Getter
@Builder
public class User {
    private Long id;
    private String email;
}
