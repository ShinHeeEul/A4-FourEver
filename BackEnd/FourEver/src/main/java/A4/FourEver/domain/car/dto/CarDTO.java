package A4.FourEver.domain.car.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class CarDTO {

    private Long car_id;
    private String name;
}
