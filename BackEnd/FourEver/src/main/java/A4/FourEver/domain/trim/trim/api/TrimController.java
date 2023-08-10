package A4.FourEver.domain.trim.trim.api;

import A4.FourEver.domain.trim.trim.application.TrimService;
import A4.FourEver.domain.trim.trim.dto.TrimConfigDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "치량 정보")
@RestController
@RequestMapping("/trims")
public class TrimController {

    private final TrimService trimService;

    public TrimController(TrimService trimService) {
        this.trimService = trimService;
    }

    @Operation(summary = "특정 차량의 trim 정보 조회")
    @GetMapping("/{id}/color")
    public TrimConfigDTO getCarTrimsById(@PathVariable final Long id) {
        return trimService.getTrimColorAndTagById(id);
    }
}
