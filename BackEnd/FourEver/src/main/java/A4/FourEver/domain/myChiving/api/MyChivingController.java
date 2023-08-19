package A4.FourEver.domain.myChiving.api;

import A4.FourEver.domain.myChiving.dto.MyChivingRequestDTO;

public interface MyChivingController {
    void createMyChiving(final MyChivingRequestDTO dto, final Long userId);
    void deleteMyChiving(final Long id);
}
