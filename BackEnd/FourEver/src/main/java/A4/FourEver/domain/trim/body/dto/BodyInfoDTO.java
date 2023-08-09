package A4.FourEver.domain.trim.body.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class BodyInfoDTO {
    private Long id;
    private String name;
    private String image;
    private String description;
    private Double price;
}
