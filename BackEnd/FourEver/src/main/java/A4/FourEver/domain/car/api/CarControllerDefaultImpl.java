package A4.FourEver.domain.car.api;

import A4.FourEver.domain.car.application.CarService;
import A4.FourEver.domain.car.dto.CarExtraOptionNameDTO;
import A4.FourEver.domain.car.dto.CarReviewOverviewSortedListDTO;
import A4.FourEver.domain.car.dto.CarTrimsSortedDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionIdsRequestDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Tag(name = "차량 정보")
@RestController
@RequestMapping("/cars")
public class CarControllerDefaultImpl implements CarController {

    private final CarService carService;

    public CarControllerDefaultImpl(CarService carService) {
        this.carService = carService;
    }

    @Override
    @Operation(summary = "특정 차량의 트림 정보 조회")
//    @SecurityRequirement(name = "JWT")
    @GetMapping("/{id}/trim")
    public CarTrimsSortedDTO getCarTrimsById(@PathVariable final Long id) {
        return carService.getCarTrimsById(id);
    }

    @Override
    @Operation(summary = "특정 차량의 선택 가능한 옵션 정보 조회")
//    @SecurityRequirement(name = "JWT")
    @GetMapping("/{id}/option-names")
    public CarExtraOptionNameDTO getCarExtraOptionNameById(@PathVariable final Long id) {
        return carService.getCarExtraOptionNameById(id);
    }

    @Override
    @Operation(summary = "특정 차량의 모든 차 리뷰 정보 조회")
    @PostMapping("/{id}/car-review")
    public CarReviewOverviewSortedListDTO getAllCarReviewOverviewList(@PathVariable final Long id, @RequestBody final ExtraOptionIdsRequestDTO request) {
        List<Integer> extraOptionIds = request.getExtraOptionIds();
        return carService.getAllCarReviewOverviewList(id, extraOptionIds);
    }

    @Override
    @Operation(summary = "특정 차량의 구매 혹은 시승 리뷰 정보 조회")
    @PostMapping("/{id}/car-review/{isPurchased}")
    public CarReviewOverviewSortedListDTO getPartialCarReviewOverviewList(@PathVariable final Long id, @PathVariable final Integer isPurchased, @RequestBody final ExtraOptionIdsRequestDTO request) {
        List<Integer> extraOptionIds = request.getExtraOptionIds();
        return carService.getPartialCarReviewOverviewList(id, isPurchased, extraOptionIds);
    }
}
