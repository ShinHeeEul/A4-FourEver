package A4.FourEver.domain.option.extraOption.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class ExtraOptionNameAndImageDTO {
    private Long id;
    private String name;
    private String image;
}
