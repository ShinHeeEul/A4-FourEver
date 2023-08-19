package A4.FourEver.domain.myChiving.repository;

import A4.FourEver.domain.myChiving.dto.MyChivingRequestDTO;

public interface MyChivingRepository {
    void saveMyChiving(final MyChivingRequestDTO dto, final Long userId);
    void removeMyChiving(final Long id);
}
