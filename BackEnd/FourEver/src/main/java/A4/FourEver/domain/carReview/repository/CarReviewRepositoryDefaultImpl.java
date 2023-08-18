package A4.FourEver.domain.carReview.repository;

import A4.FourEver.domain.color.exColor.dto.ExColorNameAndImageDTO;
import A4.FourEver.domain.color.inColor.dto.InColorNameDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionForCarReviewDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionNameDTO;
import A4.FourEver.domain.carReview.dto.CarReviewDetailDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import A4.FourEver.domain.tag.totalTag.dto.TotalTagInfoDTO;
import A4.FourEver.domain.trim.body.dto.BodyNameDTO;
import A4.FourEver.domain.trim.drive.dto.DriveNameDTO;
import A4.FourEver.domain.trim.engine.dto.EngineNameDTO;
import A4.FourEver.domain.trim.trim.dto.TrimNameDTO;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

@Repository
public class CarReviewRepositoryDefaultImpl implements CarReviewRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private static final CarReviewDetailExtractor carReviewDetailExtractor = new CarReviewDetailExtractor();

    public CarReviewRepositoryDefaultImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    @Override
    public CarReviewDetailDTO findCarReviewDetail(final Long id) {
        String sql = "SELECT " +
                "cr.id AS car_review_id, " +
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
                "tt.name AS total_tag_name " +

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

                "WHERE cr.id = :id;";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);

        return namedParameterJdbcTemplate.query(sql, params, carReviewDetailExtractor);
    }

    public static class CarReviewDetailExtractor implements ResultSetExtractor<CarReviewDetailDTO> {

        @Override
        public CarReviewDetailDTO extractData(ResultSet rs) throws SQLException {
            CarReviewDetailDTO detailDTO = null;
            Map<Long, ExtraOptionForCarReviewDTO> extraOptionMap = new HashMap<>();

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
                            .car_review_id(rs.getLong("car_review_id"))
                            .car_name(rs.getString("car_name"))
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
                            .extraOptionForCarReviewDTOs(new HashSet<>())
                            .build();
                }

                TotalTagInfoDTO totalTagInfoDTO = TotalTagInfoDTO.builder()
                        .id(rs.getLong("total_tag_id"))
                        .name(rs.getString("total_tag_name"))
                        .build();

                detailDTO.getTotalTagInfoDTOs().add(totalTagInfoDTO);

                Long extraOptionId = rs.getLong("extra_option_id");
                ExtraOptionForCarReviewDTO extraOptionDTO = extraOptionMap.get(extraOptionId);

                if (extraOptionDTO == null) {
                    extraOptionDTO = ExtraOptionForCarReviewDTO.builder()
                            .id(extraOptionId)
                            .name(rs.getString("extra_option_name"))
                            .image(rs.getString("extra_option_image"))
                            .x_position(rs.getInt("extra_option_x_position"))
                            .y_position(rs.getInt("extra_option_y_position"))
                            .extraOptionTagInfoDTOS(new HashSet<>())
                            .subExtraOptionNameDTOs(new HashSet<>())
                            .build();
                    extraOptionMap.put(extraOptionId, extraOptionDTO);
                    detailDTO.getExtraOptionForCarReviewDTOs().add(extraOptionDTO);
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
}
