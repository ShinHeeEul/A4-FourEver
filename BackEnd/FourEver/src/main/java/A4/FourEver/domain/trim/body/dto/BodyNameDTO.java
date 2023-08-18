package A4.FourEver.domain.trim.body.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class BodyNameDTO {
    private Long id;
    private String name;
}
