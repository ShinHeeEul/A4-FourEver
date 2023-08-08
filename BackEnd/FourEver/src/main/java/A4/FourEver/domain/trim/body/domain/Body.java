package A4.FourEver.domain.trim.body.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class Body {

    @Id
    private Long body_id;
    private String name;
    private String image;
    private String description;
    private Double price;
}
