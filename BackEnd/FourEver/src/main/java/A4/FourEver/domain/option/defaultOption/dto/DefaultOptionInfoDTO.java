package A4.FourEver.domain.option.defaultOption.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class DefaultOptionInfoDTO {
    private Long id;
    private String name;
    private String description;
    private String category;
    private String image;
}
