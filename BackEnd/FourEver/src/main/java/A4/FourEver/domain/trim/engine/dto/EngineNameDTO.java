package A4.FourEver.domain.trim.engine.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class EngineNameDTO {
    private Long id;
    private String name;
}
