package A4.FourEver.domain.unit.car.repository;

import A4.FourEver.domain.car.dto.CarTrimsDTO;
import A4.FourEver.domain.car.repository.CarRepository;
import A4.FourEver.domain.car.repository.CarRepositoryDefaultImpl;
import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import A4.FourEver.domain.unit.UnitTestBase;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.Set;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.BDDMockito.given;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;

class CarRepositoryDefaultImplTest extends UnitTestBase {

    private CarRepository carRepository;
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @BeforeEach
    void setup() {
        namedParameterJdbcTemplate = mock(NamedParameterJdbcTemplate.class);
        carRepository = new CarRepositoryDefaultImpl(namedParameterJdbcTemplate);
    }

    @Test
    void findCarTrimsById() {
        // Given
        TrimInfoDTO trimInfo = TrimInfoDTO.builder().id(1L).name("TrimName").image("TrimImage").price(10000.0).build();
        TrimInfoDTO trimInfo2 = TrimInfoDTO.builder().id(2L).name("TrimName").image("TrimImage").price(10000.0).build();
        BodyInfoDTO bodyInfo = BodyInfoDTO.builder().id(1L).name("BodyName").image("BodyImage").description("BodyDesc").price(20000.0).build();
        BodyInfoDTO bodyInfo2 = BodyInfoDTO.builder().id(2L).name("BodyName").image("BodyImage").description("BodyDesc").price(20000.0).build();
        DriveInfoDTO driveInfo = DriveInfoDTO.builder().id(1L).name("DriveName").image("DriveImage").description("DriveDesc").price(30000.0).build();
        DriveInfoDTO driveInfo2 = DriveInfoDTO.builder().id(2L).name("DriveName").image("DriveImage").description("DriveDesc").price(30000.0).build();
        EngineInfoDTO engineInfo = EngineInfoDTO.builder().id(1L).name("EngineName").image("EngineImage").description("EngineDesc").max_output("150hp").max_tok("200Nm").price(40000.0).build();
        EngineInfoDTO engineInfo2 = EngineInfoDTO.builder().id(2L).name("EngineName").image("EngineImage").description("EngineDesc").max_output("150hp").max_tok("200Nm").price(40000.0).build();

        CarTrimsDTO carTrimsDTO = CarTrimsDTO.builder()
                .trimInfoDTOs(Set.of(trimInfo, trimInfo2))
                .bodyInfoDTOs(Set.of(bodyInfo, bodyInfo2))
                .driveInfoDTOs(Set.of(driveInfo, driveInfo2))
                .engineInfoDTOs(Set.of(engineInfo, engineInfo2))
                .build();

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

        given(namedParameterJdbcTemplate.query(
                eq(sql),
                any(MapSqlParameterSource.class),
                any(ResultSetExtractor.class)))
                .willReturn(carTrimsDTO);

        // When
        CarTrimsDTO result = carRepository.findCarTrimsById(1L);

        // Then
        softAssertions.assertThat(result).usingRecursiveComparison()
                .isEqualTo(carTrimsDTO);
    }
}
