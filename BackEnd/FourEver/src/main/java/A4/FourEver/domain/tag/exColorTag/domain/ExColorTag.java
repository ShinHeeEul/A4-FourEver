package A4.FourEver.domain.tag.exColorTag.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class ExColorTag {

    @Id
    private Long ex_color_tag_id;
    private String name;
    private Long count;
}
