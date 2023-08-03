package A4.FourEver.domain.trim.trim.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class TrimDTO {

    private Long trim_id;
    private String name;
    private String image;
    private Long price;
}
