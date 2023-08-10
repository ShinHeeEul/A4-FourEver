package A4.FourEver.domain.car.dto;

import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CarMapper {

    public CarTrimsSortedDTO convertToSortedDTO(CarTrimsDTO dto) {
        List<TrimInfoDTO> trimList = dto.getTrimInfoDTOs().stream()
                .sorted(Comparator.comparingLong(TrimInfoDTO::getId))
                .collect(Collectors.toList());

        List<EngineInfoDTO> engineList = dto.getEngineInfoDTOs().stream()
                .sorted(Comparator.comparingLong(EngineInfoDTO::getId))
                .collect(Collectors.toList());

        List<BodyInfoDTO> bodyList = dto.getBodyInfoDTOs().stream()
                .sorted(Comparator.comparingLong(BodyInfoDTO::getId))
                .collect(Collectors.toList());

        List<DriveInfoDTO> driveList = dto.getDriveInfoDTOs().stream()
                .sorted(Comparator.comparingLong(DriveInfoDTO::getId))
                .collect(Collectors.toList());

        return CarTrimsSortedDTO.builder()
                .trimInfoDTOs(trimList)
                .bodyInfoDTOs(bodyList)
                .driveInfoDTOs(driveList)
                .engineInfoDTOs(engineList)
                .build();
    }
}
