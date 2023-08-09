package A4.FourEver.domain.color.exColor.domain;

import A4.FourEver.domain.tag.exColorTag.domain.ExColorTag;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;

import java.util.List;

@Getter
public class ExColor {

    @Id
    private Long ex_color_id;
    private String name;
    private String color_image;
    private String rotation_image;
    private Double price;

    @MappedCollection(idColumn = "ex_color_id", keyColumn = "ex_color_tag_id")
    private List<ExColorTag> exColorTags;
}
