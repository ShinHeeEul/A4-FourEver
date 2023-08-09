package A4.FourEver.domain.car.application;

import A4.FourEver.domain.car.dto.CarConfigDTO;
import A4.FourEver.domain.car.repository.CarRepository;
import org.springframework.stereotype.Service;

@Service
public class CarService {

    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public CarConfigDTO getCarConfigById(final Long id) {
        return carRepository.findCarConfigById(id);
    }
}