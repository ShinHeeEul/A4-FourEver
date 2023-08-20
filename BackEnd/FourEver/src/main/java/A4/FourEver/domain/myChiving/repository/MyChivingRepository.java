package A4.FourEver.domain.myChiving.repository;

import A4.FourEver.domain.myChiving.dto.MyChivingDetailDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingSaveDTO;

public interface MyChivingRepository {
    Long saveMyChiving(final MyChivingSaveDTO dto, final Long userId);
    void removeMyChiving(final Long id);
    MyChivingDetailDTO findMyChivingDetail(final Long id);
}
