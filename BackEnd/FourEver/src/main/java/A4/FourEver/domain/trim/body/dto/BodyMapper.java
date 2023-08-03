package A4.FourEver.domain.trim.body.dto;

import A4.FourEver.domain.trim.body.domain.Body;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Component
public class BodyMapper {

    public BodyDTO toBodyDTO(Body body) {
        return BodyDTO.builder()
                .body_id(body.getBody_id())
                .name(body.getName())
                .image(body.getImage())
                .description(body.getDescription())
                .price(body.getPrice())
                .build();
    }

    public List<BodyDTO> toBodyDTOList(Iterable<Body> bodies) {
        return StreamSupport.stream(bodies.spliterator(), false)
                .map(this::toBodyDTO)
                .collect(Collectors.toList());
    }
}
