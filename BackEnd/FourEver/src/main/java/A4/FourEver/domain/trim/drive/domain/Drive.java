package A4.FourEver.domain.trim.drive.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class Drive {

    @Id
    private Long drive_id;
    private String name;
    private String image;
    private String description;
    private Double price;
}
