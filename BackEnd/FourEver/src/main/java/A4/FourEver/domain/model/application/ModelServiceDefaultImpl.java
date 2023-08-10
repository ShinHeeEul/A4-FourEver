package A4.FourEver.domain.model.application;

import A4.FourEver.domain.model.dto.*;
import A4.FourEver.domain.model.repository.ModelRepository;
import A4.FourEver.domain.model.repository.ModelRepositoryDefaultImpl;
import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class ModelServiceDefaultImpl implements ModelService {

    private final ModelRepository modelRepository;
    private final ModelMapper modelMapper;

    public ModelServiceDefaultImpl(ModelRepositoryDefaultImpl modelRepositoryDefaultImpl, ModelMapper modelMapper) {
        this.modelRepository = modelRepositoryDefaultImpl;
        this.modelMapper = modelMapper;
    }

    @Override
    public ModelOptionsSortedDTO getModelOptions(final Long trim_id, final Long engine_id, final Long body_id, final Long drive_id) {
        Set<DefaultOptionInfoDTO> defaultOptionInfoDTOs = modelRepository.findModelDefaultOption(trim_id, engine_id, body_id, drive_id);
        Set<ExtraOptionInfoDTO> extraOptionInfoDTOs = modelRepository.findModelExtraOption(trim_id, engine_id, body_id, drive_id);
        return modelMapper.convertToSortedDTO(extraOptionInfoDTOs, defaultOptionInfoDTOs);
    }
}
