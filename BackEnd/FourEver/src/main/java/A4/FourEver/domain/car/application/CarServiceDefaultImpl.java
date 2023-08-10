package A4.FourEver.domain.car.application;

import A4.FourEver.domain.car.dto.CarTrimsSortedDTO;
import A4.FourEver.domain.car.dto.CarMapper;
import A4.FourEver.domain.car.repository.CarRepository;
import A4.FourEver.domain.car.repository.CarRepositoryDefaultImpl;
import org.springframework.stereotype.Service;

@Service
public class CarServiceDefaultImpl implements CarService {

    private final CarRepository carRepository;
    private final CarMapper carMapper;

    public CarServiceDefaultImpl(CarRepositoryDefaultImpl carRepositoryDefaultImpl, CarMapper carMapper) {
        this.carRepository = carRepositoryDefaultImpl;
        this.carMapper = carMapper;
    }

    @Override
    public CarTrimsSortedDTO getCarTrimsById(final Long id) {
        return carMapper.convertToSortedDTO(carRepository.findCarTrimsById(id));
    }
}