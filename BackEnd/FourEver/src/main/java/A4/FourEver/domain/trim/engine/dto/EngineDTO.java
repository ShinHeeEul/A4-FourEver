package A4.FourEver.domain.trim.engine.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class EngineDTO {

    private Long engine_id;
    private String name;
    private String image;
    private String description;
    private String max_output;
    private String max_tok;
    private Long price;
}
