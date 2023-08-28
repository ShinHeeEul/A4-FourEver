package A4.FourEver.domain.carReview.dto;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;
import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.Set;

@Builder
@Getter
public class CarReviewResultDTO {
    private String car_name;
    private TrimInfoDTO trimInfoDTO;
    private BodyInfoDTO bodyInfoDTO;
    private DriveInfoDTO driveInfoDTO;
    private EngineInfoDTO engineInfoDTO;
    private InColorInfoDTO inColorDTO;
    private ExColorInfoDTO exColorDTO;
    private Set<DefaultOptionInfoDTO> defaultOptionDTOs;
    private Set<ExtraOptionInfoDTO> extraOptionDTOs;
}
