package A4.FourEver.domain.user.repository;

import A4.FourEver.domain.carReview.dto.CarReviewOverviewDTO;
import A4.FourEver.domain.color.exColor.dto.ExColorIdDTO;
import A4.FourEver.domain.color.exColor.dto.ExColorNameAndImageDTO;
import A4.FourEver.domain.color.inColor.dto.InColorIdDTO;
import A4.FourEver.domain.color.inColor.dto.InColorNameDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingOverviewDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionNameAndImageDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionNameDTO;
import A4.FourEver.domain.tag.totalTag.dto.TotalTagInfoDTO;
import A4.FourEver.domain.trim.body.dto.BodyNameDTO;
import A4.FourEver.domain.trim.drive.dto.DriveNameDTO;
import A4.FourEver.domain.trim.engine.dto.EngineNameDTO;
import A4.FourEver.domain.trim.trim.dto.TrimNameDTO;
import A4.FourEver.domain.user.domain.User;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;


@Repository
public class UserRepositoryDefaultImpl implements UserRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private static final UserExtractor userExtractor = new UserExtractor();
    private static final CarReviewOverviewExtractor carReviewOverviewExtractor = new CarReviewOverviewExtractor();
    private static final MyChivingOverviewExtractor myChivingOverviewExtractor = new MyChivingOverviewExtractor();


    public UserRepositoryDefaultImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    @Override
    public User findUserByEmail(final String email) {
        String sql = "select * from users where email = :email";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("email", email);

        try {
            return namedParameterJdbcTemplate.query(sql, params, userExtractor);
        } catch (org.springframework.dao.EmptyResultDataAccessException ex) {
            return null; // 데이터가 없을 경우 null 반환
        }
    }

    @Override
    public void saveUser(final String email, final String password) {
        String sql = "insert into users(email, password) values (:email, :password)";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("email", email);
        params.addValue("password", password);

        namedParameterJdbcTemplate.update(sql, params);
    }

    @Override
    public void saveUserCarReviewById(Long userId, Long carReviewId) {
        String sql = "insert ignore into users_car_review(user_id, car_review_id) values (:userId, :carReviewId)";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("userId", userId);
        params.addValue("carReviewId", carReviewId);

        namedParameterJdbcTemplate.update(sql, params);
    }

    @Override
    public void removeUserCarReviewById(Long userId, Long carReviewId) {
        String sql = "delete from users_car_review where user_id = :userId AND car_review_id = :carReviewId";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("userId", userId);
        params.addValue("carReviewId", carReviewId);

        namedParameterJdbcTemplate.update(sql, params);
    }

    @Override
    public Set<MyChivingOverviewDTO> findMyChivingById(final Long userId) {
        String sql = "SELECT " +
                "mc.id, " +
                "mc.is_end, " +
                "t.image AS image, " +
                "mc.updated_at, " +
                "c.name AS car_name, " +
                "t.id AS trim_id, " +
                "t.name AS trim_name, " +
                "e.id AS engine_id, " +
                "e.name AS engine_name, " +
                "d.id AS drive_id, " +
                "d.name AS drive_name, " +
                "b.id AS body_id, " +
                "b.name AS body_name, " +
                "eo.id AS extra_option_id, " +
                "eo.name AS extra_option_name, " +
                "eo.image AS extra_option_image, " +
                "inc.id AS interior_id, " +
                "exc.id AS exterior_id " +

                "FROM mychiving mc " +
                "JOIN model m ON mc.model_id = m.id " +
                "LEFT JOIN trim t ON m.trim_id = t.id " +
                "LEFT JOIN engine e ON m.engine_id = e.id " +
                "LEFT JOIN body b ON m.body_id = b.id " +
                "LEFT JOIN drive d ON m.drive_id = d.id " +
                "LEFT JOIN car c ON t.car_id = c.id " +
                "LEFT JOIN ex_color exc ON mc.ex_color_id = exc.id " +
                "LEFT JOIN in_color inc ON mc.in_color_id = inc.id " +
                "LEFT JOIN mychiving_extra_option meo ON mc.id = meo.mychiving_id " +
                "LEFT JOIN extra_option eo ON meo.extra_option_id = eo.id " +
                "LEFT JOIN users u ON mc.user_id = u.id " +

                "WHERE u.id = :userId ";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("userId", userId);

        return namedParameterJdbcTemplate.query(sql, params, myChivingOverviewExtractor);
    }

    @Override
    public Set<CarReviewOverviewDTO> findCarReviewById(final Long userId) {
        String sql = "SELECT " +
                "cr.id, " +
                "cr.is_purchased, " +
                "cr.created_at, " +
                "c.name AS car_name, " +
                "t.name AS trim_name, " +
                "e.name AS engine_name, " +
                "d.name AS drive_name, " +
                "b.name AS body_name, " +
                "exc.name AS exterior_color_name, " +
                "inc.name AS interior_color_name, " +
                "eo.id AS extra_option_id, " +
                "eo.name AS extra_option_name, " +
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
                "LEFT JOIN users_car_review ucr ON cr.id = ucr.car_review_id " +
                "LEFT JOIN users u ON ucr.user_id = u.id " +

                "WHERE u.id = :userId ";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("userId", userId);

        return namedParameterJdbcTemplate.query(sql, params, carReviewOverviewExtractor);
    }

    private static class UserExtractor implements ResultSetExtractor<User> {

        @Override
        public User extractData(ResultSet rs) throws SQLException, DataAccessException {

            User user = null;
            while(rs.next()) {
                user = User.builder()
                        .id(rs.getLong("id"))
                        .email(rs.getString("email"))
                        .password(rs.getString("password"))
                        .build();
            }
            return user;
        }
    }

    private static class MyChivingOverviewExtractor implements ResultSetExtractor<Set<MyChivingOverviewDTO>> {

        @Override
        public Set<MyChivingOverviewDTO> extractData(ResultSet rs) throws SQLException {
            Map<Long, MyChivingOverviewDTO> map = new HashMap<>();

            while (rs.next()) {
                Long id = rs.getLong("id");
                MyChivingOverviewDTO overviewDTO = map.get(id);

                if (overviewDTO == null) {
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

                    ExColorIdDTO exColorIdDTO = ExColorIdDTO.builder()
                            .id(rs.getLong("exterior_id"))
                            .build();

                    InColorIdDTO inColorNameDTO = InColorIdDTO.builder()
                            .id(rs.getLong("interior_id"))
                            .build();

                    overviewDTO = MyChivingOverviewDTO.builder()
                            .id(id)
                            .is_end(rs.getInt("is_end"))
                            .image(rs.getString("image"))
                            .updated_at(rs.getTimestamp("updated_at"))
                            .car_name(rs.getString("car_name"))
                            .trimNameDTO(trimNameDTO)
                            .engineNameDTO(engineNameDTO)
                            .bodyNameDTO(bodyNameDTO)
                            .driveNameDTO(driveNameDTO)
                            .exColorIdDTO(exColorIdDTO)
                            .inColorIdDTO(inColorNameDTO)
                            .extraOptionDTOs(new HashSet<>())
                            .build();

                    map.put(id, overviewDTO);
                }

                ExtraOptionNameAndImageDTO extraOptionNameDTO = ExtraOptionNameAndImageDTO.builder()
                        .id(rs.getLong("extra_option_id"))
                        .name(rs.getString("extra_option_name"))
                        .image(rs.getString("extra_option_image"))
                        .build();
                overviewDTO.getExtraOptionDTOs().add(extraOptionNameDTO);
            }

            return new HashSet<>(map.values());
        }
    }

    private static class CarReviewOverviewExtractor implements ResultSetExtractor<Set<CarReviewOverviewDTO>> {

        @Override
        public Set<CarReviewOverviewDTO> extractData(ResultSet rs) throws SQLException {
            Map<Long, CarReviewOverviewDTO> map = new HashMap<>();

            while (rs.next()) {
                Long id = rs.getLong("id");
                CarReviewOverviewDTO overviewDTO = map.get(id);

                if (overviewDTO == null) {
                    overviewDTO = CarReviewOverviewDTO.builder()
                            .id(id)
                            .is_purchased(rs.getInt("is_purchased"))
                            .car_name(rs.getString("car_name"))
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

                TotalTagInfoDTO totalTagInfoDTO = TotalTagInfoDTO.builder()
                        .id(rs.getLong("total_tag_id"))
                        .name(rs.getString("total_tag_name"))
                        .build();

                overviewDTO.getTotalTagInfoDTOs().add(totalTagInfoDTO);
            }

            return new HashSet<>(map.values());
        }
    }
}
