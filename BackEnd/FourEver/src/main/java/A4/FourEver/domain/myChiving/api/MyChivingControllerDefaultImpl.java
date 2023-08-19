package A4.FourEver.domain.myChiving.api;

import A4.FourEver.domain.myChiving.application.MyChivingService;
import A4.FourEver.domain.myChiving.dto.MyChivingRequestDTO;
import A4.FourEver.global.annotation.LoginUserId;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@Tag(name = "마이카이빙 정보")
@RestController
@RequestMapping("/myChiving")
public class MyChivingControllerDefaultImpl implements MyChivingController {

    private final MyChivingService myChivingService;

    public MyChivingControllerDefaultImpl(MyChivingService myChivingService) {
        this.myChivingService = myChivingService;
    }

    @Override
    @Operation(summary = "내 차 만들기 완성")
    @PostMapping("/create")
    @SecurityRequirement(name = "JWT")
    public void createMyChiving(@RequestBody final MyChivingRequestDTO dto, @LoginUserId final Long userId) {
        myChivingService.saveMyChiving(dto, userId);
    }

    @Override
    @Operation(summary = "마이카이빙 삭제")
    @DeleteMapping("/delete/{id}")
    @SecurityRequirement(name = "JWT")
    public void deleteMyChiving(@PathVariable final Long id) {
        myChivingService.removeMyChiving(id);
    }
}
