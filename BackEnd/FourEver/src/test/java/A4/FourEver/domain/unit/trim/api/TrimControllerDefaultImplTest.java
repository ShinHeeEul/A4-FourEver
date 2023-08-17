package A4.FourEver.domain.unit.trim.api;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoSortedDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoSortedDTO;
import A4.FourEver.domain.tag.exColorTag.dto.ExColorTagInfoDTO;
import A4.FourEver.domain.tag.inColorTag.dto.InColorTagInfoDTO;
import A4.FourEver.domain.trim.trim.api.TrimController;
import A4.FourEver.domain.trim.trim.api.TrimControllerDefaultImpl;
import A4.FourEver.domain.trim.trim.application.TrimService;
import A4.FourEver.domain.trim.trim.dto.TrimColorsAndTagsDTO;
import A4.FourEver.domain.unit.UnitTestBase;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class TrimControllerDefaultImplTest extends UnitTestBase {

    private TrimService trimService;
    private TrimController trimController;
    private MockMvc mockMvc;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    void setup() {
        trimService = mock(TrimService.class);
        trimController = new TrimControllerDefaultImpl(trimService);
        mockMvc = MockMvcBuilders.standaloneSetup(trimController).build();
    }

    @Test
    @DisplayName("(단위) TrimController 에서 트림의 아이디로 내외장 생상 정보가 성공적으로 조회 되어야한다.")
    void getTrimColorsAndTagsById() throws Exception {
        // Given
        Long trimId = 1L;
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

        given(trimService.getTrimColorsAndTagsById(trimId))
                .willReturn(trimColorsAndTagsDTO);

        // When && Then
        mockMvc.perform(get("/trims/{id}/color", trimId))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(trimColorsAndTagsDTO)));
    }
}
