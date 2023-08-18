package A4.FourEver.domain.unit.trim.dto;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.exColor.dto.ExColorInfoSortedDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoSortedDTO;
import A4.FourEver.domain.tag.exColorTag.dto.ExColorTagInfoDTO;
import A4.FourEver.domain.tag.inColorTag.dto.InColorTagInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimColorsAndTagsDTO;
import A4.FourEver.domain.trim.trim.dto.TrimMapper;
import A4.FourEver.domain.unit.UnitTestBase;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class TrimMapperTest extends UnitTestBase {

    private final TrimMapper trimMapper = new TrimMapper();

    @Test
    @DisplayName("(단위) 두 개의 Set 을 이용해서 TrimColorsAndTagsDTO 가 정상적으로 생성되어야 한다.")
    void convertToSortedDTO() {
        InColorTagInfoDTO tagInstance1 = InColorTagInfoDTO.builder()
                .id(1L)
                .name("tagName1")
                .count(10L)
                .build();

        InColorTagInfoDTO tagInstance2 = InColorTagInfoDTO.builder()
                .id(2L)
                .name("tagName2")
                .count(20L)
                .build();

        InColorInfoDTO inColorInfoInstance1 = InColorInfoDTO.builder()
                .id(1L)
                .name("colorName1")
                .color_image("colorImageURL1")
                .in_image("inImageURL1")
                .inColorTagInfoDTOS(Set.of(tagInstance1, tagInstance2))
                .build();

        InColorInfoDTO inColorInfoInstance2 = InColorInfoDTO.builder()
                .id(2L)
                .name("colorName2")
                .color_image("colorImageURL2")
                .in_image("inImageURL2")
                .inColorTagInfoDTOS(Set.of(tagInstance1, tagInstance2))
                .build();

        ExColorTagInfoDTO exTagInstance1 = ExColorTagInfoDTO.builder()
                .id(1L)
                .name("exTagName1")
                .count(10L)
                .build();

        ExColorTagInfoDTO exTagInstance2 = ExColorTagInfoDTO.builder()
                .id(2L)
                .name("exTagName2")
                .count(20L)
                .build();

        ExColorInfoDTO exColorInfoInstance1 = ExColorInfoDTO.builder()
                .id(1L)
                .name("exColorName1")
                .color_image("exColorImageURL1")
                .rotation_image("rotationImageURL1")
                .price(1000.50)
                .exColorTagInfoDTOS(Set.of(exTagInstance1, exTagInstance2))
                .build();

        ExColorInfoDTO exColorInfoInstance2 = ExColorInfoDTO.builder()
                .id(2L)
                .name("exColorName2")
                .color_image("exColorImageURL2")
                .rotation_image("rotationImageURL2")
                .price(2000.75)
                .exColorTagInfoDTOS(Set.of(exTagInstance1, exTagInstance2))
                .build();

        Set<ExColorInfoDTO> exColorInfoDTOs = Set.of(exColorInfoInstance1, exColorInfoInstance2);
        Set<InColorInfoDTO> inColorInfoDTOs = Set.of(inColorInfoInstance1, inColorInfoInstance2);

        List<ExColorTagInfoDTO> exColorTagInfoDTOList = Stream.of(exTagInstance1, exTagInstance2)
                .sorted(Comparator.comparingLong(ExColorTagInfoDTO::getId))
                .collect(Collectors.toList());

        List<InColorTagInfoDTO> inColorTagInfoDTOList = Stream.of(tagInstance1, tagInstance2)
                .sorted(Comparator.comparingLong(InColorTagInfoDTO::getId))
                .collect(Collectors.toList());

        ExColorInfoSortedDTO exColorInfoSortedDTO2 = ExColorInfoSortedDTO.builder()
                .id(2L)
                .name("exColorName2")
                .color_image("exColorImageURL2")
                .rotation_image("rotationImageURL2")
                .price(2000.75)
                .exColorTagInfoDTOS(exColorTagInfoDTOList)
                .build();

        ExColorInfoSortedDTO exColorInfoSortedDTO1 = ExColorInfoSortedDTO.builder()
                .id(1L)
                .name("exColorName1")
                .color_image("exColorImageURL1")
                .rotation_image("rotationImageURL1")
                .price(1000.50)
                .exColorTagInfoDTOS(exColorTagInfoDTOList)
                .build();

        InColorInfoSortedDTO inColorInfoSortedDTO1 = InColorInfoSortedDTO.builder()
                .id(1L)
                .name("colorName1")
                .color_image("colorImageURL1")
                .in_image("inImageURL1")
                .inColorTagInfoDTOS(inColorTagInfoDTOList)
                .build();

        InColorInfoSortedDTO inColorInfoSortedDTO2 = InColorInfoSortedDTO.builder()
                .id(2L)
                .name("colorName2")
                .color_image("colorImageURL2")
                .in_image("inImageURL2")
                .inColorTagInfoDTOS(inColorTagInfoDTOList)
                .build();

        List<ExColorInfoSortedDTO> exColorInfoDTOList = Stream.of(exColorInfoSortedDTO1, exColorInfoSortedDTO2)
                .sorted(Comparator.comparingLong(ExColorInfoSortedDTO::getId))
                .collect(Collectors.toList());

        List<InColorInfoSortedDTO> inColorInfoDTOList = Stream.of(inColorInfoSortedDTO1, inColorInfoSortedDTO2)
                .sorted(Comparator.comparingLong(InColorInfoSortedDTO::getId))
                .collect(Collectors.toList());

        TrimColorsAndTagsDTO trimColorsAndTagsDTO = TrimColorsAndTagsDTO.builder()
                .exColors(exColorInfoDTOList)
                .inColors(inColorInfoDTOList)
                .build();

        // When
        TrimColorsAndTagsDTO result = trimMapper.convertToSortedDTO(inColorInfoDTOs, exColorInfoDTOs);

        // Then
        softAssertions.assertThat(result)
                .usingRecursiveComparison()
                .isEqualTo(trimColorsAndTagsDTO);
    }
}
