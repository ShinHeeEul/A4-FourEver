package A4.FourEver.domain.car.application;

import A4.FourEver.domain.car.domain.Car;
import A4.FourEver.domain.car.dto.CarDTO;
import A4.FourEver.domain.car.exception.CarNotFoundException;
import A4.FourEver.domain.car.dto.CarMapper;
import A4.FourEver.domain.car.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    private final CarRepository carRepository;
    private final CarMapper carMapper;

    @Autowired
    public CarService(CarRepository carRepository, CarMapper carMapper) {
        this.carRepository = carRepository;
        this.carMapper = carMapper;
    }

    public List<CarDTO> getAllCars() {
        return carMapper.toCarDTOList(carRepository.findAllOnlyCar());
    }

    public CarDTO getCarById(Long id) {
        Car car = carRepository.findOnlyCar(id).orElseThrow(() -> new CarNotFoundException(id));
        return carMapper.toCarDTO(car);
    }
}