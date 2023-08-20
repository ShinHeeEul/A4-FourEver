package A4.FourEver.domain.myChiving.api;

import A4.FourEver.domain.myChiving.dto.MyChivingDetailSortedDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingIdDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingSaveDTO;

public interface MyChivingController {
    MyChivingIdDTO createMyChiving(final MyChivingSaveDTO dto, final Long userId);
    MyChivingDetailSortedDTO getMyChivingDetail(final Long id);
    void deleteMyChiving(final Long id);
}
