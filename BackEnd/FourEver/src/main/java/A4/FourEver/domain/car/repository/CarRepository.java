package A4.FourEver.domain.car.repository;

import A4.FourEver.domain.car.dto.CarExtraOptionNameDTO;
import A4.FourEver.domain.car.dto.CarReviewOverviewListDTO;
import A4.FourEver.domain.car.dto.CarTrimsDTO;

import java.util.List;

public interface CarRepository {
    CarTrimsDTO findCarTrimsById(final Long id);
    CarExtraOptionNameDTO findCarExtraOptionNameById(final Long id);
    CarReviewOverviewListDTO findAllCarReviewOverviewList(final Long id, final List<Integer> extraOptionIds);
    CarReviewOverviewListDTO findPartialCarReviewOverviewList(final Long id, final Integer isPurchased, final List<Integer> extraOptionIds);
}
