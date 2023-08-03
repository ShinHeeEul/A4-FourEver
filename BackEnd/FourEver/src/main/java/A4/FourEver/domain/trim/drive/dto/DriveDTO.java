package A4.FourEver.domain.trim.drive.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class DriveDTO {

    private Long drive_id;
    private String name;
    private String image;
    private String description;
    private Long price;
}

