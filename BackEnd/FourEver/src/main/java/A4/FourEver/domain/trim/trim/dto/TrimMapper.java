package A4.FourEver.domain.trim.trim.dto;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.exColor.dto.ExColorInfoSortedDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoSortedDTO;
import A4.FourEver.domain.tag.inColorTag.dto.InColorTagInfoDTO;
import A4.FourEver.domain.tag.exColorTag.dto.ExColorTagInfoDTO;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class TrimMapper {

    public TrimColorsAndTagsDTO convertToSortedDTO(final Set<InColorInfoDTO> inColorInfoDTOs, final Set<ExColorInfoDTO> exColorInfoDTOs) {
        List<InColorInfoSortedDTO> inColorList = inColorInfoDTOs.stream()
                .sorted(Comparator.comparingLong(InColorInfoDTO::getId))
                .map(this::convertInColorInfoDTO)
                .collect(Collectors.toList());

        List<ExColorInfoSortedDTO> exColorList = exColorInfoDTOs.stream()
                .sorted(Comparator.comparingLong(ExColorInfoDTO::getId))
                .map(this::convertInColorInfoDTO)
                .collect(Collectors.toList());

        return TrimColorsAndTagsDTO.builder()
                .inColors(inColorList)
                .exColors(exColorList)
                .build();
    }

    private InColorInfoSortedDTO convertInColorInfoDTO(final InColorInfoDTO dto) {
        List<InColorTagInfoDTO> sortedInColorTag = dto.getInColorTagInfoDTOS().stream()
                .sorted(Comparator.comparingLong(InColorTagInfoDTO::getCount).reversed())
                .limit(3)
                .collect(Collectors.toList());

        return InColorInfoSortedDTO.builder()
                .id(dto.getId())
                .name(dto.getName())
                .color_image(dto.getColor_image())
                .in_image(dto.getIn_image())
                .inColorTagInfoDTOS(sortedInColorTag)
                .build();
    }

    private ExColorInfoSortedDTO convertInColorInfoDTO(ExColorInfoDTO dto) {
        List<ExColorTagInfoDTO> sortedExColorTag = dto.getExColorTagInfoDTOS().stream()
                .sorted(Comparator.comparingLong(ExColorTagInfoDTO::getCount).reversed())
                .limit(3)
                .collect(Collectors.toList());

        return ExColorInfoSortedDTO.builder()
                .id(dto.getId())
                .name(dto.getName())
                .color_image(dto.getColor_image())
                .rotation_image(dto.getRotation_image())
                .price(dto.getPrice())
                .exColorTagInfoDTOS(sortedExColorTag)
                .build();
    }
}
