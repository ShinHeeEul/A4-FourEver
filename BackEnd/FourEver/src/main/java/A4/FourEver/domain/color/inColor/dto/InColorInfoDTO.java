package A4.FourEver.domain.color.inColor.dto;

import A4.FourEver.domain.tag.inColorTag.dto.InColorTagInfoDTO;
import lombok.Builder;
import lombok.Getter;

import java.util.Objects;
import java.util.Set;

@Builder
@Getter
public class InColorInfoDTO {
    private Long id;
    private String name;
    private String color_image;
    private String in_image;
    private Set<InColorTagInfoDTO> inColorTagInfoDTOS;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InColorInfoDTO that = (InColorInfoDTO) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Objects.equals(color_image, that.color_image) &&
                Objects.equals(in_image, that.in_image);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, color_image, in_image);
    }
}
