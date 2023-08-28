package A4.FourEver.domain.user.dto;

import A4.FourEver.domain.carReview.dto.CarReviewOverviewDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingOverviewDTO;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class UserMapper {

    private final int completed = 1;
    private final int temp = 0;

    public UserFeedDTO generateUserFeedDTO(final Set<MyChivingOverviewDTO> myChivingSet, final Set<CarReviewOverviewDTO> carReviewSet) {
        List<MyChivingOverviewDTO> myChivingTempList = myChivingSet.stream()
                .filter(dto -> dto.getIs_end() == temp)
                .sorted(Comparator.comparing(MyChivingOverviewDTO::getUpdated_at).reversed())
                .collect(Collectors.toList());

        List<MyChivingOverviewDTO> myChivingCompleteList = myChivingSet.stream()
                .filter(dto -> dto.getIs_end() == completed)
                .sorted(Comparator.comparing(MyChivingOverviewDTO::getUpdated_at).reversed())
                .collect(Collectors.toList());

        List<CarReviewOverviewDTO> carReviewList = carReviewSet.stream()
                .sorted(Comparator.comparing(CarReviewOverviewDTO::getCreated_at).reversed())
                .collect(Collectors.toList());

        return UserFeedDTO.builder()
                .carReviewList(carReviewList)
                .myChivingTempList(myChivingTempList)
                .myChivingCompleteList(myChivingCompleteList)
                .build();
    }
}
