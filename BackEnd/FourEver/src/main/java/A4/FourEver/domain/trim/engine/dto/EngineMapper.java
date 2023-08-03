package A4.FourEver.domain.trim.engine.dto;

import A4.FourEver.domain.trim.engine.domain.Engine;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@Component
public class EngineMapper {

    public EngineDTO toEngineDTO(Engine engine) {
        return EngineDTO.builder()
                .engine_id(engine.getEngine_id())
                .name(engine.getName())
                .image(engine.getImage())
                .description(engine.getDescription())
                .max_output(engine.getMax_output())
                .max_tok(engine.getMax_tok())
                .price(engine.getPrice())
                .build();
    }

    public List<EngineDTO> toEngineDTOList(Iterable<Engine> engines) {
        return StreamSupport.stream(engines.spliterator(), false)
                .map(this::toEngineDTO)
                .collect(Collectors.toList());
    }
}
