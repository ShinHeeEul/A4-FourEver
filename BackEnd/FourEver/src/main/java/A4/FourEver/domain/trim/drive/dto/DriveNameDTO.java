package A4.FourEver.domain.trim.drive.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class DriveNameDTO {
    private Long id;
    private String name;
}
