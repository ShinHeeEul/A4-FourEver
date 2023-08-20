package A4.FourEver.domain.carReview.api;

import A4.FourEver.domain.carReview.application.CarReviewService;
import A4.FourEver.domain.carReview.dto.CarReviewDetailSortedDTO;
import A4.FourEver.global.annotation.LoginUserId;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
