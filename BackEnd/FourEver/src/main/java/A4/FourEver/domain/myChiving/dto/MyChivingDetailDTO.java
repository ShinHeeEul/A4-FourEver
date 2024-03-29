package A4.FourEver.domain.myChiving.dto;

import A4.FourEver.domain.color.exColor.dto.ExColorNameAndImageDTO;
import A4.FourEver.domain.color.inColor.dto.InColorNameDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionDetailDTO;
import A4.FourEver.domain.trim.body.dto.BodyNameDTO;
import A4.FourEver.domain.trim.drive.dto.DriveNameDTO;
import A4.FourEver.domain.trim.engine.dto.EngineNameDTO;
import A4.FourEver.domain.trim.trim.dto.TrimNameDTO;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.Set;

@Builder
@Getter
public class MyChivingDetailDTO {
    private Long id;
    private Double price;
    private Integer is_end;
    private String car_name;
    private Timestamp updated_at;
    private TrimNameDTO trimNameDTO;
    private EngineNameDTO engineNameDTO;
    private BodyNameDTO bodyNameDTO;
    private DriveNameDTO driveNameDTO;
    private InColorNameDTO inColorDTO;
    private ExColorNameAndImageDTO exColorDTO;
    private Set<ExtraOptionDetailDTO> extraOptionDTOs;
}
