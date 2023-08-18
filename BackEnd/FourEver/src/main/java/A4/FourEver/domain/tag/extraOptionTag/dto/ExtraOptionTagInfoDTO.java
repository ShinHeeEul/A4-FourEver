package A4.FourEver.domain.tag.extraOptionTag.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class ExtraOptionTagInfoDTO {
    private Long id;
    private String name;
    private Long count;
}
