package A4.FourEver.domain.myChiving.dto;

import A4.FourEver.domain.option.extraOption.dto.ExtraOptionNameAndImageDTO;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.List;

@Builder
@Getter
public class MyChivingOverviewSortedDTO {
    private Long id;
    private Integer is_end;
    private Timestamp updated_at;
    private String car_name;
    private String trim_name;
    private String engine_name;
    private String drive_name;
    private String body_name;
    private String exterior_color_name;
    private String interior_color_name;
    private List<ExtraOptionNameAndImageDTO> extraOptionDTOs;
}
