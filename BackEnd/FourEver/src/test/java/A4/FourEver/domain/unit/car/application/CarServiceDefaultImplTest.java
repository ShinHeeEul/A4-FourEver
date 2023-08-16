package A4.FourEver.domain.unit.car.application;

import A4.FourEver.domain.car.application.CarService;
import A4.FourEver.domain.car.application.CarServiceDefaultImpl;
import A4.FourEver.domain.car.dto.CarMapper;
import A4.FourEver.domain.car.dto.CarTrimsDTO;
import A4.FourEver.domain.car.dto.CarTrimsSortedDTO;
import A4.FourEver.domain.car.repository.CarRepository;
import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import A4.FourEver.domain.unit.UnitTestBase;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Collections;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;

class CarServiceDefaultImplTest extends UnitTestBase {

    private CarRepository carRepository;
    private CarMapper carMapper;
    private CarService carService;

    @BeforeEach
    void setUp() {
        carRepository = mock(CarRepository.class);
        carMapper = mock(CarMapper.class);
        carService = new CarServiceDefaultImpl(carRepository, carMapper);
    }

    @Test
    @DisplayName("차 아이디가 주어졌을 때 정상적으로 차의 트림에 속한 정보들을 반환해야 한다.")
    void getCarTrimsById() {
        // Given
        TrimInfoDTO trimInfo = TrimInfoDTO.builder().id(1L).name("TrimName").image("TrimImage").price(10000.0).build();
        BodyInfoDTO bodyInfo = BodyInfoDTO.builder().id(1L).name("BodyName").image("BodyImage").description("BodyDesc").price(20000.0).build();
        DriveInfoDTO driveInfo = DriveInfoDTO.builder().id(1L).name("DriveName").image("DriveImage").description("DriveDesc").price(30000.0).build();
        EngineInfoDTO engineInfo = EngineInfoDTO.builder().id(1L).name("EngineName").image("EngineImage").description("EngineDesc").max_output("150hp").max_tok("200Nm").price(40000.0).build();

        CarTrimsDTO carTrimsDTO = CarTrimsDTO.builder()
                .trimInfoDTOs(Collections.singleton(trimInfo))
                .bodyInfoDTOs(Collections.singleton(bodyInfo))
                .driveInfoDTOs(Collections.singleton(driveInfo))
                .engineInfoDTOs(Collections.singleton(engineInfo))
                .build();

        CarTrimsSortedDTO carTrimsSortedDTO = CarTrimsSortedDTO.builder()
                .trimInfoDTOs(Arrays.asList(trimInfo))
                .bodyInfoDTOs(Arrays.asList(bodyInfo))
                .driveInfoDTOs(Arrays.asList(driveInfo))
                .engineInfoDTOs(Arrays.asList(engineInfo))
                .build();

        given(carRepository.findCarTrimsById(1L)).willReturn(carTrimsDTO);
        given(carMapper.convertToSortedDTO(carTrimsDTO)).willReturn(carTrimsSortedDTO);

        // When
        CarTrimsSortedDTO result = carService.getCarTrimsById(1L);

        // Then
        softAssertions.assertThat(result)
                .usingRecursiveComparison()
                .isEqualTo(carTrimsSortedDTO);
    }
}
