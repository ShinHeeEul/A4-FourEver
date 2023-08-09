package A4.FourEver.domain.trim.trim.domain;

import A4.FourEver.domain.color.exColor.domain.ExColor;
import A4.FourEver.domain.color.inColor.domain.InColor;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;

import java.util.Set;

@Getter
public class Trim {

    @Id
    private Long id;
    private String name;
    private String image;
    private Double price;

    @MappedCollection(idColumn = "id", keyColumn = "id")
    private Set<InColor> inColors;

    @MappedCollection(idColumn = "id", keyColumn = "id")
    private Set<ExColor> exColors;
}
