package A4.FourEver.domain.color.inColor.domain;

import A4.FourEver.domain.tag.inColorTag.domain.InColorTag;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;

import java.util.List;

@Getter
public class InColor {

    @Id
    private Long id;
    private String name;
    private String color_image;
    private String in_image;

    @MappedCollection(idColumn = "id", keyColumn = "id")
    private List<InColorTag> inColorTags;
}
