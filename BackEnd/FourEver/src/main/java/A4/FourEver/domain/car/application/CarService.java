package A4.FourEver.domain.car.application;

import A4.FourEver.domain.car.dto.CarInfoDTO;
import A4.FourEver.domain.car.dto.CarConfigDTO;
import A4.FourEver.domain.car.dto.CarMapper;
import A4.FourEver.domain.car.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    private final CarRepository carRepository;
    private final CarMapper carMapper;

    public CarService(CarRepository carRepository, CarMapper carMapper) {
        this.carRepository = carRepository;
        this.carMapper = carMapper;
    }

    public List<CarInfoDTO> getAllCars() {
        return carMapper.toCarInfoDTOList(carRepository.findAll());
    }

    public CarConfigDTO getCarConfigById(final Long id) {
        return carRepository.findCarConfigById(id);
    }
}