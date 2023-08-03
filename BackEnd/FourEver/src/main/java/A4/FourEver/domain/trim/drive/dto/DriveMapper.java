package A4.FourEver.domain.trim.drive.dto;

import A4.FourEver.domain.trim.drive.domain.Drive;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Component
public class DriveMapper {

    public DriveDTO toDriveDTO(Drive drive) {
        return DriveDTO.builder()
                .drive_id(drive.getDrive_id())
                .name(drive.getName())
                .image(drive.getImage())
                .description(drive.getDescription())
                .price(drive.getPrice())
                .build();
    }

    public List<DriveDTO> toDriveDTOList(Iterable<Drive> drives) {
        return StreamSupport.stream(drives.spliterator(), false)
                .map(this::toDriveDTO)
                .collect(Collectors.toList());
    }
}
