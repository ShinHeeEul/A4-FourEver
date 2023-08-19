package A4.FourEver.domain.myChiving.application;

import A4.FourEver.domain.myChiving.dto.MyChivingSaveDTO;

public interface MyChivingService {
    void saveMyChiving(final MyChivingSaveDTO dto, final Long userId);
    void removeMyChiving(final Long id);
}
