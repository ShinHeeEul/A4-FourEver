package A4.FourEver.domain.option.extraOption.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ExtraOptionNameAndImageDTO {
    private Long id;
    private String name;
    private String image;
}
