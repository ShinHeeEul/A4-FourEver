package A4.FourEver.domain.car.application;

import A4.FourEver.domain.car.dto.*;
import A4.FourEver.domain.car.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceDefaultImpl implements CarService {

    private final CarRepository carRepository;
    private final CarMapper carMapper;

    public CarServiceDefaultImpl(CarRepository carRepository, CarMapper carMapper) {
        this.carRepository = carRepository;
        this.carMapper = carMapper;
    }

    @Override
    public CarTrimsSortedDTO getCarTrimsById(final Long id) {
        return carMapper.convertToSortedDTO(carRepository.findCarTrimsById(id));
    }

    @Override
    public CarExtraOptionNameDTO getCarExtraOptionNameById(Long id) {
        return carRepository.findCarExtraOptionNameById(id);
    }

    @Override
    public CarReviewOverviewSortedListDTO getAllCarReviewOverviewList(final Long id, final List<Long> extraOptionIds) {
        return carMapper.convertToSortedDTO(carRepository.findAllCarReviewOverviewList(id, extraOptionIds));
    }

    @Override
    public CarReviewOverviewSortedListDTO getPartialCarReviewOverviewList(final Long id, final Integer isPurchased, final List<Long> extraOptionIds) {
        return carMapper.convertToSortedDTO(carRepository.findPartialCarReviewOverviewList(id, isPurchased, extraOptionIds));
    }
}