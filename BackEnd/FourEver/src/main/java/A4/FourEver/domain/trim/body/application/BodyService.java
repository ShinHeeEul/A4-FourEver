package A4.FourEver.domain.trim.body.application;

import A4.FourEver.domain.trim.body.domain.Body;
import A4.FourEver.domain.trim.body.dto.BodyDTO;
import A4.FourEver.domain.trim.body.dto.BodyMapper;
import A4.FourEver.domain.trim.body.exception.BodyNotFoundException;
import A4.FourEver.domain.trim.body.repository.BodyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BodyService {

    private final BodyRepository bodyRepository;
    private final BodyMapper bodyMapper;

    @Autowired
    public BodyService(BodyRepository bodyRepository, BodyMapper bodyMapper) {
        this.bodyRepository = bodyRepository;
        this.bodyMapper = bodyMapper;
    }

    public List<BodyDTO> getAllBodiesByCarId(final Long car_id) {
        return bodyMapper.toBodyDTOList(bodyRepository.findAllOnlyBodyByCarId(car_id));
    }

    public BodyDTO getBodyById(final Long body_id) {
        Body body = bodyRepository.findOnlyBody(body_id).orElseThrow(() -> new BodyNotFoundException(body_id));
        return bodyMapper.toBodyDTO(body);
    }
}
