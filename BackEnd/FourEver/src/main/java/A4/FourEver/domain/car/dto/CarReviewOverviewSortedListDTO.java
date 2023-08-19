package A4.FourEver.domain.car.dto;

import A4.FourEver.domain.carReview.dto.CarReviewOverviewSortedDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class CarReviewOverviewSortedListDTO {
    private List<CarReviewOverviewSortedDTO> carReviewOverviewDTOs;
}
