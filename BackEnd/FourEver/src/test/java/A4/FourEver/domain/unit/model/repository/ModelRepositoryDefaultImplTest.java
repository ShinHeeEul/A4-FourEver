package A4.FourEver.domain.unit.model.repository;

import A4.FourEver.domain.model.repository.ModelRepository;
import A4.FourEver.domain.model.repository.ModelRepositoryDefaultImpl;
import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionInfoDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import A4.FourEver.domain.unit.UnitTestBase;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.Set;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;

class ModelRepositoryDefaultImplTest extends UnitTestBase {

    private ModelRepository modelRepository;
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @BeforeEach
    void setup() {
        namedParameterJdbcTemplate = mock(NamedParameterJdbcTemplate.class);
        modelRepository = new ModelRepositoryDefaultImpl(namedParameterJdbcTemplate);
    }

    @Test
    @DisplayName("ModelRepository 에서 트림, 구동방식 등의 아이디로 기본 품목 정보가 성공적으로 조회 되어야한다.")
    void findModelDefaultOption() {
        // Given
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

        Set<DefaultOptionInfoDTO> defaultOptionInfoDTOs = Set.of(defaultOptionInfoDTO1, defaultOptionInfoDTO2);

        String sql = "WITH ModelID AS (" +
                "    SELECT id AS model_id" +
                "    FROM model " +
                "    WHERE trim_id = :trim_id AND engine_id = :engine_id AND body_id = :body_id AND drive_id = :drive_id" +
                ")" +
                "SELECT DISTINCT do.*, doc.name AS category_name " +
                "FROM default_option do " +
                "JOIN default_option_category doc ON do.default_option_category_id = doc.id " +
                "JOIN default_option_model dom ON do.id = dom.default_option_id " +
                "JOIN ModelID ON dom.model_id = ModelID.model_id";

        given(namedParameterJdbcTemplate.query(
                eq(sql),
                any(MapSqlParameterSource.class),
                any(ResultSetExtractor.class)))
                .willReturn(defaultOptionInfoDTOs);

        // When
        Set<DefaultOptionInfoDTO> result = modelRepository.findModelDefaultOption(1L, 1L, 1L, 1L);

        // Then
        softAssertions.assertThat(result)
                .usingRecursiveComparison()
                .isEqualTo(defaultOptionInfoDTOs);

    }

    @Test
    @DisplayName("ModelRepository 에서 트림, 구동방식 등의 아이디로 선택 품목 정보가 성공적으로 조회 되어야한다.")
    void findModelExtraOption() {
        // Given
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

        Set<ExtraOptionInfoDTO> extraOptionInfoDTOs = Set.of(extraOptionInfoDTO1, extraOptionInfoDTO2);

        String sql = "WITH ModelID AS (" +
                "    SELECT id AS model_id" +
                "    FROM model " +
                "    WHERE trim_id = :trim_id AND engine_id = :engine_id AND body_id = :body_id AND drive_id = :drive_id" +
                ")" +
                "SELECT DISTINCT " +
                "    eo.*," +
                "    eoc.name AS category_name, " +
                "    eot.id AS tag_id, " +
                "    eot.name AS tag_name, " +
                "    eot.count AS tag_count," +
                "    seo.id AS sub_extra_option_id," +
                "    seo.name AS sub_extra_option_name," +
                "    seo.description AS sub_extra_option_description," +
                "    seo.image AS sub_extra_option_image " +
                "FROM extra_option eo " +
                "JOIN extra_option_category eoc ON eo.extra_option_category_id = eoc.id " +
                "JOIN extra_option_model eom ON eo.id = eom.extra_option_id " +
                "LEFT JOIN extra_option_tag eot ON eo.id = eot.extra_option_id " +
                "LEFT JOIN sub_extra_option seo ON eo.id = seo.extra_option_id " +
                "JOIN ModelID ON eom.model_id = ModelID.model_id";

        given(namedParameterJdbcTemplate.query(
                eq(sql),
                any(MapSqlParameterSource.class),
                any(ResultSetExtractor.class)))
                .willReturn(extraOptionInfoDTOs);

        // When
        Set<ExtraOptionInfoDTO> result = modelRepository.findModelExtraOption(1L, 1L, 1L, 1L);

        // Then
        softAssertions.assertThat(result)
                .usingRecursiveComparison()
                .isEqualTo(extraOptionInfoDTOs);
    }
}
