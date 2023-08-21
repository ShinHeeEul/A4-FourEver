package A4.FourEver.domain.carReview.application;

import A4.FourEver.domain.carReview.dto.*;
import A4.FourEver.domain.carReview.repository.CarReviewRepository;
import org.springframework.stereotype.Service;

@Service
public class CarReviewServiceDefaultImpl implements CarReviewService {

    private final CarReviewRepository carReviewRepository;
    private final CarReviewMapper carReviewMapper;

    public CarReviewServiceDefaultImpl(CarReviewRepository carReviewRepository, CarReviewMapper carReviewMapper) {
        this.carReviewRepository = carReviewRepository;
        this.carReviewMapper = carReviewMapper;
    }

    @Override
    public CarReviewDetailSortedDTO getCarReviewDetail(Long id) {
        return carReviewMapper.convertToSortedDTO(carReviewRepository.findCarReviewDetail(id));
    }

    @Override
    public CarReviewResultSortedDTO getCarReviewResult(CarReviewIdDTO carReviewIdDTO) {
        return carReviewMapper.convertToSortedDTO(carReviewRepository.findCarReviewResult(carReviewIdDTO), carReviewIdDTO.getCar_name());
    }
}
