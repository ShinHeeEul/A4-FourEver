package A4.FourEver.domain.car.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
public class CarInfoDTO {
    private Long car_id;
    private String name;
}
