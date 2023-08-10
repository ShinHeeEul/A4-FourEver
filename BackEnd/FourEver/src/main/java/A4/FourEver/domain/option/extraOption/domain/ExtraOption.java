package A4.FourEver.domain.option.extraOption.domain;

import lombok.Getter;

@Getter
public class ExtraOption {
    private Long id;
    private String name;
    private String description;
    private String image;
    private Double price;
    private Integer x_position;
    private Integer y_position;
    private Long extra_option_category_id;
}
