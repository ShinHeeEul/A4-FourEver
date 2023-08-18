package A4.FourEver.domain.car.dto;

import A4.FourEver.domain.review.carReview.dto.CarReviewOverviewDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class CarReviewOverviewListDTO {
    private List<CarReviewOverviewDTO> carReviewOverviewDTOs;
}
