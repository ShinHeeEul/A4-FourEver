package A4.FourEver.domain.integration.model.api;

import A4.FourEver.domain.integration.IntegrationBaseTest;


class ModelControllerDefaultImplTest extends IntegrationBaseTest {
//
//    private final ModelController modelController;
//
//    @Autowired
//    ModelControllerDefaultImplTest(ModelController modelController) {
//        this.modelController = modelController;
//    }
//
//    @Test
//    @DisplayName("(통합) ModelController 에서 트림, 구동방식 등의 아이디로 기본 혹은 선택 품목의 정보가 성공적으로 조회 되어야한다.")
//    void getModelOption() {
//        // Given
//        ExtraOptionTagInfoDTO tag1 = ExtraOptionTagInfoDTO.builder().id(12L).name("어린이👶").count(0L).build();
//        ExtraOptionTagInfoDTO tag2 = ExtraOptionTagInfoDTO.builder().id(13L).name("안전사고예방🚨").count(0L).build();
//        ExtraOptionTagInfoDTO tag3 = ExtraOptionTagInfoDTO.builder().id(14L).name("깨끗하게유지할수있어요🧹").count(0L).build();
//        ExtraOptionTagInfoDTO tag4 = ExtraOptionTagInfoDTO.builder().id(15L).name("큰짐도OK🧳").count(0L).build();
//        ExtraOptionTagInfoDTO tag5 = ExtraOptionTagInfoDTO.builder().id(16L).name("가족들도좋은옵션👨‍👩‍👧‍👦").count(0L).build();
//        ExtraOptionTagInfoDTO tag6 = ExtraOptionTagInfoDTO.builder().id(17L).name("겨울에쓰기좋아요❄️").count(0L).build();
//        ExtraOptionTagInfoDTO tag7 = ExtraOptionTagInfoDTO.builder().id(18L).name("가격이합리적이에요👍").count(0L).build();
//        ExtraOptionTagInfoDTO tag8 = ExtraOptionTagInfoDTO.builder().id(19L).name("대형견도문제없어요🐶").count(0L).build();
//
//        List<ExtraOptionTagInfoDTO> extraOptionTagInfoDTOList1 = Stream.of(tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8).collect(Collectors.toList());
//// SubExtraOptionInfoDTOs
//        SubExtraOptionInfoDTO sub1 = SubExtraOptionInfoDTO.builder().id(1L).name("후석 승객 알림").description("초음파 센서를 통해...").image("http://hyundaimycar.store/extra_option/101-1.jpg").build();
//// ... 중간 SubExtraOptionInfoDTO들도 생략하였습니다. 위와 동일한 패턴으로 계속해서 작성해 주세요.
//        SubExtraOptionInfoDTO sub6 = SubExtraOptionInfoDTO.builder().id(6L).name("헤드업 디스플레이").description("주요 주행 정보를 전면...").image("http://hyundaimycar.store/extra_option/101-6.jpg").build();
//
//        List<SubExtraOptionInfoDTO> subExtraOptionInfoDTOList1 = Stream.of(sub1, sub2, /*...*/, sub6).collect(Collectors.toList());
//
//        SubExtraOptionInfoDTO sub7 = SubExtraOptionInfoDTO.builder().id(7L).name("후방 주차 충돌방지 보조").description("주차 또는 출차 시...").image("http://hyundaimycar.store/extra_option/102-1.jpg").build();
//        SubExtraOptionInfoDTO sub8 = SubExtraOptionInfoDTO.builder().id(8L).name("원격 스마트 주차 보조 주차 보조").description("기능을 활성화 한 후...").image("http://hyundaimycar.store/extra_option/102-2.jpg").build();
//
//        List<SubExtraOptionInfoDTO> subExtraOptionInfoDTOList2 = Stream.of(sub7, sub8).collect(Collectors.toList());
//
//// DefaultOptionInfoDTOs
//        DefaultOptionInfoDTO defaultOption1 = DefaultOptionInfoDTO.builder().id(1L).name("8단 자동변속기").description("전달 효율 증대로...").category("파워트레인/성능").image("http://hyundaimycar.store/default_option/19.jpg").build();
//        DefaultOptionInfoDTO defaultOption2 = DefaultOptionInfoDTO.builder().id(2L).name("ISG 시스템").description("신호 대기 상황이거나...").category("파워트레인/성능").image("http://hyundaimycar.store/default_option/20.jpg").build();
//
//// ExtraOptionInfoSortedDTOs
//        ExtraOptionInfoSortedDTO extraOptionInfoSortedDTO1 = ExtraOptionInfoSortedDTO.builder()
//                .id(1L)
//                .name("컴포트 II")
//                .description("-")
//                .category("상세 품목")
//                .image("http://hyundaimycar.store/extra_option/101-1.jpg")
//                .price(1090000.0)
//                .x_position(-1)
//                .y_position(-1)
//                .extraOptionTagInfoDTOS(extraOptionTagInfoDTOList1)
//                .subExtraOptionInfoDTOs(subExtraOptionInfoDTOList1)
//                .build();
//
//        ExtraOptionInfoSortedDTO extraOptionInfoSortedDTO2 = ExtraOptionInfoSortedDTO.builder()
//                .id(2L)
//                .name("주차보조 시스템 II")
//                .description("-")
//                .category("상세 품목")
//                .image("http://hyundaimycar.store/extra_option/102-1.jpg")
//                .price(1190000.0)
//                .x_position(-1)
//                .y_position(-1)
//                .extraOptionTagInfoDTOS(extraOptionTagInfoDTOList2)
//                .subExtraOptionInfoDTOs(subExtraOptionInfoDTOList2)
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
//        ModelOptionsSortedDTO result = modelController.getModelOption(1L, 1L, 1L, 1L);
//
//        // Then
//        softAssertions.assertThat(result)
//                .usingRecursiveComparison()
//                .isEqualTo(modelOptionsSortedDTO);
//    }
}
