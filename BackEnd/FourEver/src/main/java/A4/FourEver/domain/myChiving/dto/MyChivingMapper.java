package A4.FourEver.domain.myChiving.dto;

import A4.FourEver.domain.option.extraOption.dto.ExtraOptionDetailDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionDetailSortedDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionNameDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class MyChivingMapper {

    public MyChivingDetailSortedDTO convertToSortedDTO(final MyChivingDetailDTO dto) {
        List<ExtraOptionDetailSortedDTO> extraOptionDTOList = dto.getExtraOptionDTOs().stream()
                .map(this::convertExtraOption)
                .collect(Collectors.toList());

        return MyChivingDetailSortedDTO.builder()
                .id(dto.getId())
                .price(dto.getPrice())
                .is_end(dto.getIs_end())
                .car_name(dto.getCar_name())
                .trimNameDTO(dto.getTrimNameDTO())
                .engineNameDTO(dto.getEngineNameDTO())
                .bodyNameDTO(dto.getBodyNameDTO())
                .driveNameDTO(dto.getDriveNameDTO())
                .exColorDTO(dto.getExColorDTO())
                .inColorDTO(dto.getInColorDTO())
                .updated_at(dto.getUpdated_at())
                .extraOptionDTOs(extraOptionDTOList)
                .build();
    }

    private ExtraOptionDetailSortedDTO convertExtraOption(final ExtraOptionDetailDTO dto) {
        List<ExtraOptionTagInfoDTO> tagInfoDTOList = dto.getExtraOptionTagInfoDTOS().stream()
                .sorted(Comparator.comparingLong(ExtraOptionTagInfoDTO::getCount).reversed())
                .limit(3)
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
}
