package A4.FourEver.domain.color.inColor.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class InColorNameAndImageDTO {
    private Long id;
    private String name;
    private String color_image;
}
