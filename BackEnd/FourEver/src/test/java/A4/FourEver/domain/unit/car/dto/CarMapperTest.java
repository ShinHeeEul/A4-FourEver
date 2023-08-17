package A4.FourEver.domain.unit.car.dto;

import A4.FourEver.domain.car.dto.CarMapper;
import A4.FourEver.domain.car.dto.CarTrimsDTO;
import A4.FourEver.domain.car.dto.CarTrimsSortedDTO;
import A4.FourEver.domain.trim.body.dto.BodyInfoDTO;
import A4.FourEver.domain.trim.drive.dto.DriveInfoDTO;
import A4.FourEver.domain.trim.engine.dto.EngineInfoDTO;
import A4.FourEver.domain.trim.trim.dto.TrimInfoDTO;
import A4.FourEver.domain.unit.UnitTestBase;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class CarMapperTest extends UnitTestBase {

    private final CarMapper carMapper = new CarMapper();

    @Test
    @DisplayName("(단위) carTrimsDTO 가 성공적으로 carTrimsSortedDTO 로 변환되어야 한다.")
    void convertToSortedDTO() {
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

        // When
        CarTrimsSortedDTO result = carMapper.convertToSortedDTO(carTrimsDTO);

        // Then
        softAssertions.assertThat(result)
                .usingRecursiveComparison()
                .isEqualTo(carTrimsSortedDTO);
    }
}
