package A4.FourEver.domain.review.carReview.repository;

import A4.FourEver.domain.review.carReview.dto.CarReviewDetailDTO;

public interface CarReviewRepository {
    CarReviewDetailDTO findCarReviewDetail(final Long id);

}
