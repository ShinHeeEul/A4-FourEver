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
    private Long id;
    private String name;

    @MappedCollection(idColumn = "id", keyColumn = "id")
    private List<Trim> trims;

    @MappedCollection(idColumn = "id", keyColumn = "id")
    private List<Body> bodies;

    @MappedCollection(idColumn = "id", keyColumn = "id")
    private List<Drive> drives;

    @MappedCollection(idColumn = "id", keyColumn = "id")
    private List<Engine> engines;
}
