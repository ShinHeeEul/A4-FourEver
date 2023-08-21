package A4.FourEver.domain.carReview.api;


import A4.FourEver.domain.carReview.dto.CarReviewDetailSortedDTO;
import A4.FourEver.domain.carReview.dto.CarReviewIdDTO;
import A4.FourEver.domain.carReview.dto.CarReviewResultSortedDTO;

public interface CarReviewController {
    CarReviewDetailSortedDTO getCarReviewDetail(final Long id);
    CarReviewResultSortedDTO getCarReviewResult(final CarReviewIdDTO carReviewIdDTO);
}
