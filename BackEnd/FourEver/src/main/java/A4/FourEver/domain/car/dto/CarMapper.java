package A4.FourEver.domain.car.dto;

import A4.FourEver.domain.option.extraOption.dto.ExtraOptionNameDTO;
import A4.FourEver.domain.carReview.dto.CarReviewOverviewDTO;
import A4.FourEver.domain.carReview.dto.CarReviewOverviewSortedDTO;
import A4.FourEver.domain.tag.totalTag.dto.TotalTagInfoDTO;
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

    public CarReviewOverviewSortedListDTO convertToSortedDTO(CarReviewOverviewListDTO dto) {
        List<CarReviewOverviewSortedDTO> overviewDTOList = dto.getCarReviewOverviewDTOs().stream()
                .sorted(Comparator.comparing(CarReviewOverviewDTO::getCreated_at).reversed())
                .limit(100)
                .map(this::convertCarReview)
                .collect(Collectors.toList());

        return CarReviewOverviewSortedListDTO.builder()
                .carReviewOverviewDTOs(overviewDTOList)
                .build();
    }

    private CarReviewOverviewSortedDTO convertCarReview(CarReviewOverviewDTO dto) {
        List<ExtraOptionNameDTO> extraOptionNameDTOs = dto.getExtraOptionNameDTOs().stream()
                .sorted(Comparator.comparingLong(ExtraOptionNameDTO::getId))
                .collect(Collectors.toList());

        List<TotalTagInfoDTO> totalTagInfoDTOs = dto.getTotalTagInfoDTOs().stream()
                .sorted(Comparator.comparingLong(TotalTagInfoDTO::getId))
                .collect(Collectors.toList());

        return CarReviewOverviewSortedDTO.builder()
                .car_review_id(dto.getCar_review_id())
                .car_name(dto.getCar_name())
                .trim_name(dto.getTrim_name())
                .drive_name(dto.getDrive_name())
                .engine_name(dto.getEngine_name())
                .body_name(dto.getBody_name())
                .exterior_color_name(dto.getExterior_color_name())
                .interior_color_name(dto.getInterior_color_name())
                .created_at(dto.getCreated_at())
                .is_purchased(dto.getIs_purchased())
                .extraOptionNameDTOs(extraOptionNameDTOs)
                .totalTagInfoDTOs(totalTagInfoDTOs)
                .build();
    }
}
