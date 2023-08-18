package A4.FourEver.domain.review.carReview.application;

import A4.FourEver.domain.review.carReview.dto.CarReviewDetailSortedDTO;
import A4.FourEver.domain.review.carReview.dto.CarReviewMapper;
import A4.FourEver.domain.review.carReview.repository.CarReviewRepository;
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
}
