package A4.FourEver.domain.carReview.dto;

import A4.FourEver.domain.option.extraOption.dto.ExtraOptionNameDTO;
import A4.FourEver.domain.tag.totalTag.dto.TotalTagInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.List;

@Builder
@Getter
public class CarReviewOverviewSortedDTO {
    private Long car_review_id;
    private String car_name;
    private String trim_name;
    private String engine_name;
    private String drive_name;
    private String body_name;
    private String exterior_color_name;
    private String interior_color_name;
    private Integer is_purchased;
    private Timestamp created_at;
    private List<ExtraOptionNameDTO> extraOptionNameDTOs;
    private List<TotalTagInfoDTO> totalTagInfoDTOs;
}
