package A4.FourEver.domain.trim.trim.repository;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;

import java.util.Set;

public interface TrimRepository {
    Set<InColorInfoDTO> findTrimInColorsAndTagsById(final Long trimId);

    Set<ExColorInfoDTO> findTrimExColorsAndTagsById(final Long trimId);
}
