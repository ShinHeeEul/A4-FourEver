package A4.FourEver.domain.unit.trim.repository;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import A4.FourEver.domain.tag.exColorTag.dto.ExColorTagInfoDTO;
import A4.FourEver.domain.tag.inColorTag.dto.InColorTagInfoDTO;
import A4.FourEver.domain.trim.trim.repository.TrimRepository;
import A4.FourEver.domain.trim.trim.repository.TrimRepositoryDefaultImpl;
import A4.FourEver.domain.unit.UnitTestBase;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;

import java.util.Set;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;

class TrimRepositoryDefaultImplTest extends UnitTestBase {

    private TrimRepository trimRepository;
    private JdbcTemplate jdbcTemplate;

    @BeforeEach
    void setup() {
        jdbcTemplate = mock(JdbcTemplate.class);
        trimRepository = new TrimRepositoryDefaultImpl(jdbcTemplate);
    }

    @Test
    @DisplayName("(단위) 트림의 아이디로 내장 색상 정보가 성공적으로 조회 되어야한다.")
    void findTrimInColorsAndTagsById() {
        // Given
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

        Set<InColorInfoDTO> inColorInfoDTOs = Set.of(inColorInfoInstance1, inColorInfoInstance2);

        String sql = "SELECT DISTINCT " +
                "io.*, " +
                "iot.id AS tag_id, " +
                "iot.name AS tag_name, " +
                "iot.count AS tag_count " +
                "FROM in_color io " +
                "LEFT JOIN in_color_tag iot ON io.id = iot.in_color_id " +
                "WHERE io.trim_id = ?";

        given(jdbcTemplate.query(eq(sql),
                any(ResultSetExtractor.class),
                any(Long.class)))
                .willReturn(inColorInfoDTOs);

        // When
        Set<InColorInfoDTO> result = trimRepository.findTrimInColorsAndTagsById(1L);

        // Then
        softAssertions.assertThat(result)
                .usingRecursiveComparison()
                .isEqualTo(inColorInfoDTOs);
    }

    @Test
    @DisplayName("(단위) 트림의 아이디로 외장 색상 정보가 성공적으로 조회 되어야한다.")
    void findTrimExColorsAndTagsById() {
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

        String sql = "SELECT DISTINCT " +
                "ec.*, " +
                "ect.id AS tag_id, " +
                "ect.name AS tag_name, " +
                "ect.count AS tag_count " +
                "FROM ex_color ec " +
                "LEFT JOIN ex_color_tag ect ON ec.id = ect.ex_color_id " +
                "WHERE ec.trim_id = ?";

        given(jdbcTemplate.query(eq(sql),
                any(ResultSetExtractor.class),
                any(Long.class)))
                .willReturn(exColorInfoDTOs);

        // When
        Set<ExColorInfoDTO> result = trimRepository.findTrimExColorsAndTagsById(1L);

        // Then
        softAssertions.assertThat(result)
                .usingRecursiveComparison()
                .isEqualTo(exColorInfoDTOs);
    }
}
