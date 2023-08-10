package A4.FourEver.domain.trim.trim.application;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimConfigDTO;
import A4.FourEver.domain.trim.trim.dto.TrimMapper;
import A4.FourEver.domain.trim.trim.repository.TrimRepository;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class TrimService {

    private final TrimRepository trimRepository;
    private final TrimMapper trimMapper;

    public TrimService(TrimRepository trimRepository, TrimMapper trimMapper) {
        this.trimRepository = trimRepository;
        this.trimMapper = trimMapper;
    }

    public TrimConfigDTO getTrimColorAndTagById(final Long id) {
        Set<InColorInfoDTO> inColorInfoDTOs = trimRepository.getInColorAndTagByTrimId(id);
        Set<ExColorInfoDTO> exColorInfoDTOs = trimRepository.getExColorAndTagByTrimId(id);

        return trimMapper.toTrimConfigDTO(inColorInfoDTOs, exColorInfoDTOs);
    }
}