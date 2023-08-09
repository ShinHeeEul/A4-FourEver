package A4.FourEver.domain.model.application;

import A4.FourEver.domain.model.dto.*;
import A4.FourEver.domain.model.repository.ModelRepository;
import org.springframework.stereotype.Service;

@Service
public class ModelService {

    private final ModelRepository modelRepository;
    private final ModelMapper modelMapper;

    public ModelService(ModelRepository modelRepository, ModelMapper modelMapper) {
        this.modelRepository = modelRepository;
        this.modelMapper = modelMapper;
    }

    public ModelOptionInfoSortedDTO getModelOption(final Long trim_id, final Long engine_id, final Long body_id, final Long drive_id) {
        ModelDefaultOptionInfoDTO modelDefaultOptionInfoDTO = modelRepository.findModelDefaultOption(trim_id, engine_id, body_id, drive_id);
        ModelExtraOptionInfoDTO modelExtraOptionInfoDTO = modelRepository.findModelExtraOption(trim_id, engine_id, body_id, drive_id);

        return modelMapper.convertToDTO(modelExtraOptionInfoDTO.getExtraOptionInfoDTOs(), modelDefaultOptionInfoDTO.getDefaultOptionInfoDTOs());
    }
}
