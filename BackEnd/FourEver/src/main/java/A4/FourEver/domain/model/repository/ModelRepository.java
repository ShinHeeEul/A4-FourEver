package A4.FourEver.domain.model.repository;

import A4.FourEver.domain.model.domain.Model;
import A4.FourEver.domain.model.dto.ModelDefaultOptionInfoDTO;
import A4.FourEver.domain.model.dto.ModelExtraOptionInfoDTO;
import A4.FourEver.domain.option.defaultOption.dto.DefaultOptionInfoDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionInfoDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.jdbc.core.ResultSetExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

public interface ModelRepository extends CrudRepository<Model, Long> {

    @Query(value = "WITH ModelID AS (" +
            "    SELECT model_id " +
            "    FROM model " +
            "    WHERE trim_id = :trim_id AND engine_id = :engine_id AND body_id = :body_id AND drive_id = :drive_id" +
            ")" +
            "SELECT DISTINCT do.*, doc.name AS category_name " +
            "FROM default_option do " +
            "JOIN default_option_category doc ON do.default_option_category_id = doc.default_option_category_id " +
            "JOIN default_option_model dom ON do.default_option_id = dom.default_option_id " +
            "JOIN ModelID ON dom.model_id = ModelID.model_id"
            , resultSetExtractorClass = ModelDefaultOptionInfoDTOExtractor.class)
    ModelDefaultOptionInfoDTO findModelDefaultOption(@Param("trim_id") final Long trim_id, @Param("engine_id") final Long engine_id, @Param("body_id") final Long body_id, @Param("drive_id") final Long drive_id);

    @Query(value = "WITH ModelID AS (" +
            "    SELECT model_id " +
            "    FROM model " +
            "    WHERE trim_id = :trim_id AND engine_id = :engine_id AND body_id = :body_id AND drive_id = :drive_id" +
            ")" +
            "SELECT DISTINCT " +
            "    eo.*," +
            "    eoc.name AS category_name, " +
            "    eot.extra_option_tag_id AS tag_id, " +
            "    eot.name AS tag_name, " +
            "    eot.count AS tag_count," +
            "    so.sub_extra_option_id," +
            "    so.name AS sub_option_name," +
            "    so.description AS sub_option_description," +
            "    so.image AS sub_option_image " +
            "FROM extra_option eo " +
            "JOIN extra_option_category eoc ON eo.extra_option_category_id = eoc.extra_option_category_id " +
            "JOIN extra_option_model eom ON eo.extra_option_id = eom.extra_option_id " +
            "LEFT JOIN extra_option_tag eot ON eo.extra_option_id = eot.extra_option_id " +
            "LEFT JOIN sub_extra_option so ON eo.extra_option_id = so.extra_option_id " +
            "JOIN ModelID ON eom.model_id = ModelID.model_id"
            , resultSetExtractorClass = ModelExtraOptionInfoDTOExtractor.class)
    ModelExtraOptionInfoDTO findModelExtraOption(@Param("trim_id") final Long trim_id, @Param("engine_id") final Long engine_id, @Param("body_id") final Long body_id, @Param("drive_id") final Long drive_id);

    class ModelDefaultOptionInfoDTOExtractor implements ResultSetExtractor<ModelDefaultOptionInfoDTO> {

        @Override
        public ModelDefaultOptionInfoDTO extractData(ResultSet rs) throws SQLException {
            Set<DefaultOptionInfoDTO> defaultOptionDTOs = new HashSet<>();

            while (rs.next()) {
                DefaultOptionInfoDTO defaultOptionInfoDto = DefaultOptionInfoDTO.builder()
                        .default_option_id(rs.getLong("default_option_id"))
                        .name(rs.getString("name"))
                        .description(rs.getString("description"))
                        .image(rs.getString("image"))
                        .category(rs.getString("category_name"))
                        .build();

                defaultOptionDTOs.add(defaultOptionInfoDto);
            }

            return ModelDefaultOptionInfoDTO.builder()
                    .defaultOptionInfoDTOs(defaultOptionDTOs)
                    .build();
        }
    }

    class ModelExtraOptionInfoDTOExtractor implements ResultSetExtractor<ModelExtraOptionInfoDTO> {

        @Override
        public ModelExtraOptionInfoDTO extractData(ResultSet rs) throws SQLException {
            Set<ExtraOptionInfoDTO> extraOptionDTOs = new HashSet<>();

            while (rs.next()) {
                SubExtraOptionInfoDTO subExtraOptionInfoDTO = SubExtraOptionInfoDTO.builder()
                        .sub_option_id(rs.getLong("sub_extra_option_id"))
                        .name(rs.getString("sub_option_name"))
                        .description(rs.getString("sub_option_description"))
                        .image(rs.getString("sub_option_image"))
                        .build();

                ExtraOptionTagInfoDTO extraOptionTagInfoDTO = ExtraOptionTagInfoDTO.builder()
                        .extra_option_tag_id(rs.getLong("tag_id"))
                        .name(rs.getString("tag_name"))
                        .count(rs.getLong("tag_count"))
                        .build();

                Long extra_option_id = rs.getLong("extra_option_id");

                Optional<ExtraOptionInfoDTO> extraOptionInfoDtoOpt = extraOptionDTOs.stream()
                        .filter(extraOptionInfoDTO -> matchesExtraOptionId(extraOptionInfoDTO, extra_option_id))
                        .findFirst();

                ExtraOptionInfoDTO extraOptionInfoDto = extraOptionInfoDtoOpt.orElse(null);

                if(extraOptionInfoDtoOpt.isEmpty()) {
                    Set<ExtraOptionTagInfoDTO> extraOptionTagInfoDTOS = new HashSet<>();
                    Set<SubExtraOptionInfoDTO> subExtraOptionInfoDTOs = new HashSet<>();

                    extraOptionInfoDto = ExtraOptionInfoDTO.builder()
                            .extra_option_id(rs.getLong("extra_option_id"))
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

                extraOptionInfoDto.getExtraOptionTagInfoDTOS().add(extraOptionTagInfoDTO);
                extraOptionInfoDto.getSubExtraOptionInfoDTOs().add(subExtraOptionInfoDTO);

                extraOptionDTOs.add(extraOptionInfoDto);
            }

            return ModelExtraOptionInfoDTO.builder()
                    .extraOptionInfoDTOs(extraOptionDTOs)
                    .build();
        }

        private boolean matchesExtraOptionId(ExtraOptionInfoDTO dto, Long id) {
            return dto.getExtra_option_id().equals(id);
        }
    }
}
