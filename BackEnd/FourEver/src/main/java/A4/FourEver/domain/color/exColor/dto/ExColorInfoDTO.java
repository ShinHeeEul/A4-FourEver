package A4.FourEver.domain.color.exColor.dto;

import A4.FourEver.domain.tag.exColorTag.dto.ExColorTagInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.Objects;
import java.util.Set;

@Builder
@Getter
public class ExColorInfoDTO {
    private Long id;
    private String name;
    private String color_image;
    private String rotation_image;
    private Double price;
    private Set<ExColorTagInfoDTO> exColorTagInfoDTOS;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ExColorInfoDTO that = (ExColorInfoDTO) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(color_image, that.color_image) &&
                Objects.equals(rotation_image, that.rotation_image) &&
                Objects.equals(price, that.price);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, color_image, rotation_image, price);
    }
}
