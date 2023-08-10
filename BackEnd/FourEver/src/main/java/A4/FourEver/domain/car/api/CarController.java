package A4.FourEver.domain.car.api;

import A4.FourEver.domain.car.dto.CarTrimsSortedDTO;
import org.springframework.web.bind.annotation.PathVariable;

public interface CarController {
    CarTrimsSortedDTO getCarTrimsById(@PathVariable final Long id);
}