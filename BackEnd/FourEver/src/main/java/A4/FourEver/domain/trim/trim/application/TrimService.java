package A4.FourEver.domain.trim.trim.application;

import A4.FourEver.domain.trim.trim.domain.Trim;
import A4.FourEver.domain.trim.trim.dto.TrimConfigDTO;
import A4.FourEver.domain.trim.trim.dto.TrimMapper;
import A4.FourEver.domain.trim.trim.exception.TrimNotFoundException;
import A4.FourEver.domain.trim.trim.repository.TrimRepository;
import org.springframework.stereotype.Service;

@Service
public class TrimService {

    private final TrimRepository trimRepository;
    private final TrimMapper trimMapper;

    public TrimService(TrimRepository trimRepository, TrimMapper trimMapper) {
        this.trimRepository = trimRepository;
        this.trimMapper = trimMapper;
    }

    public TrimConfigDTO getById(final Long id) {
        Trim trim = trimRepository.findById(id).orElseThrow(() -> new TrimNotFoundException(id));
        return trimMapper.toTrimConfigDTO(trim);
    }
}