package A4.FourEver.domain.color.inColor.dto;

import A4.FourEver.domain.tag.inColorTag.dto.InColorTagInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.Set;

@Builder
@Getter
public class InColorInfoDTO {
    private Long id;
    private String name;
    private String color_image;
    private String in_image;
    private Set<InColorTagInfoDTO> inColorTagInfoDTOS;
}
