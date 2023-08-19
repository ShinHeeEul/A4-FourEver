package A4.FourEver.domain.myChiving.api;

import A4.FourEver.domain.myChiving.dto.MyChivingSaveDTO;

public interface MyChivingController {
    void createMyChiving(final MyChivingSaveDTO dto, final Long userId);
    void deleteMyChiving(final Long id);
}
