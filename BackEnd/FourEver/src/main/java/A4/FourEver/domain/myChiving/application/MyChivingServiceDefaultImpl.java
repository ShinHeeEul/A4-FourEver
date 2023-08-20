package A4.FourEver.domain.myChiving.application;

import A4.FourEver.domain.myChiving.dto.MyChivingDetailSortedDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingIdDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingMapper;
import A4.FourEver.domain.myChiving.dto.MyChivingSaveDTO;
import A4.FourEver.domain.myChiving.repository.MyChivingRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MyChivingServiceDefaultImpl implements MyChivingService {


    private final MyChivingRepository myChivingRepository;

    private final MyChivingMapper myChivingMapper;

    public MyChivingServiceDefaultImpl(MyChivingRepository myChivingRepository, MyChivingMapper myChivingMapper) {
        this.myChivingRepository = myChivingRepository;
        this.myChivingMapper = myChivingMapper;
    }

    @Override
    @Transactional
    public MyChivingIdDTO saveMyChiving(final MyChivingSaveDTO dto, final Long userId) {
        if (dto.getMyChiving_id() == 0) {
            return MyChivingIdDTO.builder()
                    .id(myChivingRepository.saveMyChiving(dto, userId))
                    .build();
        }
        return MyChivingIdDTO.builder()
                .id(myChivingRepository.updateMyChiving(dto, userId))
                .build();

    }

    @Override
    @Transactional
    public void removeMyChiving(final Long id) {
        myChivingRepository.removeMyChiving(id);
    }

    @Override
    public MyChivingDetailSortedDTO getMyChivingDetail(final Long id) {
        return myChivingMapper.convertToSortedDTO(myChivingRepository.findMyChivingDetail(id));
    }
}
