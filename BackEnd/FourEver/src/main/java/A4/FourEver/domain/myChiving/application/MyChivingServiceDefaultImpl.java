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
        if (dto.getId() == 0) {
            return MyChivingIdDTO.builder()
                    .id(myChivingRepository.saveMyChiving(dto, userId))
                    .build();
        }

        // 기존의 임시 저장 데이터 삭제
        myChivingRepository.removeMyChiving(dto.getId());

        // 다시 저장
        return MyChivingIdDTO.builder()
                .id(myChivingRepository.saveMyChiving(dto, userId))
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
