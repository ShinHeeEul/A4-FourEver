package A4.FourEver.domain.carReview.dto;

import A4.FourEver.domain.color.exColor.dto.ExColorNameAndImageDTO;
import A4.FourEver.domain.color.inColor.dto.InColorNameDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionDetailSortedDTO;
import A4.FourEver.domain.tag.totalTag.dto.TotalTagInfoDTO;
import A4.FourEver.domain.trim.body.dto.BodyNameDTO;
import A4.FourEver.domain.trim.drive.dto.DriveNameDTO;
import A4.FourEver.domain.trim.engine.dto.EngineNameDTO;
import A4.FourEver.domain.trim.trim.dto.TrimNameDTO;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.List;

@Builder
@Getter
public class CarReviewDetailSortedDTO {
    private Long id;
    private Double price;
    private String comment;
    private String car_name;
    private Integer is_purchased;
    private TrimNameDTO trimNameDTO;
    private EngineNameDTO engineNameDTO;
    private BodyNameDTO bodyNameDTO;
    private DriveNameDTO driveNameDTO;
    private InColorNameDTO inColorDTO;
    private ExColorNameAndImageDTO exColorDTO;
    private Timestamp created_at;
    private List<TotalTagInfoDTO> totalTagInfoDTOs;
    private List<ExtraOptionDetailSortedDTO> extraOptionForCarReviewDTOs;
}
