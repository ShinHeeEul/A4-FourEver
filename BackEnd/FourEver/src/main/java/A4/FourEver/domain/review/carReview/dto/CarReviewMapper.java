package A4.FourEver.domain.review.carReview.dto;

import A4.FourEver.domain.option.extraOption.dto.ExtraOptionForCarReviewDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionForCarReviewSortedDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionNameDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import A4.FourEver.domain.tag.totalTag.dto.TotalTagInfoDTO;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CarReviewMapper {

    public CarReviewDetailSortedDTO convertToSortedDTO(CarReviewDetailDTO dto) {
        List<ExtraOptionForCarReviewSortedDTO> extraOptionDTOList = dto.getExtraOptionForCarReviewDTOs().stream()
                .map(this::convertExtraOption)
                .collect(Collectors.toList());

        List<TotalTagInfoDTO> totalTagList = dto.getTotalTagInfoDTOs().stream()
                .sorted(Comparator.comparingLong(TotalTagInfoDTO::getId))
                .collect(Collectors.toList());

        return CarReviewDetailSortedDTO.builder()
                .car_review_id(dto.getCar_review_id())
                .price(dto.getPrice())
                .comment(dto.getComment())
                .car_name(dto.getCar_name())
                .trimNameDTO(dto.getTrimNameDTO())
                .engineNameDTO(dto.getEngineNameDTO())
                .bodyNameDTO(dto.getBodyNameDTO())
                .driveNameDTO(dto.getDriveNameDTO())
                .exColorDTO(dto.getExColorDTO())
                .inColorDTO(dto.getInColorDTO())
                .is_purchased(dto.getIs_purchased())
                .created_at(dto.getCreated_at())
                .totalTagInfoDTOs(totalTagList)
                .extraOptionForCarReviewDTOs(extraOptionDTOList)
                .build();
    }

    private ExtraOptionForCarReviewSortedDTO convertExtraOption(ExtraOptionForCarReviewDTO dto) {
        List<ExtraOptionTagInfoDTO> tagInfoDTOList = dto.getExtraOptionTagInfoDTOS().stream()
                .sorted(Comparator.comparingLong(ExtraOptionTagInfoDTO::getId))
                .collect(Collectors.toList());

        List<SubExtraOptionNameDTO> nameDTOList = dto.getSubExtraOptionNameDTOs().stream()
                .sorted(Comparator.comparingLong(SubExtraOptionNameDTO::getId))
                .collect(Collectors.toList());

        return ExtraOptionForCarReviewSortedDTO.builder()
                .id(dto.getId())
                .name(dto.getName())
                .image(dto.getImage())
                .x_position(dto.getX_position())
                .y_position(dto.getY_position())
                .extraOptionTagInfoDTOS(tagInfoDTOList)
                .subExtraOptionNameDTOs(nameDTOList)
                .build();
    }
}
