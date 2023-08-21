package A4.FourEver.domain.carReview.dto;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.exColor.dto.ExColorInfoSortedDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoSortedDTO;
import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionDetailDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionDetailSortedDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoSortedDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionInfoDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionNameDTO;
import A4.FourEver.domain.tag.exColorTag.dto.ExColorTagInfoDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import A4.FourEver.domain.tag.inColorTag.dto.InColorTagInfoDTO;
import A4.FourEver.domain.tag.totalTag.dto.TotalTagInfoDTO;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CarReviewMapper {

    public CarReviewDetailSortedDTO convertToSortedDTO(final CarReviewDetailDTO dto) {
        List<ExtraOptionDetailSortedDTO> extraOptionDTOList = dto.getExtraOptionDetailDTOS().stream()
                .map(this::convertExtraOption)
                .collect(Collectors.toList());

        List<TotalTagInfoDTO> totalTagList = dto.getTotalTagInfoDTOs().stream()
                .sorted(Comparator.comparingLong(TotalTagInfoDTO::getId))
                .collect(Collectors.toList());

        return CarReviewDetailSortedDTO.builder()
                .id(dto.getId())
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

    public CarReviewResultSortedDTO convertToSortedDTO(final CarReviewResultDTO dto, final String car_name) {
        List<ExtraOptionInfoSortedDTO> extraOptionList = dto.getExtraOptionDTOs().stream()
                .sorted(Comparator.comparingLong(ExtraOptionInfoDTO::getId))
                .map(this::convertExtraOptionInfoDTO)
                .collect(Collectors.toList());

        List<DefaultOptionInfoDTO> defaultOptionList = dto.getDefaultOptionDTOs().stream()
                .sorted(Comparator.comparingLong(DefaultOptionInfoDTO::getId))
                .collect(Collectors.toList());

        InColorInfoDTO inColorInfoDTO = dto.getInColorDTO();

        List<InColorTagInfoDTO> inColorTagList = inColorInfoDTO.getInColorTagInfoDTOS().stream()
                .sorted(Comparator.comparingLong(InColorTagInfoDTO::getId))
                .collect(Collectors.toList());

        InColorInfoSortedDTO inColorInfoSortedDTO = InColorInfoSortedDTO.builder()
                .id(inColorInfoDTO.getId())
                .name(inColorInfoDTO.getName())
                .color_image(inColorInfoDTO.getColor_image())
                .in_image(inColorInfoDTO.getIn_image())
                .inColorTagInfoDTOS(inColorTagList)
                .build();

        ExColorInfoDTO exColorInfoDTO = dto.getExColorDTO();

        List<ExColorTagInfoDTO> exColorTagList = exColorInfoDTO.getExColorTagInfoDTOS().stream()
                .sorted(Comparator.comparingLong(ExColorTagInfoDTO::getId))
                .collect(Collectors.toList());

        ExColorInfoSortedDTO exColorInfoSortedDTO = ExColorInfoSortedDTO.builder()
                .id(exColorInfoDTO.getId())
                .name(exColorInfoDTO.getName())
                .color_image(exColorInfoDTO.getColor_image())
                .rotation_image(exColorInfoDTO.getRotation_image())
                .price(exColorInfoDTO.getPrice())
                .exColorTagInfoDTOS(exColorTagList)
                .build();

        return CarReviewResultSortedDTO.builder()
                .car_name(car_name)
                .trimInfoDTO(dto.getTrimInfoDTO())
                .engineInfoDTO(dto.getEngineInfoDTO())
                .bodyInfoDTO(dto.getBodyInfoDTO())
                .driveInfoDTO(dto.getDriveInfoDTO())
                .inColorDTO(inColorInfoSortedDTO)
                .exColorDTO(exColorInfoSortedDTO)
                .defaultOptionDTOs(defaultOptionList)
                .extraOptionDTOs(extraOptionList)
                .build();
    }

    private ExtraOptionDetailSortedDTO convertExtraOption(ExtraOptionDetailDTO dto) {
        List<ExtraOptionTagInfoDTO> tagInfoDTOList = dto.getExtraOptionTagInfoDTOS().stream()
                .sorted(Comparator.comparingLong(ExtraOptionTagInfoDTO::getId))
                .collect(Collectors.toList());

        List<SubExtraOptionNameDTO> nameDTOList = dto.getSubExtraOptionNameDTOs().stream()
                .sorted(Comparator.comparingLong(SubExtraOptionNameDTO::getId))
                .collect(Collectors.toList());

        return ExtraOptionDetailSortedDTO.builder()
                .id(dto.getId())
                .name(dto.getName())
                .image(dto.getImage())
                .x_position(dto.getX_position())
                .y_position(dto.getY_position())
                .extraOptionTagInfoDTOS(tagInfoDTOList)
                .subExtraOptionNameDTOs(nameDTOList)
                .build();
    }

    private ExtraOptionInfoSortedDTO convertExtraOptionInfoDTO(final ExtraOptionInfoDTO dto) {
        List<ExtraOptionTagInfoDTO> sortedOptionTags = dto.getExtraOptionTagInfoDTOS().stream()
                .sorted(Comparator.comparingLong(ExtraOptionTagInfoDTO::getId))
                .collect(Collectors.toList());

        List<SubExtraOptionInfoDTO> sortedSubOptions = dto.getSubExtraOptionInfoDTOs().stream()
                .sorted(Comparator.comparingLong(SubExtraOptionInfoDTO::getId))
                .collect(Collectors.toList());

        return ExtraOptionInfoSortedDTO.builder()
                .id(dto.getId())
                .name(dto.getName())
                .description(dto.getDescription())
                .category(dto.getCategory())
                .image(dto.getImage())
                .price(dto.getPrice())
                .x_position(dto.getX_position())
                .y_position(dto.getY_position())
                .extraOptionTagInfoDTOS(sortedOptionTags)
                .subExtraOptionInfoDTOs(sortedSubOptions)
                .build();
    }
}
