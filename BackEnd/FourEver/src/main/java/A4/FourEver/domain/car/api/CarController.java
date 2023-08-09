package A4.FourEver.domain.car.api;

import A4.FourEver.domain.car.application.CarService;
import A4.FourEver.domain.car.dto.CarConfigDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Tag(name = "치량 정보")
@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @Operation(summary = "특정 차량의 trim 정보 조회")
    @GetMapping("/{id}/trim")
    public CarConfigDTO getCarTrimsById(@PathVariable final Long id) {
        return carService.getCarConfigById(id);
    }
}
