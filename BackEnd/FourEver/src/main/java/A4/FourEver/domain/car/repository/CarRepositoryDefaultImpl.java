package A4.FourEver.domain.car.repository;

import A4.FourEver.domain.car.dto.CarTrimsDTO;
import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

@Repository
public class CarRepositoryDefaultImpl implements CarRepository{

    private final JdbcTemplate jdbcTemplate;

    private static final CarTrimsExtractor carTrimsExtractor = new CarTrimsExtractor();

    public CarRepositoryDefaultImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
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
                "WHERE c.id = ?";

        return jdbcTemplate.query(sql, carTrimsExtractor, id);
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
}
