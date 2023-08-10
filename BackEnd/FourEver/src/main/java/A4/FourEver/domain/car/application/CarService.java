package A4.FourEver.domain.car.application;

import A4.FourEver.domain.car.dto.CarTrimsSortedDTO;

public interface CarService {
    CarTrimsSortedDTO getCarTrimsById(final Long id);
}
