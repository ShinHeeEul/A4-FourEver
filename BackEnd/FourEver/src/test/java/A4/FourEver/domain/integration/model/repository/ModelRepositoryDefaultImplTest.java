package A4.FourEver.domain.integration.model.repository;

import A4.FourEver.domain.integration.IntegrationBaseTest;

class ModelRepositoryDefaultImplTest extends IntegrationBaseTest {
//
//    private final ModelRepository modelRepository;
//
//    @Autowired
//    ModelRepositoryDefaultImplTest(ModelRepository modelRepository) {
//        this.modelRepository = modelRepository;
//    }
//
//    @Test
//    @DisplayName("(통합) ModelRepository 에서 트림, 구동방식 등의 아이디로 기본 품목 정보가 성공적으로 조회 되어야한다.")
//    void findModelDefaultOption() {
//        // Given
//        DefaultOptionInfoDTO defaultOptionInfoDTO1 = DefaultOptionInfoDTO.builder()
//                .id(1L)
//                .name("DefaultOptionName1")
//                .description("DefaultOptionDescription1")
//                .category("DefaultCategory1")
//                .image("DefaultImageURL1")
//                .build();
//
//        DefaultOptionInfoDTO defaultOptionInfoDTO2 = DefaultOptionInfoDTO.builder()
//                .id(2L)
//                .name("DefaultOptionName2")
//                .description("DefaultOptionDescription2")
//                .category("DefaultCategory2")
//                .image("DefaultImageURL2")
//                .build();
//
//        Set<DefaultOptionInfoDTO> defaultOptionInfoDTOs = Set.of(defaultOptionInfoDTO1, defaultOptionInfoDTO2);
//
//        // When
//        Set<DefaultOptionInfoDTO> result = modelRepository.findModelDefaultOption(1L, 1L, 1L, 1L);
//
//        // Then
//        softAssertions.assertThat(result)
//                .usingRecursiveComparison()
//                .isEqualTo(defaultOptionInfoDTOs);
//    }
//
//    @Test
//    @DisplayName("(통합) ModelRepository 에서 트림, 구동방식 등의 아이디로 선택 품목 정보가 성공적으로 조회 되어야한다.")
//    void findModelExtraOption() {
//        // Given
//        ExtraOptionTagInfoDTO extraOptionTagInfoDTO1 = ExtraOptionTagInfoDTO.builder()
//                .id(1L)
//                .name("TagOptionName1")
//                .count(10L)
//                .build();
//
//        ExtraOptionTagInfoDTO extraOptionTagInfoDTO2 = ExtraOptionTagInfoDTO.builder()
//                .id(2L)
//                .name("TagOptionName2")
//                .count(20L)
//                .build();
//
//        SubExtraOptionInfoDTO subExtraOptionInfoDTO1 = SubExtraOptionInfoDTO.builder()
//                .id(1L)
//                .name("SubOptionName1")
//                .description("SubOptionDescription1")
//                .image("SubOptionImage1")
//                .build();
//
//        SubExtraOptionInfoDTO subExtraOptionInfoDTO2 = SubExtraOptionInfoDTO.builder()
//                .id(2L)
//                .name("SubOptionName2")
//                .description("SubOptionDescription2")
//                .image("SubOptionImage2")
//                .build();
//
//        ExtraOptionInfoDTO extraOptionInfoDTO1 = ExtraOptionInfoDTO.builder()
//                .id(1L)
//                .name("Option1")
//                .description("Description for Option1")
//                .category("Category1")
//                .image("image1.png")
//                .price(10000.0)
//                .x_position(10)
//                .y_position(20)
//                .extraOptionTagInfoDTOS(Set.of(extraOptionTagInfoDTO1, extraOptionTagInfoDTO2))
//                .subExtraOptionInfoDTOs(Set.of(subExtraOptionInfoDTO1, subExtraOptionInfoDTO2))
//                .build();
//
//        ExtraOptionInfoDTO extraOptionInfoDTO2 = ExtraOptionInfoDTO.builder()
//                .id(2L)
//                .name("Option2")
//                .description("Description for Option2")
//                .category("Category2")
//                .image("image2.png")
//                .price(15000.0)
//                .x_position(30)
//                .y_position(40)
//                .extraOptionTagInfoDTOS(Set.of(extraOptionTagInfoDTO1, extraOptionTagInfoDTO2))
//                .subExtraOptionInfoDTOs(Set.of(subExtraOptionInfoDTO1, subExtraOptionInfoDTO2))
//                .build();
//
//        Set<ExtraOptionInfoDTO> extraOptionInfoDTOs = Set.of(extraOptionInfoDTO1, extraOptionInfoDTO2);
//
//        // When
//        Set<ExtraOptionInfoDTO> result = modelRepository.findModelExtraOption(1L, 1L, 1L, 1L);
//
//        // Then
//        softAssertions.assertThat(result)
//                .usingRecursiveComparison()
//                .isEqualTo(extraOptionInfoDTOs);
//    }
}
