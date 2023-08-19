package A4.FourEver.domain.archiving.application;

import A4.FourEver.domain.archiving.dto.MyChivingRequestDTO;

public interface MyChivingService {
    void saveMyChiving(final MyChivingRequestDTO dto, final Long userId);
    void removeMyChiving(final Long id);
}
