package A4.FourEver.domain.carReview.domain;

import lombok.Getter;
import nonapi.io.github.classgraph.json.Id;

import java.sql.Timestamp;

@Getter
public class CarReview {

    @Id
    private Long id;
    private String writer;
    private Boolean is_purchase;
    private String comment;
    private Double price;
    private Long model_id;
    private Long ex_color_id;
    private Long in_color_id;
    private Timestamp created_at;
}
