package A4.FourEver.domain.color.inColor.domain;

import A4.FourEver.domain.tag.inColorTag.domain.InColorTag;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;

import java.util.List;

@Getter
public class InColor {

    @Id
    private Long in_color_id;
    private String name;
    private String color_image;
    private String in_image;

    @MappedCollection(idColumn = "in_color_id", keyColumn = "in_color_tag_id")
    private List<InColorTag> inColorTags;
}
