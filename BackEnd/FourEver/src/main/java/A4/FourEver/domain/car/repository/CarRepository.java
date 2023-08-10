package A4.FourEver.domain.car.repository;

import A4.FourEver.domain.car.dto.CarTrimsDTO;

public interface CarRepository {
    CarTrimsDTO findCarTrimsById(final Long id);
}
