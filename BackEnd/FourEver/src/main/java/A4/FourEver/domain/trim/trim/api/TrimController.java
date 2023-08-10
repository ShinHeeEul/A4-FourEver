package A4.FourEver.domain.trim.trim.api;

import A4.FourEver.domain.trim.trim.dto.TrimColorsAndTagsDTO;
import org.springframework.web.bind.annotation.PathVariable;

public interface TrimController {
    TrimColorsAndTagsDTO getTrimColorsAndTagsById(@PathVariable final Long id);
}
