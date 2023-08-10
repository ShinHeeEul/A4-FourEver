package A4.FourEver.domain.trim.trim.dto;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoSortedDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoSortedDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class TrimConfigDTO {
    private List<InColorInfoSortedDTO> inColors;
    private List<ExColorInfoSortedDTO> exColors;
}
