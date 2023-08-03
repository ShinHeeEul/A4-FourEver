package A4.FourEver.domain.trim.body.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class BodyDTO {

    private Long body_id;
    private String name;
    private String image;
    private String description;
    private Long price;
}
