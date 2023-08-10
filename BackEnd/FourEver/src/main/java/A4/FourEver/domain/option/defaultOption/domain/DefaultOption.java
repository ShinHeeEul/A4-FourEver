package A4.FourEver.domain.option.defaultOption.domain;

import lombok.Getter;

@Getter
public class DefaultOption {
    private Long id;
    private String name;
    private String description;
    private String image;
    private Long default_option_category_id;
}
