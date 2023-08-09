package A4.FourEver.domain.trim.engine.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class Engine {

    @Id
    private Long id;
    private String name;
    private String image;
    private String description;
    private String max_output;
    private String max_tok;
    private Double price;
}

