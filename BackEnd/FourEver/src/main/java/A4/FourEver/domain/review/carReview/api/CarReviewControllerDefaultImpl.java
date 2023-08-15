package A4.FourEver.domain.review.carReview.api;

import A4.FourEver.domain.review.carReview.application.CarReviewService;
import A4.FourEver.domain.review.carReview.dto.CarReviewDetailSortedDTO;
import io.swagger.v3.oas.annotations.Operation;
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
    @GetMapping("/{id}/car-review")
    public CarReviewDetailSortedDTO getCarReviewDetail(@PathVariable Long id) {
        return carReviewService.getCarReviewDetail(id);
    }
}
