package A4.FourEver.domain.model.api;

import A4.FourEver.domain.model.dto.ModelOptionsSortedDTO;

public interface ModelController {
    ModelOptionsSortedDTO getModelOption(final Long trim_id, final Long body_id, final Long engine_id, final Long drive_id);
}
