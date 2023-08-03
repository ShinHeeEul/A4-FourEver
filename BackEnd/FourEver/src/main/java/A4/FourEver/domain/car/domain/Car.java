package A4.FourEver.domain.car.domain;

import A4.FourEver.domain.trim.body.domain.Body;
import A4.FourEver.domain.trim.drive.domain.Drive;
import A4.FourEver.domain.trim.engine.domain.Engine;
import A4.FourEver.domain.trim.trim.domain.Trim;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;

import java.util.List;


@Getter
public class Car {

    @Id
    private Long car_id;

    private String name;

    @MappedCollection(idColumn = "car_id", keyColumn = "trim_id")
    private List<Trim> trimList;

    @MappedCollection(idColumn = "car_id", keyColumn = "body_id")
    private List<Body> bodyList;

    @MappedCollection(idColumn = "car_id", keyColumn = "drive_id")
    private List<Drive> driveList;

    @MappedCollection(idColumn = "car_id", keyColumn = "engine_id")
    private List<Engine> engineList;
}
