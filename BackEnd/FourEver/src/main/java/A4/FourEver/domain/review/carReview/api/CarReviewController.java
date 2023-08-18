package A4.FourEver.domain.review.carReview.api;


import A4.FourEver.domain.review.carReview.dto.CarReviewDetailSortedDTO;

public interface CarReviewController {
    CarReviewDetailSortedDTO getCarReviewDetail(final Long id);
}
