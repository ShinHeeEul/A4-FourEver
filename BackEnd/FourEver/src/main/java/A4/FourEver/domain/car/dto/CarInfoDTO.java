package A4.FourEver.domain.car.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CarInfoDTO {
    private Long car_id;
    private String name;
}
