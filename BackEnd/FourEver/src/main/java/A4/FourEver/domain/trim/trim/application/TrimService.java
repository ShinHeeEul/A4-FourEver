package A4.FourEver.domain.trim.trim.application;

import A4.FourEver.domain.trim.trim.domain.Trim;
import A4.FourEver.domain.trim.trim.dto.TrimDTO;
import A4.FourEver.domain.trim.trim.dto.TrimMapper;
import A4.FourEver.domain.trim.trim.exception.TrimNotFoundException;
import A4.FourEver.domain.trim.trim.repository.TrimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrimService {


    private final TrimRepository trimRepository;
    private final TrimMapper trimMapper;

    @Autowired
    public TrimService(TrimRepository trimRepository, TrimMapper trimMapper) {
        this.trimRepository = trimRepository;
        this.trimMapper = trimMapper;
    }

    public List<TrimDTO> getAllTrimsByCarId(Long car_id) {
        return trimMapper.toTrimDTOList(trimRepository.findAllOnlyTrimByCarId(car_id));
    }

    public TrimDTO getTrimById(Long trim_id) {
        Trim trim = trimRepository.findOnlyTrim(trim_id).orElseThrow(() -> new TrimNotFoundException(trim_id));
        return trimMapper.toTrimDTO(trim);
    }
}
