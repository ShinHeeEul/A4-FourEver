package A4.FourEver.domain.color.exColor.dto;

import A4.FourEver.domain.tag.exColorTag.dto.ExColorTagInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.Set;

@Builder
@Getter
public class ExColorInfoDTO {
    private Long id;
    private String name;
    private String color_image;
    private String rotation_image;
    private Double price;
    private Set<ExColorTagInfoDTO> exColorTagInfoDTOS;
}
