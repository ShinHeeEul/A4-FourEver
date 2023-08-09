package A4.FourEver.domain.tag.extraOptionTag.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class ExtraOptionTag {

    @Id
    private Long id;
    private String name;
    private Long count;
}
