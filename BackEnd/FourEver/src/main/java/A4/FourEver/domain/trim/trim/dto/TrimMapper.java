package A4.FourEver.domain.trim.trim.dto;

import A4.FourEver.domain.trim.trim.domain.Trim;
import org.springframework.stereotype.Component;

@Component
public class TrimMapper {

    public TrimConfigDTO toTrimConfigDTO(final Trim trim) {
        return TrimConfigDTO.builder()
                .inColors(trim.getInColors())
                .exColors(trim.getExColors())
                .build();
    }
}
