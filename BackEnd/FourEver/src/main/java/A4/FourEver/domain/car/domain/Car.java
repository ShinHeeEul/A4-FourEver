package A4.FourEver.domain.car.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class Car {

    @Id
    private Long id;
    private String name;
}
