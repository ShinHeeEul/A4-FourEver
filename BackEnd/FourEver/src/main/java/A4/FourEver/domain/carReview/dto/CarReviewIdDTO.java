package A4.FourEver.domain.carReview.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class CarReviewIdDTO {
    private String car_name;
    private Long trim_id;
    private Long engine_id;
    private Long body_id;
    private Long drive_id;
    private Long in_color_id;
    private Long ex_color_id;
    private List<Long> extra_option_ids;

    public CarReviewIdDTO() {
    }
}
