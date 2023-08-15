package A4.FourEver.domain.review.carReview.application;


import A4.FourEver.domain.review.carReview.dto.CarReviewDetailSortedDTO;

public interface CarReviewService {
    CarReviewDetailSortedDTO getCarReviewDetail(final Long id);
}
