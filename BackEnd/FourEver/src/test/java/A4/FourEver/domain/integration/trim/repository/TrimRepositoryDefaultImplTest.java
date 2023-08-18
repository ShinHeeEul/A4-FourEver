package A4.FourEver.domain.integration.trim.repository;

import A4.FourEver.domain.integration.IntegrationBaseTest;

class TrimRepositoryDefaultImplTest extends IntegrationBaseTest {
//
//    private final TrimRepository trimRepository;
//
//    @Autowired
//    TrimRepositoryDefaultImplTest(TrimRepository trimRepository) {
//        this.trimRepository = trimRepository;
//    }
//
//    @Test
//    @DisplayName("(통합) 트림의 아이디로 내장 색상 정보가 성공적으로 조회 되어야한다.")
//    void findTrimInColorsAndTagsById() {
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
//        InColorInfoDTO inColorInfoInstance1 = InColorInfoDTO.builder()
//                .id(1L)
//                .name("colorName1")
//                .color_image("colorImageURL1")
//                .in_image("inImageURL1")
//                .inColorTagInfoDTOS(Set.of(tagInstance1, tagInstance2))
//                .build();
//
//        InColorInfoDTO inColorInfoInstance2 = InColorInfoDTO.builder()
//                .id(2L)
//                .name("colorName2")
//                .color_image("colorImageURL2")
//                .in_image("inImageURL2")
//                .inColorTagInfoDTOS(Set.of(tagInstance1, tagInstance2))
//                .build();
//
//        Set<InColorInfoDTO> inColorInfoDTOs = Set.of(inColorInfoInstance1, inColorInfoInstance2);
//
//        // When
//        Set<InColorInfoDTO> result = trimRepository.findTrimInColorsAndTagsById(1L);
//
//        // Then
//        softAssertions.assertThat(result)
//                .usingRecursiveComparison()
//                .isEqualTo(inColorInfoDTOs);
//    }
//
//    @Test
//    @DisplayName("(통합) 트림의 아이디로 외장 색상 정보가 성공적으로 조회 되어야한다.")
//    void findTrimExColorsAndTagsById() {
//        // Given
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
//        ExColorInfoDTO exColorInfoInstance1 = ExColorInfoDTO.builder()
//                .id(1L)
//                .name("exColorName1")
//                .color_image("exColorImageURL1")
//                .rotation_image("rotationImageURL1")
//                .price(1000.50)
//                .exColorTagInfoDTOS(Set.of(exTagInstance1, exTagInstance2))
//                .build();
//
//        ExColorInfoDTO exColorInfoInstance2 = ExColorInfoDTO.builder()
//                .id(2L)
//                .name("exColorName2")
//                .color_image("exColorImageURL2")
//                .rotation_image("rotationImageURL2")
//                .price(2000.75)
//                .exColorTagInfoDTOS(Set.of(exTagInstance1, exTagInstance2))
//                .build();
//
//        Set<ExColorInfoDTO> exColorInfoDTOs = Set.of(exColorInfoInstance1, exColorInfoInstance2);
//
//        // When
//        Set<ExColorInfoDTO> result = trimRepository.findTrimExColorsAndTagsById(1L);
//
//        // Then
//        softAssertions.assertThat(result)
//                .usingRecursiveComparison()
//                .isEqualTo(exColorInfoDTOs);
//    }
}
