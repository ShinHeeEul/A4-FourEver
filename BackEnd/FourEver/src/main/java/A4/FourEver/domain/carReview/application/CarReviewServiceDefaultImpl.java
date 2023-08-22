package A4.FourEver.domain.carReview.application;

import A4.FourEver.domain.carReview.dto.*;
import A4.FourEver.domain.carReview.exception.CarReviewDetailNotFoundException;
import A4.FourEver.domain.carReview.exception.CarReviewResultNotFoundException;
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
    public CarReviewDetailSortedDTO getCarReviewDetail(final Long id, final Long userId) {
        CarReviewDetailDTO carReviewDetail = carReviewRepository.findCarReviewDetail(id, userId);
        if(carReviewDetail == null) throw new CarReviewDetailNotFoundException(id);
        return carReviewMapper.convertToSortedDTO(carReviewDetail);
    }

    @Override
    public CarReviewResultSortedDTO getCarReviewResult(final CarReviewIdDTO carReviewIdDTO) {
        CarReviewResultDTO carReviewResultDTO = carReviewRepository.findCarReviewResult(carReviewIdDTO);
        if(carReviewResultDTO == null) throw new CarReviewResultNotFoundException();
        return carReviewMapper.convertToSortedDTO(carReviewResultDTO, carReviewIdDTO.getCar_name());
    }
}
