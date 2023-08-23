package A4.FourEver.domain.option.extraOption.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@Getter
public class ExtraOptionIdsRequestDTO {
    @NotNull(message = "선택한 옵션 리스트가 없습니다.")
    private List<@NotNull @Positive(message = "추가 옵션 ID는 양수여야 합니다.") Long> extraOptionIds;

    public ExtraOptionIdsRequestDTO() {}
}
