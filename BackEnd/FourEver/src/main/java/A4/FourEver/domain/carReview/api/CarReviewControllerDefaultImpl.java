package A4.FourEver.domain.carReview.api;

import A4.FourEver.domain.carReview.application.CarReviewService;
import A4.FourEver.domain.carReview.dto.CarReviewDetailSortedDTO;
import A4.FourEver.domain.carReview.dto.CarReviewIdDTO;
import A4.FourEver.domain.carReview.dto.CarReviewOnBoardingDTO;
import A4.FourEver.domain.carReview.dto.CarReviewResultSortedDTO;
import A4.FourEver.global.annotation.LoginUserId;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Tag(name = "리뷰 정보")
@RestController
@RequestMapping("/reviews")
public class CarReviewControllerDefaultImpl implements CarReviewController {

    private final CarReviewService carReviewService;

    public CarReviewControllerDefaultImpl(CarReviewService carReviewService) {
        this.carReviewService = carReviewService;
    }

    @Override
    @Operation(summary = "특정 리뷰 정보 조회")
    @SecurityRequirement(name = "JWT")
    @GetMapping("/{id}/car-review")
    public CarReviewDetailSortedDTO getCarReviewDetail(@PathVariable Long id, @LoginUserId Long userId) {
        return carReviewService.getCarReviewDetail(id, userId);
    }

    @Override
    @Operation(summary = "특정 리뷰를 통한 내 차 만들기")
    @SecurityRequirement(name = "JWT")
    @PostMapping("/result")
    public CarReviewResultSortedDTO getCarReviewResult(@Valid @RequestBody final CarReviewIdDTO carReviewIdDTO) {
        return carReviewService.getCarReviewResult(carReviewIdDTO);
    }

    @Override
    @Operation(summary = "카 리뷰 온보딩 정보 조회")
    @GetMapping("/on-boarding")
    public CarReviewOnBoardingDTO onBoarding() {
        return new CarReviewOnBoardingDTO();
    }
}
