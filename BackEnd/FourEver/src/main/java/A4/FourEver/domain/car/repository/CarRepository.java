package A4.FourEver.domain.car.repository;

import A4.FourEver.domain.car.domain.Car;
import A4.FourEver.domain.car.dto.CarConfigDTO;
import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.jdbc.core.ResultSetExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public interface CarRepository extends CrudRepository<Car, Long> {

    @Query(value = "SELECT * FROM car")
    List<Car> findAll();

    @Query(value = "SELECT DISTINCT " +
            "t.trim_id AS trim_id, " +
            "t.name AS trim_name, " +
            "t.image AS trim_image, " +
            "t.price AS trim_price, " +

            "b.body_id AS body_id, " +
            "b.name AS body_name, " +
            "b.image AS body_image, " +
            "b.description AS body_description, " +
            "b.price AS body_price, " +

            "d.drive_id AS drive_id, " +
            "d.name AS drive_name, " +
            "d.image AS drive_image, " +
            "d.description AS drive_description, " +
            "d.price AS drive_price, " +

            "e.engine_id AS engine_id, " +
            "e.name AS engine_name, " +
            "e.image AS engine_image, " +
            "e.description AS engine_description, " +
            "e.max_output AS engine_max_output, " +
            "e.max_tok AS engine_max_tok, " +
            "e.price AS engine_price " +

            "FROM car c " +
            "LEFT JOIN engine e ON c.car_id = e.car_id " +
            "LEFT JOIN body b ON c.car_id = b.car_id " +
            "LEFT JOIN trim t ON c.car_id = t.car_id " +
            "LEFT JOIN drive d ON c.car_id = d.car_id " +
            "WHERE c.car_id = :id"
            , resultSetExtractorClass = CarConfigExtractor.class
    )
    CarConfigDTO findCarConfigById(@Param("id") final Long id);

    class CarConfigExtractor implements ResultSetExtractor<CarConfigDTO> {

        @Override
        public CarConfigDTO extractData(ResultSet rs) throws SQLException {
            Set<TrimInfoDTO> trimInfoDTOs = new HashSet<>();
            Set<BodyInfoDTO> bodyInfoDTOs = new HashSet<>();
            Set<DriveInfoDTO> driveInfoDTOs = new HashSet<>();
            Set<EngineInfoDTO> engineInfoDTOs = new HashSet<>();

            while (rs.next()) {
                TrimInfoDTO trim = TrimInfoDTO.builder()
                        .trim_id(rs.getLong("trim_id"))
                        .name(rs.getString("trim_name"))
                        .image(rs.getString("trim_image"))
                        .price(rs.getDouble("trim_price"))
                        .build();
                trimInfoDTOs.add(trim);

                BodyInfoDTO body = BodyInfoDTO.builder()
                        .body_id(rs.getLong("body_id"))
                        .name(rs.getString("body_name"))
                        .image(rs.getString("body_image"))
                        .description(rs.getString("body_description"))
                        .price(rs.getDouble("body_price"))
                        .build();
                bodyInfoDTOs.add(body);

                DriveInfoDTO drive = DriveInfoDTO.builder()
                        .drive_id(rs.getLong("drive_id"))
                        .name(rs.getString("drive_name"))
                        .image(rs.getString("drive_image"))
                        .description(rs.getString("drive_description"))
                        .price(rs.getDouble("drive_price"))
                        .build();
                driveInfoDTOs.add(drive);

                EngineInfoDTO engine = EngineInfoDTO.builder()
                        .engine_id(rs.getLong("engine_id"))
                        .name(rs.getString("engine_name"))
                        .image(rs.getString("engine_image"))
                        .description(rs.getString("engine_description"))
                        .max_output(rs.getString("engine_max_output"))
                        .max_tok(rs.getString("engine_max_tok"))
                        .price(rs.getDouble("engine_price"))
                        .build();
                engineInfoDTOs.add(engine);
            }

            return CarConfigDTO.builder()
                    .trimInfoDTOs(trimInfoDTOs)
                    .bodyInfoDTOs(bodyInfoDTOs)
                    .driveInfoDTOs(driveInfoDTOs)
                    .engineInfoDTOs(engineInfoDTOs)
                    .build();
        }
    }
}
