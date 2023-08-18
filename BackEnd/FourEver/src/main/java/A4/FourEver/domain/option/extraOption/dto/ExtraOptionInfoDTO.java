package A4.FourEver.domain.option.extraOption.dto;

import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionInfoDTO;
import A4.FourEver.domain.tag.extraOptionTag.dto.ExtraOptionTagInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.Objects;
import java.util.Set;

@Builder
@Getter
public class ExtraOptionInfoDTO {
    private Long id;
    private String name;
    private String description;
    private String category;
    private String image;
    private Double price;
    private Integer x_position;
    private Integer y_position;
    private Set<ExtraOptionTagInfoDTO> extraOptionTagInfoDTOS;
    private Set<SubExtraOptionInfoDTO> subExtraOptionInfoDTOs;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ExtraOptionInfoDTO that = (ExtraOptionInfoDTO) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(description, that.description) &&
                Objects.equals(category, that.category) &&
                Objects.equals(image, that.image) &&
                Objects.equals(price, that.price) &&
                Objects.equals(x_position, that.x_position) &&
                Objects.equals(y_position, that.y_position);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, category, image, price, x_position, y_position);
    }
}
