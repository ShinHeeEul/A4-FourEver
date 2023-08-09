package A4.FourEver.domain.option.extraOption.domain;

import A4.FourEver.domain.option.extraSubOption.domain.SubExtraOption;
import A4.FourEver.domain.tag.extraOptionTag.domain.ExtraOptionTag;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;

import java.util.List;

@Getter
public class ExtraOption {

    @Id
    private Long extra_option_id;
    private String name;
    private String description;
    private String image;
    private Double price;
    private Integer x_position;
    private Integer y_position;

    @MappedCollection(idColumn = "extra_option_id", keyColumn = "extra_option_tag_id")
    private List<ExtraOptionTag> extraOptionTags;

    @MappedCollection(idColumn = "extra_option_id", keyColumn = "sub_option_id")
    private List<SubExtraOption> subExtraOptions;
}
