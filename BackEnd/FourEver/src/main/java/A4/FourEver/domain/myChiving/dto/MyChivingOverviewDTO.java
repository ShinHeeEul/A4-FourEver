package A4.FourEver.domain.myChiving.dto;

import A4.FourEver.domain.color.exColor.dto.ExColorIdDTO;
import A4.FourEver.domain.color.inColor.dto.InColorIdDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionNameAndImageDTO;
import A4.FourEver.domain.trim.body.dto.BodyNameDTO;
import A4.FourEver.domain.trim.drive.dto.DriveNameDTO;
import A4.FourEver.domain.trim.engine.dto.EngineNameDTO;
import A4.FourEver.domain.trim.trim.dto.TrimNameDTO;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.Objects;
import java.util.Set;

@Builder
@Getter
public class MyChivingOverviewDTO {
    private Long id;
    private Integer is_end;
    private String image;
    private Timestamp updated_at;
    private String car_name;
    private TrimNameDTO trimNameDTO;
    private EngineNameDTO engineNameDTO;
    private BodyNameDTO bodyNameDTO;
    private DriveNameDTO driveNameDTO;
    private InColorIdDTO inColorIdDTO;
    private ExColorIdDTO exColorIdDTO;
    private Set<ExtraOptionNameAndImageDTO> extraOptionDTOs;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MyChivingOverviewDTO that = (MyChivingOverviewDTO) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(is_end, that.is_end) &&
                Objects.equals(image, that.image) &&
                Objects.equals(updated_at, that.updated_at) &&
                Objects.equals(car_name, that.car_name) &&
                Objects.equals(trimNameDTO, that.trimNameDTO) &&
                Objects.equals(engineNameDTO, that.engineNameDTO) &&
                Objects.equals(bodyNameDTO, that.bodyNameDTO) &&
                Objects.equals(driveNameDTO, that.driveNameDTO) &&
                Objects.equals(inColorIdDTO, that.inColorIdDTO) &&
                Objects.equals(exColorIdDTO, that.exColorIdDTO);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, is_end, image, updated_at, car_name, trimNameDTO, engineNameDTO, bodyNameDTO, driveNameDTO, inColorIdDTO, exColorIdDTO);
    }
}
