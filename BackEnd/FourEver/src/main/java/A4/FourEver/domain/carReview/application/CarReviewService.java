package A4.FourEver.domain.carReview.application;


import A4.FourEver.domain.carReview.dto.CarReviewDetailSortedDTO;

public interface CarReviewService {
    CarReviewDetailSortedDTO getCarReviewDetail(final Long id);
}
