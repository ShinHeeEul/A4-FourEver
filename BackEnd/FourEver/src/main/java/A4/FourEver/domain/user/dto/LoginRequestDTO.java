package A4.FourEver.domain.user.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;


@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor
public class LoginRequestDTO {

    @NotBlank(message = "이메일은 공란일 수 없습니다.")
    @NotNull(message = "이메일이 없습니다.")
    @Pattern(regexp = "^[A-Za-z0-9._%+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", message = "이메일 형식이 맞지 않습니다.")
    private String email;

    @NotNull(message = "비밀번호가 없습니다.")
    @NotBlank(message = "비밀번호는 공란일 수 없습니다.")
    private String password;

}
