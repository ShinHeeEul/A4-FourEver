package A4.FourEver.domain.model.application;

import A4.FourEver.domain.model.dto.ModelOptionsSortedDTO;

public interface ModelService {
    ModelOptionsSortedDTO getModelOptions(final Long trim_id, final Long engine_id, final Long body_id, final Long drive_id);
}
