package A4.FourEver.domain.option.extraSubOption.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class SubExtraOptionNameDTO {
    private Long id;
    private String name;
}
