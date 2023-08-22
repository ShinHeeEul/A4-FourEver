package A4.FourEver.domain.carReview.dto;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import lombok.Getter;


@Getter
public class CarReviewOnBoardingDTO {
    private final String[] totalTags = new String[] {"역시 풀옵션 없는 게 없어요👍", "필요한 건 다 있어요😎", "안전을 위한 옵션이 많아요🚨",
            "마음에 쏙 드는 색상💕", "부드러운 주행🪶",
            "외관이 멋져요🤩", "연비가 좋아요🛢", "초보자에게 좋은 차🚘", "가족👨‍👩‍👦‍👦", "사회초년생🧑‍🎓"};
    private final CarReviewSimpleDTO[] carReviewSimpleDTOS = {
            CarReviewSimpleDTO.builder()
                    .car_name("팰리세이드")
                    .price(41980000)
                    .body_name("7인승")
                    .trim_name("Le Blanc")
                    .drive_name("2WD")
                    .engine_name("디젤 2.2")
                    .exColorInfoDTO(ExColorInfoDTO.builder()
                            .name("어비스 블랙펄")
                            .color_image("https://s3.ap-northeast-2.amazonaws.com/hyundaimycar.store/ex_color/11.png")
                            .rotation_image("https://s3.ap-northeast-2.amazonaws.com/hyundaimycar.store/rotation/abyss/1.png")
                            .build())
                    .inColorInfoDTO(InColorInfoDTO.builder()
                            .name("퀄팅천연(블랙)")
                            .color_image("https://s3.ap-northeast-2.amazonaws.com/hyundaimycar.store/in_color/17-1.png")
                            .build())
                    .build(),
            CarReviewSimpleDTO.builder()
                    .car_name("팰리세이드")
                    .price(44350000)
                    .body_name("8인승")
                    .trim_name("Le Blanc")
                    .drive_name("4WD")
                    .engine_name("디젤 2.2")
                    .exColorInfoDTO(ExColorInfoDTO.builder()
                            .name("쉬머링 실버 메탈릭")
                            .color_image("https://s3.ap-northeast-2.amazonaws.com/hyundaimycar.store/ex_color/12.png")
                            .rotation_image("https://s3.ap-northeast-2.amazonaws.com/hyundaimycar.store/rotation/blue/1.png")
                            .build())
                    .inColorInfoDTO(InColorInfoDTO.builder()
                            .name("퀄팅천연(블랙)")
                            .color_image("https://s3.ap-northeast-2.amazonaws.com/hyundaimycar.store/in_color/17-1.png")
                            .build())
                    .build(),
            CarReviewSimpleDTO.builder()
                    .car_name("팰리세이드")
                    .price(43560000)
                    .body_name("7인승")
                    .trim_name("Le Blanc")
                    .drive_name("2WD")
                    .engine_name("가솔린 3.8")
                    .exColorInfoDTO(ExColorInfoDTO.builder()
                            .name("크리미 화이트 펄")
                            .color_image("https://s3.ap-northeast-2.amazonaws.com/hyundaimycar.store/ex_color/16.png")
                            .rotation_image("https://s3.ap-northeast-2.amazonaws.com/hyundaimycar.store/rotation/white/1.png")
                            .build())
                    .inColorInfoDTO(InColorInfoDTO.builder()
                            .name("쿨그레이")
                            .color_image("https://s3.ap-northeast-2.amazonaws.com/hyundaimycar.store/in_color/18-1.png")
                            .build())
                    .build(),
    };

}
