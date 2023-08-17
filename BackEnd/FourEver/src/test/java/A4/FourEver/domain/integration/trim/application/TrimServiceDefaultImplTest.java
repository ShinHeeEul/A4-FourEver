package A4.FourEver.domain.integration.trim.application;

import A4.FourEver.domain.integration.IntegrationBaseTest;

class TrimServiceDefaultImplTest extends IntegrationBaseTest {
//
//    private final TrimService trimService;
//
//    @Autowired
//    TrimServiceDefaultImplTest(TrimService trimService) {
//        this.trimService = trimService;
//    }
//
//    @Test
//    @DisplayName("(통합) TrimService 에서 트림의 아이디로 내외장 생상 정보가 성공적으로 조회 되어야한다.")
//    void getTrimColorsAndTagsById() {
//        // Given
//        InColorTagInfoDTO tagInstance1 = InColorTagInfoDTO.builder()
//                .id(1L)
//                .name("tagName1")
//                .count(10L)
//                .build();
//
//        InColorTagInfoDTO tagInstance2 = InColorTagInfoDTO.builder()
//                .id(2L)
//                .name("tagName2")
//                .count(20L)
//                .build();
//
//        ExColorTagInfoDTO exTagInstance1 = ExColorTagInfoDTO.builder()
//                .id(1L)
//                .name("exTagName1")
//                .count(10L)
//                .build();
//
//        ExColorTagInfoDTO exTagInstance2 = ExColorTagInfoDTO.builder()
//                .id(2L)
//                .name("exTagName2")
//                .count(20L)
//                .build();
//
//        List<ExColorTagInfoDTO> exColorTagInfoDTOList = Stream.of(exTagInstance1, exTagInstance2)
//                .sorted(Comparator.comparingLong(ExColorTagInfoDTO::getId))
//                .collect(Collectors.toList());
//
//        List<InColorTagInfoDTO> inColorTagInfoDTOList = Stream.of(tagInstance1, tagInstance2)
//                .sorted(Comparator.comparingLong(InColorTagInfoDTO::getId))
//                .collect(Collectors.toList());
//
//        ExColorInfoSortedDTO exColorInfoSortedDTO2 = ExColorInfoSortedDTO.builder()
//                .id(2L)
//                .name("exColorName2")
//                .color_image("exColorImageURL2")
//                .rotation_image("rotationImageURL2")
//                .price(2000.75)
//                .exColorTagInfoDTOS(exColorTagInfoDTOList)
//                .build();
//
//        ExColorInfoSortedDTO exColorInfoSortedDTO1 = ExColorInfoSortedDTO.builder()
//                .id(1L)
//                .name("exColorName1")
//                .color_image("exColorImageURL1")
//                .rotation_image("rotationImageURL1")
//                .price(1000.50)
//                .exColorTagInfoDTOS(exColorTagInfoDTOList)
//                .build();
//
//        InColorInfoSortedDTO inColorInfoSortedDTO1 = InColorInfoSortedDTO.builder()
//                .id(1L)
//                .name("colorName1")
//                .color_image("colorImageURL1")
//                .in_image("inImageURL1")
//                .inColorTagInfoDTOS(inColorTagInfoDTOList)
//                .build();
//
//        InColorInfoSortedDTO inColorInfoSortedDTO2 = InColorInfoSortedDTO.builder()
//                .id(2L)
//                .name("colorName2")
//                .color_image("colorImageURL2")
//                .in_image("inImageURL2")
//                .inColorTagInfoDTOS(inColorTagInfoDTOList)
//                .build();
//
//        List<ExColorInfoSortedDTO> exColorInfoDTOList = Stream.of(exColorInfoSortedDTO1, exColorInfoSortedDTO2)
//                .sorted(Comparator.comparingLong(ExColorInfoSortedDTO::getId))
//                .collect(Collectors.toList());
//
//        List<InColorInfoSortedDTO> inColorInfoDTOList = Stream.of(inColorInfoSortedDTO1, inColorInfoSortedDTO2)
//                .sorted(Comparator.comparingLong(InColorInfoSortedDTO::getId))
//                .collect(Collectors.toList());
//
//        TrimColorsAndTagsDTO trimColorsAndTagsDTO = TrimColorsAndTagsDTO.builder()
//                .exColors(exColorInfoDTOList)
//                .inColors(inColorInfoDTOList)
//                .build();
//
//        // When
//        TrimColorsAndTagsDTO result = trimService.getTrimColorsAndTagsById(1L);
//
//        // Then
//        softAssertions.assertThat(result)
//                .usingRecursiveComparison()
//                .isEqualTo(trimColorsAndTagsDTO);
//    }
}
