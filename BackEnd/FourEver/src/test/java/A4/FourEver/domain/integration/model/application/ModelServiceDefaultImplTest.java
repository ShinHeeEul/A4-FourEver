package A4.FourEver.domain.integration.model.application;

import A4.FourEver.domain.integration.IntegrationBaseTest;

class ModelServiceDefaultImplTest extends IntegrationBaseTest {

//    private final ModelService modelService;
//
//    @Autowired
//    ModelServiceDefaultImplTest(ModelService modelService) {
//        this.modelService = modelService;
//    }
//
//    @Test
//    @DisplayName("(통합) ModelService 에서 트림, 구동방식 등의 아이디로 기본 혹은 선택 품목의 정보가 성공적으로 조회 되어야한다.")
//    void getModelOptions() {
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
//        List<ExtraOptionTagInfoDTO> extraOptionTagInfoDTOList = Stream.of(extraOptionTagInfoDTO1, extraOptionTagInfoDTO2)
//                .sorted(Comparator.comparingLong(ExtraOptionTagInfoDTO::getId))
//                .collect(Collectors.toList());
//
//        List<SubExtraOptionInfoDTO> subExtraOptionInfoDTOList = Stream.of(subExtraOptionInfoDTO1, subExtraOptionInfoDTO2)
//                .sorted(Comparator.comparingLong(SubExtraOptionInfoDTO::getId))
//                .collect(Collectors.toList());
//
//        ExtraOptionInfoSortedDTO extraOptionInfoSortedDTO1 = ExtraOptionInfoSortedDTO.builder()
//                .id(1L)
//                .name("Option1")
//                .description("Description for Option1")
//                .category("Category1")
//                .image("image1.png")
//                .price(10000.0)
//                .x_position(10)
//                .y_position(20)
//                .extraOptionTagInfoDTOS(extraOptionTagInfoDTOList)
//                .subExtraOptionInfoDTOs(subExtraOptionInfoDTOList)
//                .build();
//
//        ExtraOptionInfoSortedDTO extraOptionInfoSortedDTO2 = ExtraOptionInfoSortedDTO.builder()
//                .id(2L)
//                .name("Option2")
//                .description("Description for Option2")
//                .category("Category2")
//                .image("image2.png")
//                .price(15000.0)
//                .x_position(30)
//                .y_position(40)
//                .extraOptionTagInfoDTOS(extraOptionTagInfoDTOList)
//                .subExtraOptionInfoDTOs(subExtraOptionInfoDTOList)
//                .build();
//
//        List<DefaultOptionInfoDTO> defaultOptionInfoDTOList = Stream.of(defaultOptionInfoDTO1, defaultOptionInfoDTO2)
//                .sorted(Comparator.comparingLong(DefaultOptionInfoDTO::getId))
//                .collect(Collectors.toList());
//        List<ExtraOptionInfoSortedDTO> extraOptionInfoDTOList = Stream.of(extraOptionInfoSortedDTO1, extraOptionInfoSortedDTO2)
//                .sorted(Comparator.comparingLong(ExtraOptionInfoSortedDTO::getId))
//                .collect(Collectors.toList());
//
//        ModelOptionsSortedDTO modelOptionsSortedDTO = ModelOptionsSortedDTO.builder()
//                .defaultOptionInfoDTOs(defaultOptionInfoDTOList)
//                .extraOptionInfoSortedDTOs(extraOptionInfoDTOList)
//                .build();
//
//        // When
//        ModelOptionsSortedDTO result = modelService.getModelOptions(1L, 1L, 1L, 1L);
//
//        // Then
//        softAssertions.assertThat(result)
//                .usingRecursiveComparison()
//                .isEqualTo(modelOptionsSortedDTO);
//    }
}
