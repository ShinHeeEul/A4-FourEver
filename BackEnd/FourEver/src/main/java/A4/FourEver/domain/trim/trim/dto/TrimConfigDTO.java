package A4.FourEver.domain.trim.trim.dto;

import A4.FourEver.domain.color.exColor.domain.ExColor;
import A4.FourEver.domain.color.inColor.domain.InColor;
import lombok.Builder;
import lombok.Getter;

import java.util.Set;

@Builder
@Getter
public class TrimConfigDTO {
    private Set<InColor> inColors;
    private Set<ExColor> exColors;
}
