package A4.FourEver.domain.model.api;

import A4.FourEver.domain.model.application.ModelService;
import A4.FourEver.domain.model.application.ModelServiceDefaultImpl;
import A4.FourEver.domain.model.dto.ModelOptionsSortedDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "모델 정보")
@RestController
@RequestMapping("/model")
public class ModelControllerDefaultImpl implements ModelController {

    private final ModelService modelService;

    public ModelControllerDefaultImpl(ModelServiceDefaultImpl modelServiceDefaultImpl) {
        this.modelService = modelServiceDefaultImpl;
    }

    @Override
    @Operation(summary = "특정 모델의 옵션 정보 조회")
    @GetMapping("/option")
    public ModelOptionsSortedDTO getModelOption(
            @RequestParam("trim_id") final Long trim_id,
            @RequestParam("body_id") final Long body_id,
            @RequestParam("engine_id") final Long engine_id,
            @RequestParam("drive_id") final Long drive_id) {
        return modelService.getModelOptions(trim_id, body_id, engine_id, drive_id);
    }
}
