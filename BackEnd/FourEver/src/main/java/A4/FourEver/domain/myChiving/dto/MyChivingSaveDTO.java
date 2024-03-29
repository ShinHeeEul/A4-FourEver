package A4.FourEver.domain.myChiving.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;
import java.util.List;

@Getter
@NoArgsConstructor
public class MyChivingSaveDTO {
    @NotNull(message = "ID가 없습니다.")
    @PositiveOrZero(message = "ID는 양수 혹은 0 이어야 합니다.")
    private Long id;

    @NotNull(message = "is_end 값이 없습니다.")
    @Min(value = 0, message = "is_end 의 값은 0 또는 1이어야 합니다.")
    @Max(value = 1, message = "is_end 의 값은 0 또는 1이어야 합니다.")
    private Integer is_end;

    @NotNull(message = "차 ID가 없습니다.")
    @PositiveOrZero(message = "차 ID는 양수 혹은 0 이어야 합니다.")
    private Long car_id;

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

    @NotNull(message = "외부 색상 ID가 없습니다.")
    @PositiveOrZero(message = "외부 색상 ID는 양수 혹은 0 이어야 합니다.")
    private Long ex_color_id;

    @NotNull(message = "내부 색상 ID가 없습니다.")
    @PositiveOrZero(message = "내부 색상 ID는 양수 혹은 0 이어야 합니다.")
    private Long in_color_id;

    @NotNull(message = "가격이 없습니다.")
    @PositiveOrZero(message = "가격은 양수 혹은 0 이어야 합니다.")
    private Double price;

    @NotNull(message = "선택한 옵션 리스트가 없습니다.")
    private List<@NotNull @Positive(message = "옵션 ID는 양수여야 합니다.") Long> optionIds;
}
