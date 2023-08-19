package A4.FourEver.domain.archiving.domain;

import lombok.Getter;
import nonapi.io.github.classgraph.json.Id;

import java.sql.Timestamp;

@Getter
public class MyChiving {

    @Id
    private Long id;
    private Integer is_end;
    private Double price;
    private Long user_id;
    private Long model_id;
    private Long ex_color_id;
    private Long in_color_id;
    private Timestamp updated_at;
}
