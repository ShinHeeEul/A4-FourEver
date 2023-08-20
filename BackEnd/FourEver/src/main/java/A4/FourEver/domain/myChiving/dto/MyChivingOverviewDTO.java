package A4.FourEver.domain.myChiving.dto;

import A4.FourEver.domain.option.extraOption.dto.ExtraOptionNameAndImageDTO;
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
    private String trim_name;
    private String engine_name;
    private String drive_name;
    private String body_name;
    private Set<ExtraOptionNameAndImageDTO> extraOptionDTOs;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MyChivingOverviewDTO that = (MyChivingOverviewDTO) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(trim_name, that.trim_name) &&
                Objects.equals(engine_name, that.engine_name) &&
                Objects.equals(drive_name, that.drive_name) &&
                Objects.equals(body_name, that.body_name) &&
                Objects.equals(updated_at, that.updated_at);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, trim_name, engine_name, drive_name, body_name, updated_at);
    }
}
