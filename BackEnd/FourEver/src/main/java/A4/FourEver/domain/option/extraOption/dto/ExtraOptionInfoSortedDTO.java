package A4.FourEver.domain.option.extraOption.dto;

import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionInfoDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class ExtraOptionInfoSortedDTO {
    private Long id;
    private String name;
    private String description;
    private String category;
    private String image;
    private Double price;
    private Integer x_position;
    private Integer y_position;
    private List<ExtraOptionTagInfoDTO> extraOptionTagInfoDTOS;
    private List<SubExtraOptionInfoDTO> subExtraOptionInfoDTOs;
}
