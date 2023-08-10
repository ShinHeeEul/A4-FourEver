package A4.FourEver.domain.trim.trim.application;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimColorsAndTagsDTO;
import A4.FourEver.domain.trim.trim.dto.TrimMapper;
import A4.FourEver.domain.trim.trim.repository.TrimRepository;
import A4.FourEver.domain.trim.trim.repository.TrimRepositoryDefaultImpl;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class TrimServiceDefaultImpl implements TrimService{

    private final TrimRepository trimRepository;
    private final TrimMapper trimMapper;

    public TrimServiceDefaultImpl(TrimRepositoryDefaultImpl trimRepositoryDefaultImpl, TrimMapper trimMapper) {
        this.trimRepository = trimRepositoryDefaultImpl;
        this.trimMapper = trimMapper;
    }

    @Override
    public TrimColorsAndTagsDTO getTrimColorsAndTagsById(final Long id) {
        Set<InColorInfoDTO> inColorInfoDTOs = trimRepository.findTrimInColorsAndTagsById(id);
        Set<ExColorInfoDTO> exColorInfoDTOs = trimRepository.findTrimExColorsAndTagsById(id);
        return trimMapper.convertToSortedDTO(inColorInfoDTOs, exColorInfoDTOs);
    }
}