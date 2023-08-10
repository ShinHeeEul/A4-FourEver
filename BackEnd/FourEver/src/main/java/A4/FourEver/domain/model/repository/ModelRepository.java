package A4.FourEver.domain.model.repository;

import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;

import java.util.Set;

public interface ModelRepository {
    Set<DefaultOptionInfoDTO> findModelDefaultOption(final Long trim_id, final Long engine_id, final Long body_id, final Long drive_id);
    Set<ExtraOptionInfoDTO> findModelExtraOption(final Long trim_id, final Long engine_id, final Long body_id, final Long drive_id);
}
