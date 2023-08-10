package A4.FourEver.domain.model.dto;

import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoSortedDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class ModelOptionConfigDTO {
    private List<ExtraOptionInfoSortedDTO> extraOptionInfoSortedDTOs;
    private List<DefaultOptionInfoDTO> defaultOptionInfoDTOs;
}
