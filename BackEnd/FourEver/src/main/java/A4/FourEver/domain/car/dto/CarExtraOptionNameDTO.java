package A4.FourEver.domain.car.dto;

import A4.FourEver.domain.option.extraOption.dto.ExtraOptionNameDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class CarExtraOptionNameDTO {
    private List<ExtraOptionNameDTO> extraOptionNameDTOs;
}
