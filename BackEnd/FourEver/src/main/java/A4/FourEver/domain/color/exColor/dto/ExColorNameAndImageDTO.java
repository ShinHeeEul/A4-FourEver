package A4.FourEver.domain.color.exColor.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ExColorNameAndImageDTO {
    private Long id;
    private String name;
    private String color_image;
}
