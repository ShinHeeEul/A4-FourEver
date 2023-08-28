package A4.FourEver.domain.carReview.repository;

import A4.FourEver.domain.carReview.dto.CarReviewIdDTO;
import A4.FourEver.domain.carReview.dto.CarReviewResultDTO;
import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.exColor.dto.ExColorNameAndImageDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorNameDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionDetailDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionInfoDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionNameDTO;
import A4.FourEver.domain.carReview.dto.CarReviewDetailDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import A4.FourEver.domain.tag.totalTag.dto.TotalTagInfoDTO;
import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.body.dto.BodyNameDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveNameDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineNameDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimNameDTO;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.*;

@Repository
public class CarReviewRepositoryDefaultImpl implements CarReviewRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private static final CarReviewDetailExtractor carReviewDetailExtractor = new CarReviewDetailExtractor();
    private static final CarReviewResultExtractor carReviewResultExtractor = new CarReviewResultExtractor();

    public CarReviewRepositoryDefaultImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    @Override
    public CarReviewDetailDTO findCarReviewDetail(final Long id, final Long userId) {
        String sql = "SELECT " +
                "cr.id, " +
                "cr.comment, " +
                "cr.price, " +
                "cr.is_purchased, " +
                "cr.created_at, " +
                "c.name AS car_name, " +
                "t.id AS trim_id, " +
                "t.name AS trim_name, " +
                "e.id AS engine_id, " +
                "e.name AS engine_name, " +
                "b.id AS body_id, " +
                "b.name AS body_name, " +
                "d.id AS drive_id, " +
                "d.name AS drive_name, " +
                "exc.id AS exterior_color_id, " +
                "exc.name AS exterior_color_name, " +
                "exc.rotation_image AS exterior_color_rotation_image, " +
                "inc.id AS interior_color_id, " +
                "inc.name AS interior_color_name, " +
                "eo.id AS extra_option_id, " +
                "eo.name AS extra_option_name, " +
                "eo.image AS extra_option_image, " +
                "eo.x_position AS extra_option_x_position, " +
                "eo.y_position AS extra_option_y_position, " +
                "seo.id AS sub_extra_option_id, " +
                "seo.name AS sub_extra_option_name, " +
                "eot.id AS extra_option_tag_id, " +
                "eot.name AS extra_option_tag_name, " +
                "eot.count AS extra_option_tag_count, " +
                "tt.id AS total_tag_id, " +
                "tt.name AS total_tag_name, " +
                "EXISTS (" +
                "    SELECT 1" +
                "    FROM users_car_review ucr" +
                "    WHERE ucr.car_review_id = cr.id" +
                "    AND ucr.user_id = :userId) as is_save " +

                "FROM car_review cr " +
                "JOIN model m ON cr.model_id = m.id " +
                "JOIN trim t ON m.trim_id = t.id " +
                "JOIN engine e ON m.engine_id = e.id " +
                "JOIN body b ON m.body_id = b.id " +
                "JOIN drive d ON m.drive_id = d.id " +
                "JOIN car c ON d.car_id = c.id " +
                "JOIN ex_color exc ON cr.ex_color_id = exc.id " +
                "JOIN in_color inc ON cr.in_color_id = inc.id " +
                "LEFT JOIN option_review orv ON cr.id = orv.car_review_id " +
                "LEFT JOIN extra_option eo ON orv.extra_option_id = eo.id " +
                "LEFT JOIN total_tag_car_review ttcr ON cr.id = ttcr.car_review_id " +
                "LEFT JOIN total_tag tt ON ttcr.total_tag_id = tt.id " +
                "LEFT JOIN sub_extra_option seo ON eo.id = seo.extra_option_id " +
                "LEFT JOIN extra_option_tag eot ON eo.id = eot.extra_option_id " +

                "WHERE cr.id = :id";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);
        params.addValue("userId", userId);

        return namedParameterJdbcTemplate.query(sql, params, carReviewDetailExtractor);
    }

    @Override
    public CarReviewResultDTO findCarReviewResult(CarReviewIdDTO dto) {
        StringBuilder sql = new StringBuilder();

        sql.append("SELECT ");

        sql.append("t.id AS trim_id, ");
        sql.append("t.name AS trim_name, ");
        sql.append("t.image AS trim_image, ");
        sql.append("t.price AS trim_price ");

        if (dto.getEngine_id() != 0) {
            sql.append(", e.id AS engine_id, ");
            sql.append("e.name AS engine_name, ");
            sql.append("e.image AS engine_image, ");
            sql.append("e.description AS engine_description, ");
            sql.append("e.max_output AS engine_max_output, ");
            sql.append("e.max_tok AS engine_max_tok, ");
            sql.append("e.price AS engine_price ");
        }

        if (dto.getBody_id() != 0) {
            sql.append(", b.id AS body_id, ");
            sql.append("b.name AS body_name, ");
            sql.append("b.image AS body_image, ");
            sql.append("b.description AS body_description, ");
            sql.append("b.price AS body_price ");
        }

        if (dto.getDrive_id() != 0) {
            sql.append(", d.id AS drive_id, ");
            sql.append("d.name AS drive_name, ");
            sql.append("d.image AS drive_image, ");
            sql.append("d.description AS drive_description, ");
            sql.append("d.price AS drive_price ");
        }

        if (dto.getIn_color_id() != 0) {
            sql.append(", inc.id AS interior_id, ");
            sql.append("inc.name AS interior_name, ");
            sql.append("inc.color_image AS interior_color_image, ");
            sql.append("inc.in_image AS interior_in_image ");
        }

        if (dto.getEx_color_id() != 0) {
            sql.append(", exc.id AS exterior_id, ");
            sql.append("exc.name AS exterior_name, ");
            sql.append("exc.color_image AS exterior_color_image, ");
            sql.append("exc.rotation_image AS exterior_rotation_image, ");
            sql.append("exc.price AS exterior_price ");
        }

        if (dto.getExtra_option_ids() != null && !dto.getExtra_option_ids().isEmpty()) {
            sql.append(", eo.id AS extra_option_id, ");
            sql.append("eo.name AS extra_option_name, ");
            sql.append("eo.description AS extra_option_description, ");
            sql.append("eoc.name AS extra_option_category, ");
            sql.append("eo.image AS extra_option_image, ");
            sql.append("eo.price AS extra_option_price, ");
            sql.append("eo.x_position AS extra_option_x_position, ");
            sql.append("eo.y_position AS extra_option_y_position ");
        }

        sql.append("FROM model m ");
        sql.append("LEFT JOIN trim t ON m.trim_id = t.id ");

        if (dto.getEngine_id() != 0) {
            sql.append("LEFT JOIN engine e ON m.engine_id = e.id ");
        }

        if (dto.getBody_id() != 0) {
            sql.append("LEFT JOIN body b ON m.body_id = b.id ");
        }

        if (dto.getDrive_id() != 0) {
            sql.append("LEFT JOIN drive d ON m.drive_id = d.id ");
        }

        if (dto.getIn_color_id() != 0) {
            sql.append("LEFT JOIN in_color inc ON t.id = inc.trim_id ");
            sql.append("LEFT JOIN ex_color exc ON t.id = exc.trim_id ");
        }

        if (dto.getExtra_option_ids() != null && !dto.getExtra_option_ids().isEmpty()) {
            sql.append("LEFT JOIN extra_option_model AS eom ON m.id = eom.model_id ");
            sql.append("LEFT JOIN extra_option AS eo ON eom.extra_option_id = eo.id ");
            sql.append("LEFT JOIN extra_option_category eoc ON eo.extra_option_category_id = eoc.id ");
        }

        sql.append("WHERE (m.trim_id = :trim_id OR (m.trim_id IS NULL AND :trim_id IS NULL)) ");
        sql.append("AND (m.engine_id = :engine_id OR (m.engine_id IS NULL AND :engine_id IS NULL)) ");
        sql.append("AND (m.body_id = :body_id OR (m.body_id IS NULL AND :body_id IS NULL)) ");
        sql.append("AND (m.drive_id = :drive_id OR (m.drive_id IS NULL AND :drive_id IS NULL)) ");


        if (dto.getIn_color_id() != 0) {
            sql.append("AND inc.id = :in_color_id ");
            sql.append("AND exc.id = :ex_color_id ");
        }

        if (dto.getExtra_option_ids() != null && !dto.getExtra_option_ids().isEmpty()) {
            sql.append("AND eo.id in (:extra_option_ids) ");
        }

        sql.append(";");

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("trim_id", getOrDefault(dto.getTrim_id()));
        params.addValue("engine_id", getOrDefault(dto.getEngine_id()));
        params.addValue("body_id", getOrDefault(dto.getBody_id()));
        params.addValue("drive_id", getOrDefault(dto.getDrive_id()));
        params.addValue("in_color_id", getOrDefault(dto.getIn_color_id()));
        params.addValue("ex_color_id", getOrDefault(dto.getEx_color_id()));
        params.addValue("extra_option_ids", getOrDefault(dto.getExtra_option_ids()));

        return namedParameterJdbcTemplate.query(sql.toString(), params, carReviewResultExtractor);
    }

    private Long getOrDefault(Long id) {
        return (id == 0) ? null : id;
    }

    private List<Long> getOrDefault(List<Long> ids) {
        return (ids.isEmpty()) ? null : ids;
    }

    private static class CarReviewDetailExtractor implements ResultSetExtractor<CarReviewDetailDTO> {

        @Override
        public CarReviewDetailDTO extractData(ResultSet rs) throws SQLException {
            CarReviewDetailDTO detailDTO = null;
            Map<Long, ExtraOptionDetailDTO> extraOptionMap = new HashMap<>();

            while (rs.next()) {
                if (detailDTO == null) {
                    TrimNameDTO trimNameDTO = TrimNameDTO.builder()
                            .id(rs.getLong("trim_id"))
                            .name(rs.getString("trim_name"))
                            .build();

                    EngineNameDTO engineNameDTO = EngineNameDTO.builder()
                            .id(rs.getLong("engine_id"))
                            .name(rs.getString("engine_name"))
                            .build();

                    BodyNameDTO bodyNameDTO = BodyNameDTO.builder()
                            .id(rs.getLong("body_id"))
                            .name(rs.getString("body_name"))
                            .build();

                    DriveNameDTO driveNameDTO = DriveNameDTO.builder()
                            .id(rs.getLong("drive_id"))
                            .name(rs.getString("drive_name"))
                            .build();

                    ExColorNameAndImageDTO exColorNameAndImageDTO = ExColorNameAndImageDTO.builder()
                            .id(rs.getLong("exterior_color_id"))
                            .name(rs.getString("exterior_color_name"))
                            .color_image(rs.getString("exterior_color_rotation_image"))
                            .build();

                    InColorNameDTO inColorNameDTO = InColorNameDTO.builder()
                            .id(rs.getLong("interior_color_id"))
                            .name(rs.getString("interior_color_name"))
                            .build();

                    detailDTO = CarReviewDetailDTO.builder()
                            .id(rs.getLong("id"))
                            .car_name(rs.getString("car_name"))
                            .is_save(rs.getBoolean("is_save") ? 1 : 0)
                            .trimNameDTO(trimNameDTO)
                            .engineNameDTO(engineNameDTO)
                            .bodyNameDTO(bodyNameDTO)
                            .driveNameDTO(driveNameDTO)
                            .exColorDTO(exColorNameAndImageDTO)
                            .inColorDTO(inColorNameDTO)
                            .comment(rs.getString("comment"))
                            .is_purchased(rs.getInt("is_purchased"))
                            .created_at(rs.getTimestamp("created_at"))
                            .price(rs.getDouble("price"))
                            .totalTagInfoDTOs(new HashSet<>())
                            .extraOptionDetailDTOs(new HashSet<>())
                            .build();
                }

                TotalTagInfoDTO totalTagInfoDTO = TotalTagInfoDTO.builder()
                        .id(rs.getLong("total_tag_id"))
                        .name(rs.getString("total_tag_name"))
                        .build();

                detailDTO.getTotalTagInfoDTOs().add(totalTagInfoDTO);

                Long extraOptionId = rs.getLong("extra_option_id");
                ExtraOptionDetailDTO extraOptionDTO = extraOptionMap.get(extraOptionId);

                if (extraOptionDTO == null) {
                    extraOptionDTO = ExtraOptionDetailDTO.builder()
                            .id(extraOptionId)
                            .name(rs.getString("extra_option_name"))
                            .image(rs.getString("extra_option_image"))
                            .x_position(rs.getInt("extra_option_x_position"))
                            .y_position(rs.getInt("extra_option_y_position"))
                            .extraOptionTagInfoDTOS(new HashSet<>())
                            .subExtraOptionNameDTOs(new HashSet<>())
                            .build();
                    extraOptionMap.put(extraOptionId, extraOptionDTO);
                    detailDTO.getExtraOptionDetailDTOs().add(extraOptionDTO);
                }

                SubExtraOptionNameDTO subExtraOptionNameDTO = SubExtraOptionNameDTO.builder()
                        .id(rs.getLong("sub_extra_option_id"))
                        .name(rs.getString("sub_extra_option_name"))
                        .build();
                extraOptionDTO.getSubExtraOptionNameDTOs().add(subExtraOptionNameDTO);

                ExtraOptionTagInfoDTO extraOptionTag = ExtraOptionTagInfoDTO.builder()
                        .id(rs.getLong("extra_option_tag_id"))
                        .name(rs.getString("extra_option_tag_name"))
                        .count(rs.getLong("extra_option_tag_count"))
                        .build();
                extraOptionDTO.getExtraOptionTagInfoDTOS().add(extraOptionTag);
            }

            return detailDTO;
        }
    }

    private static class CarReviewResultExtractor implements ResultSetExtractor<CarReviewResultDTO> {

        @Override
        public CarReviewResultDTO extractData(ResultSet rs) throws SQLException {
            ResultSetMetaData metaData = rs.getMetaData();
            List<String> columnLabels = new ArrayList<>();
            for (int i = 1; i <= metaData.getColumnCount(); i++) {
                columnLabels.add(metaData.getColumnLabel(i));
            }

            CarReviewResultDTO resultDTO = null;
            Map<Long, ExtraOptionInfoDTO> extraOptionMap = new HashMap<>();

            TrimInfoDTO trimInfoDTO;
            BodyInfoDTO bodyInfoDTO = null;
            DriveInfoDTO driveInfoDTO = null;
            EngineInfoDTO engineInfoDTO = null;
            InColorInfoDTO inColorDTO = null;
            ExColorInfoDTO exColorDTO = null;

            while (rs.next()) {
                if (resultDTO == null) {
                    trimInfoDTO = TrimInfoDTO.builder()
                            .id(rs.getLong("trim_id"))
                            .name(rs.getString("trim_name"))
                            .image(rs.getString("trim_image"))
                            .price(rs.getDouble("trim_price"))
                            .build();

                    if (columnLabels.contains("body_id")) {
                        bodyInfoDTO = BodyInfoDTO.builder()
                                .id(rs.getLong("body_id"))
                                .name(rs.getString("body_name"))
                                .image(rs.getString("body_image"))
                                .description(rs.getString("body_description"))
                                .price(rs.getDouble("body_price"))
                                .build();
                    }

                    if (columnLabels.contains("drive_id")) {
                        driveInfoDTO = DriveInfoDTO.builder()
                                .id(rs.getLong("drive_id"))
                                .name(rs.getString("drive_name"))
                                .image(rs.getString("drive_image"))
                                .description(rs.getString("drive_description"))
                                .price(rs.getDouble("drive_price"))
                                .build();
                    }

                    if (columnLabels.contains("engine_id")) {
                        engineInfoDTO = EngineInfoDTO.builder()
                                .id(rs.getLong("engine_id"))
                                .name(rs.getString("engine_name"))
                                .image(rs.getString("engine_image"))
                                .description(rs.getString("engine_description"))
                                .max_output(rs.getString("engine_max_output"))
                                .max_tok(rs.getString("engine_max_tok"))
                                .price(rs.getDouble("engine_price"))
                                .build();
                    }

                    if (columnLabels.contains("exterior_id")) {
                        exColorDTO = ExColorInfoDTO.builder()
                                .id(rs.getLong("exterior_id"))
                                .name(rs.getString("exterior_name"))
                                .color_image(rs.getString("exterior_color_image"))
                                .rotation_image(rs.getString("exterior_rotation_image"))
                                .price(rs.getDouble("exterior_price"))
                                .exColorTagInfoDTOS(new HashSet<>())
                                .build();

                        inColorDTO = InColorInfoDTO.builder()
                                .id(rs.getLong("interior_id"))
                                .name(rs.getString("interior_name"))
                                .color_image(rs.getString("interior_color_image"))
                                .in_image(rs.getString("interior_in_image"))
                                .inColorTagInfoDTOS(new HashSet<>())
                                .build();
                    }

                    resultDTO = CarReviewResultDTO.builder()
                            .trimInfoDTO(trimInfoDTO)
                            .bodyInfoDTO(bodyInfoDTO)
                            .engineInfoDTO(engineInfoDTO)
                            .driveInfoDTO(driveInfoDTO)
                            .inColorDTO(inColorDTO)
                            .exColorDTO(exColorDTO)
                            .defaultOptionDTOs(new HashSet<>())
                            .extraOptionDTOs(new HashSet<>())
                            .build();
                }

                if (columnLabels.contains("extra_option_id")) {
                    Long extraOptionId = rs.getLong("extra_option_id");
                    ExtraOptionInfoDTO extraOptionDTO = extraOptionMap.get(extraOptionId);

                    if (extraOptionDTO == null) {
                        extraOptionDTO = ExtraOptionInfoDTO.builder()
                                .id(extraOptionId)
                                .name(rs.getString("extra_option_name"))
                                .description(rs.getString("extra_option_description"))
                                .category(rs.getString("extra_option_category"))
                                .image(rs.getString("extra_option_image"))
                                .price(rs.getDouble("extra_option_price"))
                                .x_position(rs.getInt("extra_option_x_position"))
                                .y_position(rs.getInt("extra_option_y_position"))
                                .extraOptionTagInfoDTOS(new HashSet<>())
                                .subExtraOptionInfoDTOs(new HashSet<>())
                                .build();
                        extraOptionMap.put(extraOptionId, extraOptionDTO);
                        resultDTO.getExtraOptionDTOs().add(extraOptionDTO);
                    }
                }
            }
            return resultDTO;
        }
    }
}
