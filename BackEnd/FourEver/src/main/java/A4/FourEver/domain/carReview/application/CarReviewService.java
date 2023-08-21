package A4.FourEver.domain.carReview.application;


import A4.FourEver.domain.carReview.dto.CarReviewDetailSortedDTO;
import A4.FourEver.domain.carReview.dto.CarReviewIdDTO;
import A4.FourEver.domain.carReview.dto.CarReviewResultSortedDTO;

public interface CarReviewService {
    CarReviewDetailSortedDTO getCarReviewDetail(final Long id);
    CarReviewResultSortedDTO getCarReviewResult(final CarReviewIdDTO carReviewIdDTO);
}
