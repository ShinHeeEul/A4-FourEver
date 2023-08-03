package A4.FourEver.domain.trim.engine.api;

import A4.FourEver.domain.trim.engine.application.EngineService;
import A4.FourEver.domain.trim.engine.dto.EngineDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "엔진 정보")
@RestController
@RequestMapping("/cars/{car_id}/trim/engines")
public class EngineController {

    @Autowired
    private EngineService engineService;

    @Operation(summary = "모든 엔진 정보 조회")
    @GetMapping
    public List<EngineDTO> getAllEnginesByCarId(@PathVariable Long car_id) {
        return engineService.getAllEnginesByCarId(car_id);
    }

    @Operation(summary = "특정 엔진 정보 조회")
    @GetMapping("/{engine_id}")
    public EngineDTO getEngineById(@PathVariable Long car_id, @PathVariable Long Engine_id) {
        return engineService.getEngineById(Engine_id);
    }
}
