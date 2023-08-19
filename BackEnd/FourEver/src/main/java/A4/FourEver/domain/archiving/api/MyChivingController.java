package A4.FourEver.domain.archiving.api;

import A4.FourEver.domain.archiving.dto.MyChivingRequestDTO;

public interface MyChivingController {
    void createMyChiving(final MyChivingRequestDTO dto, final Long userId);
    void deleteMyChiving(final Long id);
}
