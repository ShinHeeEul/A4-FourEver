package A4.FourEver.domain.myChiving.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class MyChivingSaveDTO {
    private Long id;
    private Integer is_end;
    private Long car_id;
    private Long trim_id;
    private Long engine_id;
    private Long body_id;
    private Long drive_id;
    private Long ex_color_id;
    private Long in_color_id;
    private Double price;
    private List<Long> optionIds;
}
