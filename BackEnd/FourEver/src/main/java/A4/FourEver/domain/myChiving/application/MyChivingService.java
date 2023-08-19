package A4.FourEver.domain.myChiving.application;

import A4.FourEver.domain.myChiving.dto.MyChivingRequestDTO;

public interface MyChivingService {
    void saveMyChiving(final MyChivingRequestDTO dto, final Long userId);
    void removeMyChiving(final Long id);
}
