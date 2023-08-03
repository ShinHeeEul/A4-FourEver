package A4.FourEver.domain.trim.trim.api;

import A4.FourEver.domain.trim.trim.application.TrimService;
import A4.FourEver.domain.trim.trim.dto.TrimDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "트림 정보")
@RestController
@RequestMapping("/cars/{car_id}/trim/trims")
public class TrimController {

    @Autowired
    private TrimService trimService;

    @Operation(summary = "모든 트림 정보 조회")
    @GetMapping
    public List<TrimDTO> getAllTrimsByCarId(@PathVariable Long car_id) {
        return trimService.getAllTrimsByCarId(car_id);
    }

    @Operation(summary = "특정 트림 정보 조회")
    @GetMapping("/{trim_id}")
    public TrimDTO getTrimById(@PathVariable Long car_id, @PathVariable Long trim_id) {
        return trimService.getTrimById(trim_id);
    }
}
