package A4.FourEver.domain.trim.body.api;

import A4.FourEver.domain.trim.body.application.BodyService;
import A4.FourEver.domain.trim.body.dto.BodyDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "바디타입 정보")
@RestController
@RequestMapping("/cars/{car_id}/trim/bodies")
public class BodyController {

    @Autowired
    private BodyService bodyService;

    @Operation(summary = "모든 바디 타입 정보 조회")
    @GetMapping
    public List<BodyDTO> getAllBodiesByCarId(@PathVariable final Long car_id) {
        return bodyService.getAllBodiesByCarId(car_id);
    }

    @Operation(summary = "특정 바디 타입 조회")
    @GetMapping("/{Body_id}")
    public BodyDTO getBodyById(@PathVariable final Long car_id, @PathVariable final Long Body_id) {
        return bodyService.getBodyById(Body_id);
    }
}

