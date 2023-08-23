package A4.FourEver.domain.carReview.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;
import java.util.List;

@Getter
public class CarReviewIdDTO {

    @NotBlank(message = "차 이름은 공란일 수 없습니다.")
    @NotNull(message = "차 이름이 없습니다.")
    private String car_name;

    @NotNull(message = "트림 ID가 없습니다.")
    @PositiveOrZero(message = "트림 ID는 양수 혹은 0 이어야 합니다.")
    private Long trim_id;

    @NotNull(message = "엔진 ID가 없습니다.")
    @PositiveOrZero(message = "엔진 ID는 양수 혹은 0 이어야 합니다.")
    private Long engine_id;

    @NotNull(message = "바디타입 ID가 없습니다.")
    @PositiveOrZero(message = "바디타입 ID는 양수 혹은 0 이어야 합니다.")
    private Long body_id;

    @NotNull(message = "구동방식 ID가 없습니다.")
    @PositiveOrZero(message = "구동방식 ID는 양수 혹은 0 이어야 합니다.")
    private Long drive_id;

    @NotNull(message = "내부 색상 ID가 없습니다.")
    @PositiveOrZero(message = "내부 색상 ID는 양수 혹은 0 이어야 합니다.")
    private Long in_color_id;

    @NotNull(message = "외부 색상 ID가 없습니다.")
    @PositiveOrZero(message = "외부 색상 ID는 양수 혹은 0 이어야 합니다.")
    private Long ex_color_id;

    @NotNull(message = "선택한 옵션 리스트가 없습니다.")
    private List<@NotNull @Positive(message = "추가 옵션 ID는 양수여야 합니다.") Long> extra_option_ids;

    public CarReviewIdDTO() {
    }
}
