package A4.FourEver.domain.model.dto;

import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoSortedDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionInfoDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class ModelMapper {

    public ModelOptionsSortedDTO convertToSortedDTO(final Set<ExtraOptionInfoDTO> extraOptionInfoDTO, final Set<DefaultOptionInfoDTO> defaultOptionDTOs) {
        List<ExtraOptionInfoSortedDTO> extraOptionList = extraOptionInfoDTO.stream()
                .sorted(Comparator.comparingLong(ExtraOptionInfoDTO::getId))
                .map(this::convertExtraOptionInfoDTO)
                .collect(Collectors.toList());

        List<DefaultOptionInfoDTO> defaultOptionList = defaultOptionDTOs.stream()
                .sorted(Comparator.comparingLong(DefaultOptionInfoDTO::getId))
                .collect(Collectors.toList());

        return ModelOptionsSortedDTO.builder()
                .defaultOptionInfoDTOs(defaultOptionList)
                .extraOptionInfoSortedDTOs(extraOptionList)
                .build();
    }

    private ExtraOptionInfoSortedDTO convertExtraOptionInfoDTO(final ExtraOptionInfoDTO dto) {
        List<ExtraOptionTagInfoDTO> sortedOptionTags = dto.getExtraOptionTagInfoDTOS().stream()
                .sorted(Comparator.comparingLong(ExtraOptionTagInfoDTO::getCount).reversed())
                .limit(3)
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
