package A4.FourEver.domain.archiving.repository;

import A4.FourEver.domain.archiving.dto.MyChivingRequestDTO;

public interface MyChivingRepository {
    void saveMyChiving(final MyChivingRequestDTO dto, final Long userId);
    void removeMyChiving(final Long id);
}
