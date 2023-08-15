package A4.FourEver.domain.trim.trim.api;

import A4.FourEver.domain.trim.trim.application.TrimService;
import A4.FourEver.domain.trim.trim.dto.TrimColorsAndTagsDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "트림 정보")
@RestController
@RequestMapping("/trims")
public class TrimControllerDefaultImpl implements TrimController {

    private final TrimService trimService;

    public TrimControllerDefaultImpl(TrimService trimService) {
        this.trimService = trimService;
    }

    @Override
    @Operation(summary = "특정 트림의 색상 정보 조회")
    @GetMapping("/{id}/color")
    public TrimColorsAndTagsDTO getTrimColorsAndTagsById(@PathVariable final Long id) {
        return trimService.getTrimColorsAndTagsById(id);
    }
}
