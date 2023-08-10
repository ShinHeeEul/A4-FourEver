package A4.FourEver.domain.car.dto;

import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.Set;

@Builder
@Getter
public class CarTrimsDTO {
    private Set<TrimInfoDTO> trimInfoDTOs;
    private Set<BodyInfoDTO> bodyInfoDTOs;
    private Set<DriveInfoDTO> driveInfoDTOs;
    private Set<EngineInfoDTO> engineInfoDTOs;
}
