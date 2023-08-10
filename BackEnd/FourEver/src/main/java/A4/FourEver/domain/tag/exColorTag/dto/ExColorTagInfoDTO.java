package A4.FourEver.domain.tag.exColorTag.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ExColorTagInfoDTO {
    private Long id;
    private String name;
    private Long count;
}
