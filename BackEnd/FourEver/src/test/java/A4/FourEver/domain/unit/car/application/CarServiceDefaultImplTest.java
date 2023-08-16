package A4.FourEver.domain.unit.car.application;

import A4.FourEver.domain.car.api.CarControllerDefaultImpl;
import A4.FourEver.domain.car.application.CarService;
import A4.FourEver.domain.car.dto.CarTrimsSortedDTO;
import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import org.junit.jupiter.api.Test;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.mockito.BDDMockito.given;


@WebMvcTest(CarControllerDefaultImpl.class)
class CarServiceDefaultImplTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CarService carService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void getCarTrimsById() throws Exception {
        // Given
        TrimInfoDTO trimInfo = TrimInfoDTO.builder().id(1L).name("TrimName").image("TrimImage").price(10000.0).build();
        BodyInfoDTO bodyInfo = BodyInfoDTO.builder().id(1L).name("BodyName").image("BodyImage").description("BodyDesc").price(20000.0).build();
        DriveInfoDTO driveInfo = DriveInfoDTO.builder().id(1L).name("DriveName").image("DriveImage").description("DriveDesc").price(30000.0).build();
        EngineInfoDTO engineInfo = EngineInfoDTO.builder().id(1L).name("EngineName").image("EngineImage").description("EngineDesc").max_output("150hp").max_tok("200Nm").price(40000.0).build();

        CarTrimsSortedDTO carTrimsSortedDTO = CarTrimsSortedDTO.builder()
                .trimInfoDTOs(Arrays.asList(trimInfo))
                .bodyInfoDTOs(Arrays.asList(bodyInfo))
                .driveInfoDTOs(Arrays.asList(driveInfo))
                .engineInfoDTOs(Arrays.asList(engineInfo))
                .build();

        given(carService.getCarTrimsById(1L)).willReturn(carTrimsSortedDTO);

        // When & Then
        mockMvc.perform(get("/cars/1/trim"))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(carTrimsSortedDTO)))
                .andDo(print());
    }
}
