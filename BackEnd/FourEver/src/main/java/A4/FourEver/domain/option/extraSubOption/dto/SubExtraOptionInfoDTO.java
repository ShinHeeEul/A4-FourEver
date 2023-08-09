package A4.FourEver.domain.option.extraSubOption.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class SubExtraOptionInfoDTO {
    private Long id;
    private String name;
    private String description;
    private String image;
}
