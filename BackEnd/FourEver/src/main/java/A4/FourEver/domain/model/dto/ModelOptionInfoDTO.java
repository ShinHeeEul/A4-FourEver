package A4.FourEver.domain.model.dto;

import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.Set;

@Builder
@Getter
public class ModelOptionInfoDTO {
    private Set<ExtraOptionInfoDTO> extraOptionInfoDTOs;
    private Set<DefaultOptionInfoDTO> defaultOptionInfoDTOs;
}
