package A4.FourEver.domain.option.extraOption.dto;

import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionNameDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.Objects;
import java.util.Set;

@Builder
@Getter
public class ExtraOptionDetailDTO {
    private Long id;
    private String name;
    private String image;
    private Integer x_position;
    private Integer y_position;
    private Set<ExtraOptionTagInfoDTO> extraOptionTagInfoDTOS;
    private Set<SubExtraOptionNameDTO> subExtraOptionNameDTOs;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ExtraOptionDetailDTO that = (ExtraOptionDetailDTO) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(image, that.image) &&
                Objects.equals(x_position, that.x_position) &&
                Objects.equals(y_position, that.y_position);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, image, x_position, y_position);
    }
}
