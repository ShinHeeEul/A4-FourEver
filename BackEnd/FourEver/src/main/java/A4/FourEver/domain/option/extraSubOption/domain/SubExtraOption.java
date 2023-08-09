package A4.FourEver.domain.option.extraSubOption.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Getter
@Table("sub_option")
public class SubExtraOption {

    @Id
    private Long id;
    private String name;
    private String description;
    private String image;
}
