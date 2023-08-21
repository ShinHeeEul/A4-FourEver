package A4.FourEver.domain.carReview.dto;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoSortedDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoSortedDTO;
import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoSortedDTO;
import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class CarReviewResultSortedDTO {
    private String car_name;
    private TrimInfoDTO trimInfoDTO;
    private BodyInfoDTO bodyInfoDTO;
    private DriveInfoDTO driveInfoDTO;
    private EngineInfoDTO engineInfoDTO;
    private InColorInfoSortedDTO inColorDTO;
    private ExColorInfoSortedDTO exColorDTO;
    private List<DefaultOptionInfoDTO> defaultOptionDTOs;
    private List<ExtraOptionInfoSortedDTO> extraOptionDTOs;
}
