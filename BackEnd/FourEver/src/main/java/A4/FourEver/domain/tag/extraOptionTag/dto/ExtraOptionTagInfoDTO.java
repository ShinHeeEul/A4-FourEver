package A4.FourEver.domain.tag.extraOptionTag.dto;

import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;

@Builder
@Getter
public class ExtraOptionTagInfoDTO {

    @Id
    private Long extra_option_tag_id;
    private String name;
    private Long count;
}
