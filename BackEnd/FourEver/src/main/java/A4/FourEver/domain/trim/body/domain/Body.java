package A4.FourEver.domain.trim.body.domain;

import lombok.Getter;

@Getter
public class Body {
    private Long id;
    private String name;
    private String image;
    private String description;
    private Double price;
    private Long car_id;
}
