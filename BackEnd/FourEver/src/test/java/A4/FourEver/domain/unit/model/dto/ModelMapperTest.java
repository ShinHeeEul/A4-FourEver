package A4.FourEver.domain.unit.model.dto;

import A4.FourEver.domain.model.dto.ModelMapper;
import A4.FourEver.domain.model.dto.ModelOptionsSortedDTO;
import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoSortedDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionInfoDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import A4.FourEver.domain.unit.UnitTestBase;
import org.junit.jupiter.api.Test;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class ModelMapperTest extends UnitTestBase {

    private final ModelMapper modelMapper = new ModelMapper();

    @Test
    void convertToSortedDTO() {
        ExtraOptionTagInfoDTO extraOptionTagInfoDTO1 = ExtraOptionTagInfoDTO.builder()
                .id(1L)
                .name("TagOptionName1")
                .count(10L)
                .build();

        ExtraOptionTagInfoDTO extraOptionTagInfoDTO2 = ExtraOptionTagInfoDTO.builder()
                .id(2L)
                .name("TagOptionName2")
                .count(20L)
                .build();

        SubExtraOptionInfoDTO subExtraOptionInfoDTO1 = SubExtraOptionInfoDTO.builder()
                .id(1L)
                .name("SubOptionName1")
                .description("SubOptionDescription1")
                .image("SubOptionImage1")
                .build();

        SubExtraOptionInfoDTO subExtraOptionInfoDTO2 = SubExtraOptionInfoDTO.builder()
                .id(2L)
                .name("SubOptionName2")
                .description("SubOptionDescription2")
                .image("SubOptionImage2")
                .build();

        ExtraOptionInfoDTO extraOptionInfoDTO1 = ExtraOptionInfoDTO.builder()
                .id(1L)
                .name("Option1")
                .description("Description for Option1")
                .category("Category1")
                .image("image1.png")
                .price(10000.0)
                .x_position(10)
                .y_position(20)
                .extraOptionTagInfoDTOS(Set.of(extraOptionTagInfoDTO1, extraOptionTagInfoDTO2))
                .subExtraOptionInfoDTOs(Set.of(subExtraOptionInfoDTO1, subExtraOptionInfoDTO2))
                .build();

        ExtraOptionInfoDTO extraOptionInfoDTO2 = ExtraOptionInfoDTO.builder()
                .id(2L)
                .name("Option2")
                .description("Description for Option2")
                .category("Category2")
                .image("image2.png")
                .price(15000.0)
                .x_position(30)
                .y_position(40)
                .extraOptionTagInfoDTOS(Set.of(extraOptionTagInfoDTO1, extraOptionTagInfoDTO2))
                .subExtraOptionInfoDTOs(Set.of(subExtraOptionInfoDTO1, subExtraOptionInfoDTO2))
                .build();

        DefaultOptionInfoDTO defaultOptionInfoDTO1 = DefaultOptionInfoDTO.builder()
                .id(1L)
                .name("DefaultOptionName1")
                .description("DefaultOptionDescription1")
                .category("DefaultCategory1")
                .image("DefaultImageURL1")
                .build();

        DefaultOptionInfoDTO defaultOptionInfoDTO2 = DefaultOptionInfoDTO.builder()
                .id(2L)
                .name("DefaultOptionName2")
                .description("DefaultOptionDescription2")
                .category("DefaultCategory2")
                .image("DefaultImageURL2")
                .build();

        Set<ExtraOptionInfoDTO> extraOptionInfoDTOs = Set.of(extraOptionInfoDTO1, extraOptionInfoDTO2);
        Set<DefaultOptionInfoDTO> defaultOptionInfoDTOs = Set.of(defaultOptionInfoDTO1, defaultOptionInfoDTO2);

        List<ExtraOptionTagInfoDTO> extraOptionTagInfoDTOList = Stream.of(extraOptionTagInfoDTO1, extraOptionTagInfoDTO2)
                .sorted(Comparator.comparingLong(ExtraOptionTagInfoDTO::getId))
                .collect(Collectors.toList());

        List<SubExtraOptionInfoDTO> subExtraOptionInfoDTOList = Stream.of(subExtraOptionInfoDTO1, subExtraOptionInfoDTO2)
                .sorted(Comparator.comparingLong(SubExtraOptionInfoDTO::getId))
                .collect(Collectors.toList());

        ExtraOptionInfoSortedDTO extraOptionInfoSortedDTO1 = ExtraOptionInfoSortedDTO.builder()
                .id(1L)
                .name("Option1")
                .description("Description for Option1")
                .category("Category1")
                .image("image1.png")
                .price(10000.0)
                .x_position(10)
                .y_position(20)
                .extraOptionTagInfoDTOS(extraOptionTagInfoDTOList)
                .subExtraOptionInfoDTOs(subExtraOptionInfoDTOList)
                .build();

        ExtraOptionInfoSortedDTO extraOptionInfoSortedDTO2 = ExtraOptionInfoSortedDTO.builder()
                .id(2L)
                .name("Option2")
                .description("Description for Option2")
                .category("Category2")
                .image("image2.png")
                .price(15000.0)
                .x_position(30)
                .y_position(40)
                .extraOptionTagInfoDTOS(extraOptionTagInfoDTOList)
                .subExtraOptionInfoDTOs(subExtraOptionInfoDTOList)
                .build();

        List<DefaultOptionInfoDTO> defaultOptionInfoDTOList = Stream.of(defaultOptionInfoDTO1, defaultOptionInfoDTO2)
                .sorted(Comparator.comparingLong(DefaultOptionInfoDTO::getId))
                .collect(Collectors.toList());
        List<ExtraOptionInfoSortedDTO> extraOptionInfoDTOList = Stream.of(extraOptionInfoSortedDTO1, extraOptionInfoSortedDTO2)
                .sorted(Comparator.comparingLong(ExtraOptionInfoSortedDTO::getId))
                .collect(Collectors.toList());

        ModelOptionsSortedDTO modelOptionsSortedDTO = ModelOptionsSortedDTO.builder()
                .defaultOptionInfoDTOs(defaultOptionInfoDTOList)
                .extraOptionInfoSortedDTOs(extraOptionInfoDTOList)
                .build();

        // When
        ModelOptionsSortedDTO result = modelMapper.convertToSortedDTO(extraOptionInfoDTOs, defaultOptionInfoDTOs);

        // Then
        softAssertions.assertThat(result)
                .usingRecursiveComparison()
                .isEqualTo(modelOptionsSortedDTO);
    }
}