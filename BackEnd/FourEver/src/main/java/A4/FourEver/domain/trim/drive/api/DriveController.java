package A4.FourEver.domain.trim.drive.api;

import A4.FourEver.domain.trim.drive.application.DriveService;
import A4.FourEver.domain.trim.drive.dto.DriveDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "구동 방식 정보")
@RestController
@RequestMapping("/cars/{car_id}/trim/drives")
public class DriveController {

    @Autowired
    private DriveService driveService;

    @Operation(summary = "모든 구동 방식 조회")
    @GetMapping
    public List<DriveDTO> getAllDrivesByCarId(@PathVariable Long car_id) {
        return driveService.getAllDrivesByCarId(car_id);
    }

    @Operation(summary = "특정 구동 방식 조회")
    @GetMapping("/{Drive_id}")
    public DriveDTO getDriveById(@PathVariable Long car_id, @PathVariable Long Drive_id) {
        return driveService.getDriveById(Drive_id);
    }
}
