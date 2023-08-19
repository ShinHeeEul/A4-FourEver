package A4.FourEver.domain.myChiving.repository;

import A4.FourEver.domain.myChiving.dto.MyChivingSaveDTO;

public interface MyChivingRepository {
    void saveMyChiving(final MyChivingSaveDTO dto, final Long userId);
    void removeMyChiving(final Long id);
}
