package A4.FourEver.domain.integration.car.api;

import A4.FourEver.domain.integration.IntegrationBaseTest;

class CarControllerDefaultImplTest extends IntegrationBaseTest {
//
//    private final CarController carController;
//
//    @Autowired
//    CarControllerDefaultImplTest(CarController carController) {
//        this.carController = carController;
//    }
//
//    @Test
//    @DisplayName("(통합) CarController 에서 차량의 아이디로 트림 정보가 성공적으로 조회 되어야한다.")
//    void getCarTrimsById() {
//        // Given
//        Long carId = 1L;
//        TrimInfoDTO trimInfo = TrimInfoDTO.builder()
//                .id(1L)
//                .name("Le Blanc")
//                .image("http://hyundaimycar.store/rotation/abyss/1.png")
//                .price(41980000.0)
//                .build();
//
//        TrimInfoDTO trimInfo2 = TrimInfoDTO.builder()
//                .id(2L)
//                .name("Exclusive")
//                .image("http://hyundaimycar.store/rotation/abyss/1.png")
//                .price(38960000.0)
//                .build();
//
//        TrimInfoDTO trimInfo3 = TrimInfoDTO.builder()
//                .id(3L)
//                .name("Prestige")
//                .image("http://hyundaimycar.store/rotation/abyss/1.png")
//                .price(46240000.0)
//                .build();
//
//        TrimInfoDTO trimInfo4 = TrimInfoDTO.builder()
//                .id(4L)
//                .name("Calligraphy")
//                .image("http://hyundaimycar.store/rotation/abyss/1.png")
//                .price(51060000.0)
//                .build();
//
//        BodyInfoDTO bodyInfo = BodyInfoDTO.builder()
//                .id(1L)
//                .name("7인승")
//                .image("http://hyundaimycar.store/body/7.png")
//                .description("기존 8인승 시트(1열 2명, 2열 3명, 3열 3명)에서 2열 가운데 시트를 없애 2열 탑승객의 편의는 물론, 3열 탑승객의 승하차가 편리합니다")
//                .price(0.0)
//                .build();
//
//        BodyInfoDTO bodyInfo2 = BodyInfoDTO.builder()
//                .id(2L)
//                .name("8인승")
//                .image("http://hyundaimycar.store/body/8.png")
//                .description("1열 2명, 2열 3명, 3열 3명이 탑승할 수 있는 구조로, 많은 인원이 탑승할 수 있도록 배려하였습니다")
//                .price(0.0)
//                .build();
//
//        DriveInfoDTO driveInfo = DriveInfoDTO.builder()
//                .id(1L)
//                .name("2WD")
//                .image("http://hyundaimycar.store/drive/9.png")
//                .description("엔진에서 전달되는 동력이 전/후륜 바퀴 중 한쪽으로만 전달되어 차량을 움직이는 방식입니다. 차체가 가벼워 연료 효율이 높습니다")
//                .price(0.0)
//                .build();
//
//        DriveInfoDTO driveInfo2 = DriveInfoDTO.builder()
//                .id(2L)
//                .name("4WD")
//                .image("http://hyundaimycar.store/drive/10.png")
//                .description("전자식 상시 4륜 구동 시스템 입니다. 도로의 상황이나 주행 환경에 맞춰 전후륜 구동력을 자동배분하여 주행 안전성을 높여줍니다")
//                .price(2370000.0)
//                .build();
//
//        EngineInfoDTO engineInfo = EngineInfoDTO.builder()
//                .id(1L)
//                .name("디젤 2.2")
//                .image("http://hyundaimycar.store/engine/5.png")
//                .description("높은 토크로 파워풀한 드라이빙이 가능하며, 차급대비 연비 효율이 우수합니다")
//                .max_output("202/3,800PS/rpm")
//                .max_tok("45.0/1,750~2,750kgf-m/rpm")
//                .price(0.0)
//                .build();
//
//        EngineInfoDTO engineInfo2 = EngineInfoDTO.builder()
//                .id(2L)
//                .name("가솔린 3.8")
//                .image("http://hyundaimycar.store/engine/6.png")
//                .description("고마력의 우수한 가속 성능을 확보하여, 넉넉하고 안정감 있는 주행이 가능합니다\n엔진의 진동이 적어 편안하고 조용한 드라이빙 감성을 제공합니다")
//                .max_output("295/6,000PS/rpm")
//                .max_tok("36.2/5,200kgf-m/rpm")
//                .price(1480000.0)
//                .build();
//
//        List<TrimInfoDTO> trimInfoDTOList = Stream.of(trimInfo, trimInfo2, trimInfo3, trimInfo4)
//                .sorted(Comparator.comparingLong(TrimInfoDTO::getId))
//                .collect(Collectors.toList());
//
//        List<BodyInfoDTO> bodyInfoDTOList = Stream.of(bodyInfo, bodyInfo2)
//                .sorted(Comparator.comparingLong(BodyInfoDTO::getId))
//                .collect(Collectors.toList());
//
//        List<DriveInfoDTO> driveInfoDTOList = Stream.of(driveInfo, driveInfo2)
//                .sorted(Comparator.comparingLong(DriveInfoDTO::getId))
//                .collect(Collectors.toList());
//
//        List<EngineInfoDTO> engineInfoDTOList = Stream.of(engineInfo, engineInfo2)
//                .sorted(Comparator.comparingLong(EngineInfoDTO::getId))
//                .collect(Collectors.toList());
//
//        CarTrimsSortedDTO carTrimsSortedDTO = CarTrimsSortedDTO.builder()
//                .trimInfoDTOs(trimInfoDTOList)
//                .bodyInfoDTOs(bodyInfoDTOList)
//                .driveInfoDTOs(driveInfoDTOList)
//                .engineInfoDTOs(engineInfoDTOList)
//                .build();
//
//        // When
//        CarTrimsSortedDTO result = carController.getCarTrimsById(carId);
//
//        // Then
//        softAssertions.assertThat(result)
//                .usingRecursiveComparison()
//                .isEqualTo(carTrimsSortedDTO);
//    }
}
