package A4.FourEver.domain.review.carReview.dto;

import A4.FourEver.domain.option.extraOption.dto.ExtraOptionForCarReviewDTO;
import A4.FourEver.domain.tag.totalTag.dto.TotalTagInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.Set;

@Builder
@Getter
public class CarReviewDetailDTO {
    private Long car_review_id;
    private Double price;
    private String comment;
    private String car_name;
    private String trim_name;
    private String engine_name;
    private String drive_name;
    private String body_name;
    private Integer is_purchased;
    private String exterior_color_name;
    private String interior_color_name;
    private Timestamp created_at;
    private Set<TotalTagInfoDTO> totalTagInfoDTOs;
    private Set<ExtraOptionForCarReviewDTO> extraOptionForCarReviewDTOs;
}
