package A4.FourEver.domain.car.application;

import A4.FourEver.domain.car.dto.*;
import A4.FourEver.domain.car.exception.CarReviewListNotFoundException;
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
    public CarExtraOptionNameDTO getCarExtraOptionNameById(final Long id) {
        return carRepository.findCarExtraOptionNameById(id);
    }

    @Override
    public CarReviewOverviewSortedListDTO getAllCarReviewOverviewList(final Long id, final List<Long> extraOptionIds) {
        CarReviewOverviewListDTO carReviewList = carRepository.findAllCarReviewOverviewList(id, extraOptionIds);
        if(carReviewList.getCarReviewOverviewDTOs().isEmpty()) throw new CarReviewListNotFoundException(id);
        return carMapper.convertToSortedDTO(carReviewList);
    }

    @Override
    public CarReviewOverviewSortedListDTO getPartialCarReviewOverviewList(final Long id, final Integer isPurchased, final List<Long> extraOptionIds) {
        CarReviewOverviewListDTO carReviewPartialList = carRepository.findPartialCarReviewOverviewList(id, isPurchased, extraOptionIds);
        if(carReviewPartialList.getCarReviewOverviewDTOs().isEmpty()) throw new CarReviewListNotFoundException(id);
        return carMapper.convertToSortedDTO(carReviewPartialList);
    }
}