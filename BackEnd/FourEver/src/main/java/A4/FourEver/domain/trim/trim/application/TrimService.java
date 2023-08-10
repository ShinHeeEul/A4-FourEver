package A4.FourEver.domain.trim.trim.application;

import A4.FourEver.domain.trim.trim.dto.TrimColorsAndTagsDTO;

public interface TrimService {
    TrimColorsAndTagsDTO getTrimColorsAndTagsById(final Long id);
}
