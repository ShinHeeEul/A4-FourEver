package A4.FourEver.domain.myChiving.api;

import A4.FourEver.domain.myChiving.application.MyChivingService;
import A4.FourEver.domain.myChiving.dto.MyChivingDetailSortedDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingIdDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingSaveDTO;
import A4.FourEver.global.annotation.LoginUserId;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Tag(name = "마이카이빙 정보")
@RestController
@RequestMapping("/mychivings")
public class MyChivingControllerDefaultImpl implements MyChivingController {

    private final MyChivingService myChivingService;

    public MyChivingControllerDefaultImpl(MyChivingService myChivingService) {
        this.myChivingService = myChivingService;
    }

    @Override
    @Operation(summary = "내 차 만들기 완성", description = "<b>First Save : myChiving_id = 0,<br>" +
            "Other Save : myChiving_id = id, <br>" +
            "Not Selected : 0 or [],<br>" +
            "Selected : id,<br>" +
            "⛔️없는 id값 입력 하지 않도록 주의!</b>")
    @PostMapping()
    @SecurityRequirement(name = "JWT")
    public MyChivingIdDTO createMyChiving(@Valid @RequestBody final MyChivingSaveDTO dto, @LoginUserId final Long userId) {
        return myChivingService.saveMyChiving(dto, userId);
    }

    @Override
    @Operation(summary = "특정 마이카이빙 조회")
    @GetMapping("/{id}")
    @SecurityRequirement(name = "JWT")
    public MyChivingDetailSortedDTO getMyChivingDetail(@PathVariable final Long id) {
        return myChivingService.getMyChivingDetail(id);
    }


    @Override
    @Operation(summary = "특정 마이카이빙 삭제")
    @DeleteMapping("/{id}")
    @SecurityRequirement(name = "JWT")
    public void deleteMyChiving(@PathVariable final Long id) {
        myChivingService.removeMyChiving(id);
    }
}
