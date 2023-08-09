package A4.FourEver.domain.model.application;

import A4.FourEver.domain.model.dto.ModelDefaultOptionInfoDTO;
import A4.FourEver.domain.model.dto.ModelExtraOptionInfoDTO;
import A4.FourEver.domain.model.dto.ModelOptionInfoDTO;
import A4.FourEver.domain.model.repository.ModelRepository;
import org.springframework.stereotype.Service;

@Service
public class ModelService {

    private final ModelRepository modelRepository;

    public ModelService(ModelRepository modelRepository) {
        this.modelRepository = modelRepository;
    }

    public ModelOptionInfoDTO getModelOption(final Long trim_id, final Long engine_id, final Long body_id, final Long drive_id) {
        ModelDefaultOptionInfoDTO modelDefaultOptionInfoDTO = modelRepository.findModelDefaultOption(trim_id, engine_id, body_id, drive_id);
        ModelExtraOptionInfoDTO modelExtraOptionInfoDTO = modelRepository.findModelExtraOption(trim_id, engine_id, body_id, drive_id);

        return ModelOptionInfoDTO.builder()
                .defaultOptionInfoDTOs(modelDefaultOptionInfoDTO.getDefaultOptionInfoDTOs())
                .extraOptionInfoDTOs(modelExtraOptionInfoDTO.getExtraOptionInfoDTOs())
                .build();
    }
}
