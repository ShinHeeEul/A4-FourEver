package A4.FourEver.domain.review.carReview.dto;

import A4.FourEver.domain.option.extraOption.dto.ExtraOptionNameDTO;
import A4.FourEver.domain.tag.totalTag.dto.TotalTagInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.Objects;
import java.util.Set;

@Builder
@Getter
public class CarReviewOverviewDTO {
    private Long car_review_id;
    private String trim_name;
    private String engine_name;
    private String drive_name;
    private String body_name;
    private String exterior_color_name;
    private String interior_color_name;
    private Timestamp created_at;
    private Set<ExtraOptionNameDTO> extraOptionNameDTOs;
    private Set<TotalTagInfoDTO> totalTagInfoDTOs;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CarReviewOverviewDTO that = (CarReviewOverviewDTO) o;
        return Objects.equals(car_review_id, that.car_review_id) &&
                Objects.equals(trim_name, that.trim_name) &&
                Objects.equals(engine_name, that.engine_name) &&
                Objects.equals(drive_name, that.drive_name) &&
                Objects.equals(body_name, that.body_name) &&
                Objects.equals(exterior_color_name, that.exterior_color_name) &&
                Objects.equals(interior_color_name, that.interior_color_name) &&
                Objects.equals(created_at, that.created_at);
    }

    @Override
    public int hashCode() {
        return Objects.hash(car_review_id, trim_name, engine_name, drive_name, body_name, exterior_color_name, interior_color_name, created_at);
    }
}
