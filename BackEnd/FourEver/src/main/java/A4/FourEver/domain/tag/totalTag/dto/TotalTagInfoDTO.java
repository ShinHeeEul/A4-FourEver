package A4.FourEver.domain.tag.totalTag.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class TotalTagInfoDTO {
    private Long id;
    private String name;
}
