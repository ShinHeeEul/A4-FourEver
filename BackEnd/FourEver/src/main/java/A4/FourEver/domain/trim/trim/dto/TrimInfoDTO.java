package A4.FourEver.domain.trim.trim.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class TrimInfoDTO {
    private Long trim_id;
    private String name;
    private String image;
    private Long price;
}
