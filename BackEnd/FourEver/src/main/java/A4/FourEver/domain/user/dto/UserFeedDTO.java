package A4.FourEver.domain.user.dto;

import A4.FourEver.domain.carReview.dto.CarReviewOverviewDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingOverviewDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class UserFeedDTO {
    List<MyChivingOverviewDTO> myChivingTempList;
    List<MyChivingOverviewDTO> myChivingCompleteList;
    List<CarReviewOverviewDTO> carReviewList;
}
