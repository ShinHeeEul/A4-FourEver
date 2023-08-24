package A4.FourEver.domain.model.repository;

import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionInfoDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Repository
public class ModelRepositoryDefaultImpl implements ModelRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private static final DefaultOptionInfoDTOExtractor defaultOptionExtractor = new DefaultOptionInfoDTOExtractor();
    private static final ExtraOptionInfoDTOExtractor extraOptionExtractor = new ExtraOptionInfoDTOExtractor();

    public ModelRepositoryDefaultImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    @Override
    public Set<DefaultOptionInfoDTO> findModelDefaultOption(Long trim_id, Long engine_id, Long body_id, Long drive_id) {
        String sql = "SELECT DISTINCT " +
                "do.*, doc.name AS category_name " +

                "FROM default_option do " +
                "JOIN default_option_category doc ON do.default_option_category_id = doc.id " +
                "JOIN default_option_model dom ON do.id = dom.default_option_id " +
                "JOIN model m ON dom.model_id = m.id " +

                "WHERE m.trim_id = :trim_id " +
                "AND m.engine_id = :engine_id " +
                "AND m.body_id = :body_id " +
                "AND m.drive_id = :drive_id";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("trim_id", trim_id);
        params.addValue("engine_id", engine_id);
        params.addValue("body_id", body_id);
        params.addValue("drive_id", drive_id);

        return namedParameterJdbcTemplate.query(sql, params, defaultOptionExtractor);
    }

    @Override
    public Set<ExtraOptionInfoDTO> findModelExtraOption(Long trim_id, Long engine_id, Long body_id, Long drive_id) {
        String sql = "SELECT DISTINCT " +
                "eo.*," +
                "eoc.name AS category_name, " +
                "eot.id AS tag_id, " +
                "eot.name AS tag_name, " +
                "eot.count AS tag_count," +
                "seo.id AS sub_extra_option_id," +
                "seo.name AS sub_extra_option_name," +
                "seo.description AS sub_extra_option_description," +
                "seo.image AS sub_extra_option_image " +

                "FROM extra_option eo " +
                "JOIN extra_option_category eoc ON eo.extra_option_category_id = eoc.id " +
                "JOIN extra_option_model eom ON eo.id = eom.extra_option_id " +
                "JOIN model m ON eom.model_id = m.id " +
                "LEFT JOIN extra_option_tag eot ON eo.id = eot.extra_option_id " +
                "LEFT JOIN sub_extra_option seo ON eo.id = seo.extra_option_id " +

                "WHERE m.trim_id = :trim_id " +
                "AND m.engine_id = :engine_id " +
                "AND m.body_id = :body_id " +
                "AND m.drive_id = :drive_id";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("trim_id", trim_id);
        params.addValue("engine_id", engine_id);
        params.addValue("body_id", body_id);
        params.addValue("drive_id", drive_id);

        return namedParameterJdbcTemplate.query(sql, params, extraOptionExtractor);
    }

    private static class DefaultOptionInfoDTOExtractor implements ResultSetExtractor<Set<DefaultOptionInfoDTO>> {

        @Override
        public Set<DefaultOptionInfoDTO> extractData(ResultSet rs) throws SQLException {
            Set<DefaultOptionInfoDTO> defaultOptionDTOs = new HashSet<>();

            while (rs.next()) {
                DefaultOptionInfoDTO defaultOptionInfoDto = DefaultOptionInfoDTO.builder()
                        .id(rs.getLong("id"))
                        .name(rs.getString("name"))
                        .description(rs.getString("description"))
                        .image(rs.getString("image"))
                        .category(rs.getString("category_name"))
                        .build();

                defaultOptionDTOs.add(defaultOptionInfoDto);
            }

            return defaultOptionDTOs;
        }
    }

    private static class ExtraOptionInfoDTOExtractor implements ResultSetExtractor<Set<ExtraOptionInfoDTO>> {

        @Override
        public Set<ExtraOptionInfoDTO> extractData(ResultSet rs) throws SQLException {
            Set<ExtraOptionInfoDTO> extraOptionDTOs = new HashSet<>();

            while (rs.next()) {
                SubExtraOptionInfoDTO subExtraOptionInfoDTO = SubExtraOptionInfoDTO.builder()
                        .id(rs.getLong("sub_extra_option_id"))
                        .name(rs.getString("sub_extra_option_name"))
                        .description(rs.getString("sub_extra_option_description"))
                        .image(rs.getString("sub_extra_option_image"))
                        .build();

                ExtraOptionTagInfoDTO extraOptionTagInfoDTO = ExtraOptionTagInfoDTO.builder()
                        .id(rs.getLong("tag_id"))
                        .name(rs.getString("tag_name"))
                        .count(rs.getLong("tag_count"))
                        .build();

                Long extra_option_id = rs.getLong("id");

                Optional<ExtraOptionInfoDTO> extraOptionInfoDtoOpt = extraOptionDTOs.stream()
                        .filter(extraOptionInfoDTO -> matchesExtraOptionId(extraOptionInfoDTO, extra_option_id))
                        .findFirst();

                ExtraOptionInfoDTO exColorDto = extraOptionInfoDtoOpt.orElse(null);

                if (extraOptionInfoDtoOpt.isEmpty()) {
                    Set<ExtraOptionTagInfoDTO> extraOptionTagInfoDTOS = new HashSet<>();
                    Set<SubExtraOptionInfoDTO> subExtraOptionInfoDTOs = new HashSet<>();

                    exColorDto = ExtraOptionInfoDTO.builder()
                            .id(rs.getLong("id"))
                            .name(rs.getString("name"))
                            .description(rs.getString("description"))
                            .category(rs.getString("category_name"))
                            .image(rs.getString("image"))
                            .price(rs.getDouble("price"))
                            .x_position(rs.getInt("x_position"))
                            .y_position(rs.getInt("y_position"))
                            .extraOptionTagInfoDTOS(extraOptionTagInfoDTOS)
                            .subExtraOptionInfoDTOs(subExtraOptionInfoDTOs)
                            .build();
                }

                exColorDto.getExtraOptionTagInfoDTOS().add(extraOptionTagInfoDTO);
                exColorDto.getSubExtraOptionInfoDTOs().add(subExtraOptionInfoDTO);

                extraOptionDTOs.add(exColorDto);
            }

            return extraOptionDTOs;
        }

        private boolean matchesExtraOptionId(ExtraOptionInfoDTO dto, Long id) {
            return dto.getId().equals(id);
        }
    }
}