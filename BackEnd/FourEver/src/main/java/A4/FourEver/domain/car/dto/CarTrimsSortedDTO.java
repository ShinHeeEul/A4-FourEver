package A4.FourEver.domain.car.dto;

import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class CarTrimsSortedDTO {
    private List<TrimInfoDTO> trimInfoDTOs;
    private List<BodyInfoDTO> bodyInfoDTOs;
    private List<DriveInfoDTO> driveInfoDTOs;
    private List<EngineInfoDTO> engineInfoDTOs;
}
