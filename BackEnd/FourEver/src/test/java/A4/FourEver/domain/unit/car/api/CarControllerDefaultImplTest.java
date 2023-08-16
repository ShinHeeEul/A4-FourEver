package A4.FourEver.domain.unit.car.api;

import A4.FourEver.domain.car.api.CarController;
import A4.FourEver.domain.car.api.CarControllerDefaultImpl;
import A4.FourEver.domain.car.application.CarService;
import A4.FourEver.domain.car.application.CarServiceDefaultImpl;
import A4.FourEver.domain.car.dto.CarTrimsSortedDTO;
import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class CarControllerDefaultImplTest {

    private MockMvc mockMvc;
    private CarService carService;
    private CarController carController;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    void setup() {
        carService = mock(CarServiceDefaultImpl.class);
        carController = new CarControllerDefaultImpl(carService);
        mockMvc = MockMvcBuilders.standaloneSetup(carController).build();
    }

    @Test
    void getCarTrimsById() throws Exception {
        // Given
        Long carId = 1L;
        TrimInfoDTO trimInfo = TrimInfoDTO.builder().id(1L).name("TrimName").image("TrimImage").price(10000.0).build();
        TrimInfoDTO trimInfo2 = TrimInfoDTO.builder().id(2L).name("TrimName").image("TrimImage").price(10000.0).build();
        BodyInfoDTO bodyInfo = BodyInfoDTO.builder().id(1L).name("BodyName").image("BodyImage").description("BodyDesc").price(20000.0).build();
        BodyInfoDTO bodyInfo2 = BodyInfoDTO.builder().id(2L).name("BodyName").image("BodyImage").description("BodyDesc").price(20000.0).build();
        DriveInfoDTO driveInfo = DriveInfoDTO.builder().id(1L).name("DriveName").image("DriveImage").description("DriveDesc").price(30000.0).build();
        DriveInfoDTO driveInfo2 = DriveInfoDTO.builder().id(2L).name("DriveName").image("DriveImage").description("DriveDesc").price(30000.0).build();
        EngineInfoDTO engineInfo = EngineInfoDTO.builder().id(1L).name("EngineName").image("EngineImage").description("EngineDesc").max_output("150hp").max_tok("200Nm").price(40000.0).build();
        EngineInfoDTO engineInfo2 = EngineInfoDTO.builder().id(2L).name("EngineName").image("EngineImage").description("EngineDesc").max_output("150hp").max_tok("200Nm").price(40000.0).build();

        List<TrimInfoDTO> trimInfoDTOList = Stream.of(trimInfo, trimInfo2)
                .sorted(Comparator.comparingLong(TrimInfoDTO::getId))
                .collect(Collectors.toList());

        List<BodyInfoDTO> bodyInfoDTOList = Stream.of(bodyInfo, bodyInfo2)
                .sorted(Comparator.comparingLong(BodyInfoDTO::getId))
                .collect(Collectors.toList());

        List<DriveInfoDTO> driveInfoDTOList = Stream.of(driveInfo, driveInfo2)
                .sorted(Comparator.comparingLong(DriveInfoDTO::getId))
                .collect(Collectors.toList());

        List<EngineInfoDTO> engineInfoDTOList = Stream.of(engineInfo, engineInfo2)
                .sorted(Comparator.comparingLong(EngineInfoDTO::getId))
                .collect(Collectors.toList());

        CarTrimsSortedDTO carTrimsSortedDTO = CarTrimsSortedDTO.builder()
                .trimInfoDTOs(trimInfoDTOList)
                .bodyInfoDTOs(bodyInfoDTOList)
                .driveInfoDTOs(driveInfoDTOList)
                .engineInfoDTOs(engineInfoDTOList)
                .build();

        given(carService.getCarTrimsById(carId))
                .willReturn(carTrimsSortedDTO);

        // When && Then
        mockMvc.perform(get("/cars/{id}/trim", carId))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(carTrimsSortedDTO)));
    }
}