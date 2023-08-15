package A4.FourEver.domain.car.repository;

import A4.FourEver.domain.car.dto.CarExtraOptionNameDTO;
import A4.FourEver.domain.car.dto.CarReviewOverviewListDTO;
import A4.FourEver.domain.car.dto.CarTrimsDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionNameDTO;
import A4.FourEver.domain.review.carReview.dto.CarReviewOverviewDTO;
import A4.FourEver.domain.tag.totalTag.dto.TotalTagInfoDTO;
import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

@Repository
public class CarRepositoryDefaultImpl implements CarRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private static final CarTrimsExtractor carTrimsExtractor = new CarTrimsExtractor();
    private static final ExtraOptionNameExtractor extraOptionNameExtractor = new ExtraOptionNameExtractor();
    private static final CarReviewOverviewExtractor carReviewOverviewExtractor = new CarReviewOverviewExtractor();

    public CarRepositoryDefaultImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    @Override
    public CarTrimsDTO findCarTrimsById(Long id) {
        String sql = "SELECT DISTINCT " +
                "t.id AS trim_id, " +
                "t.name AS trim_name, " +
                "t.image AS trim_image, " +
                "t.price AS trim_price, " +

                "b.id AS body_id, " +
                "b.name AS body_name, " +
                "b.image AS body_image, " +
                "b.description AS body_description, " +
                "b.price AS body_price, " +

                "d.id AS drive_id, " +
                "d.name AS drive_name, " +
                "d.image AS drive_image, " +
                "d.description AS drive_description, " +
                "d.price AS drive_price, " +

                "e.id AS engine_id, " +
                "e.name AS engine_name, " +
                "e.image AS engine_image, " +
                "e.description AS engine_description, " +
                "e.max_output AS engine_max_output, " +
                "e.max_tok AS engine_max_tok, " +
                "e.price AS engine_price " +

                "FROM car c " +
                "LEFT JOIN engine e ON c.id = e.car_id " +
                "LEFT JOIN body b ON c.id = b.car_id " +
                "LEFT JOIN trim t ON c.id = t.car_id " +
                "LEFT JOIN drive d ON c.id = d.car_id " +
                "WHERE c.id = :id";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);

        return namedParameterJdbcTemplate.query(sql, params, carTrimsExtractor);
    }

    @Override
    public CarExtraOptionNameDTO findCarExtraOptionNameById(Long id) {
        String sql = "SELECT DISTINCT " +
                "eo.id, " +
                "eo.name " +

                "FROM car c " +
                "JOIN model m ON c.id = m.id " +
                "JOIN trim t ON c.id = t.car_id " +
                "JOIN engine e ON c.id = e.car_id " +
                "JOIN body b ON c.id = b.car_id " +
                "JOIN drive d ON c.id = d.car_id " +
                "JOIN extra_option_model eom ON m.id = eom.model_id " +
                "JOIN extra_option eo ON eom.extra_option_id = eo.id " +
                "WHERE c.id = :id;";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);

        return namedParameterJdbcTemplate.query(sql, params, extraOptionNameExtractor);
    }

    @Override
    public CarReviewOverviewListDTO findPartialCarReviewOverviewList(final Long id, final Integer isPurchased, final List<Integer> extraOptionIds) {
        String sql = "WITH RelevantReviews AS (" +
                "SELECT car_review_id " +
                "FROM option_review " +
                "WHERE extra_option_id IN (:extraOptionIds) " +
                "GROUP BY car_review_id " +
                "HAVING COUNT(DISTINCT extra_option_id) = :size " +
                ") " +

                "SELECT " +
                "cr.id AS car_review_id, " +
                "t.name AS trim_name, " +
                "e.name AS engine_name, " +
                "d.name AS drive_name, " +
                "b.name AS body_name, " +
                "exc.name AS exterior_color_name, " +
                "inc.name AS interior_color_name, " +
                "cr.created_at, " +
                "eo.id AS extra_option_id, " +
                "eo.name AS extra_option_name, " +
                "tt.id AS total_tag_id, " +
                "tt.name AS total_tag_name " +

                "FROM car_review cr " +
                "JOIN model m ON cr.model_id = m.id " +
                "JOIN trim t ON m.trim_id = t.id AND t.car_id = :car_id " +
                "JOIN engine e ON m.engine_id = e.id " +
                "JOIN body b ON m.body_id = b.id " +
                "JOIN drive d ON m.drive_id = d.id " +
                "JOIN ex_color exc ON cr.ex_color_id = exc.id " +
                "JOIN in_color inc ON cr.in_color_id = inc.id " +
                "LEFT JOIN option_review orv ON cr.id = orv.car_review_id " +
                "LEFT JOIN extra_option eo ON orv.extra_option_id = eo.id " +
                "LEFT JOIN total_tag_car_review ttcr ON cr.id = ttcr.car_review_id " +
                "LEFT JOIN total_tag tt ON ttcr.total_tag_id = tt.id " +

                "WHERE cr.id IN (SELECT car_review_id FROM RelevantReviews) " +
                "AND cr.is_purchase = :isPurchase " +
                "ORDER BY cr.created_at DESC " +
                "LIMIT 100;";


        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("car_id", id);
        params.addValue("isPurchase", isPurchased);
        params.addValue("extraOptionIds", extraOptionIds);
        params.addValue("size", extraOptionIds.size());

        return namedParameterJdbcTemplate.query(sql, params, carReviewOverviewExtractor);
    }

    @Override
    public CarReviewOverviewListDTO findAllCarReviewOverviewList(final Long id, final List<Integer> extraOptionIds) {
        String sql = "WITH RelevantReviews AS (" +
                "SELECT car_review_id " +
                "FROM option_review " +
                "WHERE extra_option_id IN (:extraOptionIds) " +
                "GROUP BY car_review_id " +
                "HAVING COUNT(DISTINCT extra_option_id) = :size " +
                ") " +

                "SELECT " +
                "cr.id AS car_review_id, " +
                "t.name AS trim_name, " +
                "e.name AS engine_name, " +
                "d.name AS drive_name, " +
                "b.name AS body_name, " +
                "exc.name AS exterior_color_name, " +
                "inc.name AS interior_color_name, " +
                "cr.created_at, " +
                "eo.id AS extra_option_id, " +
                "eo.name AS extra_option_name, " +
                "tt.id AS total_tag_id, " +
                "tt.name AS total_tag_name " +

                "FROM car_review cr " +
                "JOIN model m ON cr.model_id = m.id " +
                "JOIN trim t ON m.trim_id = t.id AND t.car_id = :car_id " +
                "JOIN engine e ON m.engine_id = e.id " +
                "JOIN body b ON m.body_id = b.id " +
                "JOIN drive d ON m.drive_id = d.id " +
                "JOIN ex_color exc ON cr.ex_color_id = exc.id " +
                "JOIN in_color inc ON cr.in_color_id = inc.id " +
                "LEFT JOIN option_review orv ON cr.id = orv.car_review_id " +
                "LEFT JOIN extra_option eo ON orv.extra_option_id = eo.id " +
                "LEFT JOIN total_tag_car_review ttcr ON cr.id = ttcr.car_review_id " +
                "LEFT JOIN total_tag tt ON ttcr.total_tag_id = tt.id " +

                "WHERE cr.id IN (SELECT car_review_id FROM RelevantReviews) " +
                "ORDER BY cr.created_at DESC " +
                "LIMIT 100;";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("car_id", id);
        params.addValue("extraOptionIds", extraOptionIds);
        params.addValue("size", extraOptionIds.size());


        return namedParameterJdbcTemplate.query(sql, params, carReviewOverviewExtractor);
    }

    private static class CarTrimsExtractor implements ResultSetExtractor<CarTrimsDTO> {

        @Override
        public CarTrimsDTO extractData(ResultSet rs) throws SQLException {
            Set<TrimInfoDTO> trimInfoDTOs = new HashSet<>();
            Set<BodyInfoDTO> bodyInfoDTOs = new HashSet<>();
            Set<DriveInfoDTO> driveInfoDTOs = new HashSet<>();
            Set<EngineInfoDTO> engineInfoDTOs = new HashSet<>();

            while (rs.next()) {
                TrimInfoDTO trim = TrimInfoDTO.builder()
                        .id(rs.getLong("trim_id"))
                        .name(rs.getString("trim_name"))
                        .image(rs.getString("trim_image"))
                        .price(rs.getDouble("trim_price"))
                        .build();
                trimInfoDTOs.add(trim);

                BodyInfoDTO body = BodyInfoDTO.builder()
                        .id(rs.getLong("body_id"))
                        .name(rs.getString("body_name"))
                        .image(rs.getString("body_image"))
                        .description(rs.getString("body_description"))
                        .price(rs.getDouble("body_price"))
                        .build();
                bodyInfoDTOs.add(body);

                DriveInfoDTO drive = DriveInfoDTO.builder()
                        .id(rs.getLong("drive_id"))
                        .name(rs.getString("drive_name"))
                        .image(rs.getString("drive_image"))
                        .description(rs.getString("drive_description"))
                        .price(rs.getDouble("drive_price"))
                        .build();
                driveInfoDTOs.add(drive);

                EngineInfoDTO engine = EngineInfoDTO.builder()
                        .id(rs.getLong("engine_id"))
                        .name(rs.getString("engine_name"))
                        .image(rs.getString("engine_image"))
                        .description(rs.getString("engine_description"))
                        .max_output(rs.getString("engine_max_output"))
                        .max_tok(rs.getString("engine_max_tok"))
                        .price(rs.getDouble("engine_price"))
                        .build();
                engineInfoDTOs.add(engine);
            }

            return CarTrimsDTO.builder()
                    .trimInfoDTOs(trimInfoDTOs)
                    .bodyInfoDTOs(bodyInfoDTOs)
                    .engineInfoDTOs(engineInfoDTOs)
                    .driveInfoDTOs(driveInfoDTOs)
                    .build();
        }
    }

    public static class ExtraOptionNameExtractor implements ResultSetExtractor<CarExtraOptionNameDTO> {

        @Override
        public CarExtraOptionNameDTO extractData(ResultSet rs) throws SQLException {
            List<ExtraOptionNameDTO> optionNames = new ArrayList<>();
            while (rs.next()) {
                ExtraOptionNameDTO extraOptionNameDTO = ExtraOptionNameDTO.builder()
                        .id(rs.getLong("id"))
                        .name(rs.getString("name"))
                        .build();

                optionNames.add(extraOptionNameDTO);
            }
            optionNames.sort(Comparator.comparingLong(ExtraOptionNameDTO::getId));
            return CarExtraOptionNameDTO.builder()
                    .extraOptionNameDTOs(optionNames)
                    .build();
        }
    }

    public static class CarReviewOverviewExtractor implements ResultSetExtractor<CarReviewOverviewListDTO> {

        @Override
        public CarReviewOverviewListDTO extractData(ResultSet rs) throws SQLException {
            Map<Long, CarReviewOverviewDTO> map = new HashMap<>();

            while (rs.next()) {
                Long id = rs.getLong("car_review_id");
                CarReviewOverviewDTO overviewDTO = map.get(id);

                if (overviewDTO == null) {
                    overviewDTO = CarReviewOverviewDTO.builder()
                            .car_review_id(id)
                            .trim_name(rs.getString("trim_name"))
                            .engine_name(rs.getString("engine_name"))
                            .drive_name(rs.getString("drive_name"))
                            .body_name(rs.getString("body_name"))
                            .exterior_color_name(rs.getString("exterior_color_name"))
                            .interior_color_name(rs.getString("interior_color_name"))
                            .created_at(rs.getTimestamp("created_at"))
                            .extraOptionNameDTOs(new HashSet<>())
                            .totalTagInfoDTOs(new HashSet<>())
                            .build();

                    map.put(id, overviewDTO);
                }

                ExtraOptionNameDTO extraOptionNameDTO = ExtraOptionNameDTO.builder()
                        .id(rs.getLong("extra_option_id"))
                        .name(rs.getString("extra_option_name"))
                        .build();
                overviewDTO.getExtraOptionNameDTOs().add(extraOptionNameDTO);

                System.out.println(extraOptionNameDTO.getName());

                TotalTagInfoDTO totalTagInfoDTO = TotalTagInfoDTO.builder()
                        .id(rs.getLong("total_tag_id"))
                        .name(rs.getString("total_tag_name"))
                        .build();

                System.out.println(totalTagInfoDTO.getName());

                overviewDTO.getTotalTagInfoDTOs().add(totalTagInfoDTO);
            }

            return CarReviewOverviewListDTO.builder()
                    .carReviewOverviewDTOs(new ArrayList<>(map.values()))
                    .build();
        }
    }
}
