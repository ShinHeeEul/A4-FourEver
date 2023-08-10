package A4.FourEver.domain.tag.exColorTag.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class ExColorTagInfoDTO {
    private Long id;
    private String name;
    private Long count;
}
