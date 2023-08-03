package A4.FourEver.domain.trim.trim.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class Trim {

    @Id
    private Long trim_id;

    private String name;
    private String image;
    private Long price;
}
