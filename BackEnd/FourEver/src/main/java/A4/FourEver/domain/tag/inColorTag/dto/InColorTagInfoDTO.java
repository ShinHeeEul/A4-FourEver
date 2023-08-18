package A4.FourEver.domain.tag.inColorTag.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class InColorTagInfoDTO {
    private Long id;
    private String name;
    private Long count;
}
