package A4.FourEver.domain.option.defaultOption.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class DefaultOption {

    @Id
    private Long id;
    private String name;
    private String description;
    private String image;
}
