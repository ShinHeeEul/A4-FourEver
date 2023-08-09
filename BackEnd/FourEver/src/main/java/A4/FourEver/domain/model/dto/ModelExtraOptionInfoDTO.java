package A4.FourEver.domain.model.dto;

import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.Set;

@Builder
@Getter
public class ModelExtraOptionInfoDTO {
    private Set<ExtraOptionInfoDTO> extraOptionInfoDTOs;
}
