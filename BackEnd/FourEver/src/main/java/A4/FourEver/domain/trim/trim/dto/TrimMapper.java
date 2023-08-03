package A4.FourEver.domain.trim.trim.dto;

import A4.FourEver.domain.trim.trim.domain.Trim;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@Component
public class TrimMapper {

    public TrimDTO toTrimDTO(Trim trim) {
        return TrimDTO.builder()
                .trim_id(trim.getTrim_id())
                .name(trim.getName())
                .image(trim.getImage())
                .price(trim.getPrice())
                .build();
    }

    public List<TrimDTO> toTrimDTOList(Iterable<Trim> trims) {
        return StreamSupport.stream(trims.spliterator(), false)
                .map(this::toTrimDTO)
                .collect(Collectors.toList());
    }
}
