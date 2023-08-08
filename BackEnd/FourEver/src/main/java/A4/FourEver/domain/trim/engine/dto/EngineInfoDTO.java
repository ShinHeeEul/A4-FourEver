package A4.FourEver.domain.trim.engine.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class EngineInfoDTO {
    private Long engine_id;
    private String name;
    private String image;
    private String description;
    private String max_output;
    private String max_tok;
    private Long price;
}
