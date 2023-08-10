package A4.FourEver.domain.car.dto;

import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.Set;

@Builder
@Getter
public class CarConfigDTO {
    private List<TrimInfoDTO> trimInfoDTOs;
    private List<BodyInfoDTO> bodyInfoDTOs;
    private List<DriveInfoDTO> driveInfoDTOs;
    private List<EngineInfoDTO> engineInfoDTOs;
}
