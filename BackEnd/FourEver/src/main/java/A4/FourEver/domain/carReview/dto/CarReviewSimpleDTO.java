package A4.FourEver.domain.carReview.dto;


import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CarReviewSimpleDTO {
    private String car_name;
    private String trim_name;
    private String engine_name;
    private String drive_name;
    private String body_name;
    private double price;

    private ExColorInfoDTO exColorInfoDTO;
    private InColorInfoDTO inColorInfoDTO;

}
