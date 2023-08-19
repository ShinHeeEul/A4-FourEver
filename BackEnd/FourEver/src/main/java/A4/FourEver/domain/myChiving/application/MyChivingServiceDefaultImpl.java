package A4.FourEver.domain.myChiving.application;

import A4.FourEver.domain.myChiving.dto.MyChivingRequestDTO;
import A4.FourEver.domain.myChiving.repository.MyChivingRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MyChivingServiceDefaultImpl implements MyChivingService {


    private final MyChivingRepository myChivingRepository;

    public MyChivingServiceDefaultImpl(MyChivingRepository myChivingRepository) {
        this.myChivingRepository = myChivingRepository;
    }

    @Override
    @Transactional
    public void saveMyChiving(final MyChivingRequestDTO dto, final Long userId) {
        myChivingRepository.saveMyChiving(dto, userId);
    }

    @Override
    @Transactional
    public void removeMyChiving(final Long id) {
        myChivingRepository.removeMyChiving(id);
    }
}
