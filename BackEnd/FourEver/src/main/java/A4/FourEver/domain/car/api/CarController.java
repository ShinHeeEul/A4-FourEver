package A4.FourEver.domain.car.api;

import A4.FourEver.domain.car.dto.CarExtraOptionNameDTO;
import A4.FourEver.domain.car.dto.CarReviewOverviewSortedListDTO;
import A4.FourEver.domain.car.dto.CarTrimsSortedDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionListDTO;

public interface CarController {
    CarTrimsSortedDTO getCarTrimsById(final Long id);
    CarExtraOptionNameDTO getCarExtraOptionNameById(final Long id);
    CarReviewOverviewSortedListDTO getAllCarReviewOverviewList(final Long id, final ExtraOptionListDTO request);
    CarReviewOverviewSortedListDTO getPartialCarReviewOverviewList(final Long id, final Integer isPurchased, final ExtraOptionListDTO request);
}