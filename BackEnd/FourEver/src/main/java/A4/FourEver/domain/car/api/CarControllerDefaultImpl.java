package A4.FourEver.domain.car.api;

import A4.FourEver.domain.car.application.CarService;
import A4.FourEver.domain.car.application.CarServiceDefaultImpl;
import A4.FourEver.domain.car.dto.CarTrimsSortedDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;


@Tag(name = "치량 정보")
@RestController
@RequestMapping("/cars")
public class CarControllerDefaultImpl implements CarController {

    private final CarService carService;

    public CarControllerDefaultImpl(CarServiceDefaultImpl carServiceDefaultImpl) {
        this.carService = carServiceDefaultImpl;
    }

    @Override
    @Operation(summary = "특정 차량의 트림 정보 조회")
    @GetMapping("/{id}/trim")
    public CarTrimsSortedDTO getCarTrimsById(@PathVariable final Long id) {
        return carService.getCarTrimsById(id);
    }
}
