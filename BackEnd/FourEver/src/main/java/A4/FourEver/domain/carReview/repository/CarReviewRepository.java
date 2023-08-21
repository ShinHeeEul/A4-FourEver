package A4.FourEver.domain.carReview.repository;

import A4.FourEver.domain.carReview.dto.CarReviewDetailDTO;
import A4.FourEver.domain.carReview.dto.CarReviewIdDTO;
import A4.FourEver.domain.carReview.dto.CarReviewResultDTO;

public interface CarReviewRepository {
    CarReviewDetailDTO findCarReviewDetail(final Long id);
    CarReviewResultDTO findCarReviewResult(final CarReviewIdDTO carReviewIdDTO);
}
