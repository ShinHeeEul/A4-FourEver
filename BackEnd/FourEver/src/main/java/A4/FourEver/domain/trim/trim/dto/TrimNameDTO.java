package A4.FourEver.domain.trim.trim.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class TrimNameDTO {
    private Long id;
    private String name;
}
