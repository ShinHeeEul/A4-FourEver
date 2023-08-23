package A4.FourEver.domain.car.application;

import A4.FourEver.domain.car.dto.CarExtraOptionNameDTO;
import A4.FourEver.domain.car.dto.CarReviewOverviewSortedListDTO;
import A4.FourEver.domain.car.dto.CarTrimsSortedDTO;

import java.util.List;

public interface CarService {
    CarTrimsSortedDTO getCarTrimsById(final Long id);
    CarExtraOptionNameDTO getCarExtraOptionNameById(final Long id);
    CarReviewOverviewSortedListDTO getAllCarReviewOverviewList(final Long id, final List<Long> extraOptionIds);
    CarReviewOverviewSortedListDTO getPartialCarReviewOverviewList(final Long id, final Integer isPurchased, final List<Long> extraOptionIds);
}
