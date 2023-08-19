package A4.FourEver.domain.carReview.repository;

import A4.FourEver.domain.carReview.dto.CarReviewDetailDTO;

public interface CarReviewRepository {
    CarReviewDetailDTO findCarReviewDetail(final Long id);

}
