package A4.FourEver.domain.carReview.api;


import A4.FourEver.domain.carReview.dto.CarReviewDetailSortedDTO;

public interface CarReviewController {
    CarReviewDetailSortedDTO getCarReviewDetail(final Long id);
}
