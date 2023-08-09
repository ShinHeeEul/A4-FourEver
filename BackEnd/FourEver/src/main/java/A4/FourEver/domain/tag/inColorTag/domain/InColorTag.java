package A4.FourEver.domain.tag.inColorTag.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class InColorTag {

    @Id
    private Long in_color_tag_id;
    private String name;
    private Long count;
}
