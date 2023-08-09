package A4.FourEver.domain.option.defaultOption.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class DefaultOptionInfoDTO {
    private Long default_option_id;
    private String name;
    private String description;
    private String category;
    private String image;
}
