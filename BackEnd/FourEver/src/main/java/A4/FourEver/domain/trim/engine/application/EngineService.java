package A4.FourEver.domain.trim.engine.application;

import A4.FourEver.domain.trim.engine.domain.Engine;
import A4.FourEver.domain.trim.engine.dto.EngineDTO;
import A4.FourEver.domain.trim.engine.dto.EngineMapper;
import A4.FourEver.domain.trim.engine.exception.EngineNotFoundException;
import A4.FourEver.domain.trim.engine.repository.EngineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EngineService {

    private final EngineRepository engineRepository;
    private final EngineMapper engineMapper;

    @Autowired
    public EngineService(EngineRepository engineRepository, EngineMapper engineMapper) {
        this.engineRepository = engineRepository;
        this.engineMapper = engineMapper;
    }

    public List<EngineDTO> getAllEnginesByCarId(final Long car_id) {
        return engineMapper.toEngineDTOList(engineRepository.findAllOnlyEngineByCarId(car_id));
    }

    public EngineDTO getEngineById(final Long engine_id) {
        Engine engine = engineRepository.findOnlyEngine(engine_id).orElseThrow(() -> new EngineNotFoundException(engine_id));
        return engineMapper.toEngineDTO(engine);
    }
}
