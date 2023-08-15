package A4.FourEver.domain.tag.totalTag.domain;

import lombok.Getter;
import nonapi.io.github.classgraph.json.Id;

@Getter
public class TotalTag {

    @Id
    private Long id;
    private String name;
}
