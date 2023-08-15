package A4.FourEver.domain.option.extraOption.dto;

import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionNameDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class ExtraOptionForCarReviewSortedDTO {
    private Long id;
    private String name;
    private String image;
    private Integer x_position;
    private Integer y_position;
    private List<ExtraOptionTagInfoDTO> extraOptionTagInfoDTOS;
    private List<SubExtraOptionNameDTO> subExtraOptionNameDTOs;
}
