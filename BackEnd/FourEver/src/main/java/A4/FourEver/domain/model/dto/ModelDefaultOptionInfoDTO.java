package A4.FourEver.domain.model.dto;

import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.Set;

@Builder
@Getter
public class ModelDefaultOptionInfoDTO {
    private Set<DefaultOptionInfoDTO> defaultOptionInfoDTOs;
}
