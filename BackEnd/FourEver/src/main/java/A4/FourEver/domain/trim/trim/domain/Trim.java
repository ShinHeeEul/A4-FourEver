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
    private Long trim_id;
    private String name;
    private String image;
    private Double price;

    @MappedCollection(idColumn = "trim_id", keyColumn = "in_color_id")
    private Set<InColor> inColors;

    @MappedCollection(idColumn = "trim_id", keyColumn = "ex_color_id")
    private Set<ExColor> exColors;
}
