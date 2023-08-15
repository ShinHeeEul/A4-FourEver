import { useParams } from 'react-router-dom';
import ChivingHeader from '../../common/ChivingHeader';
import DetailBanner from '../components/DetailBanner';
import { styled } from 'styled-components';
import { Body1Regular, Heading1Bold } from '../../style/typo';
import AdditionalInfo from '../components/AdditionalInfo';
import OptDetailCard from '../components/optDetailCard';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  min-width: 1350px;
`;

const AllDiv = styled.div`
  display: flex;
  margin: 50px auto;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  width: 1050px;
`;

const dummyData = [
  {
    title: '컴포트 || 패키지',
    discription: [
      '후석 승객 알림',
      '메탈 리어범퍼스텝',
      '메탈 도어스커프',
      '3열 파워 폴딩시트',
      '3열 열선시트',
      '헤드업 디스플레이',
    ],
    tags: ['편리해요😉', '출퇴근용으로 딱🚶', '어린이👶'],
  },
  {
    title: '현대 스마트센스Ⅰ패키지',
    discription: [
      '전방 충돌방지 보조',
      '내비게이션 기반 스마트 크루 즈 컨트롤',
      '고속도로 주행보조 2',
    ],
    tags: ['편리해요😉', '출퇴근용으로 딱🚶', '어린이👶'],
  },
  {
    title: '2열 통풍시트',
    discription: [],
    tags: ['편리해요😉', '출퇴근용으로 딱🚶', '어린이👶'],
  },
  {
    title: '빌트인 캠(보조배터리 포함)',
    discription: [],
    tags: ['편리해요😉', '출퇴근용으로 딱🚶', '어린이👶'],
  },
];
function ArchivingDetail() {
  const { id } = useParams();
  const [selectedIdx, setSelectedIdx] = useState(null);

  function toggleSelect(idx) {
    setSelectedIdx((prevIdx) => (prevIdx === idx ? null : idx));
  }

  function handleCardClick(idx) {
    toggleSelect(idx);
  }

  return (
    <Container>
      <DetailBanner />
      <AdditionalInfo />
      <AllDiv>
        {dummyData.map((elem, idx) => (
          <OptDetailCard
            data={elem}
            idx={idx}
            isSelected={selectedIdx === idx}
            onClick={() => handleCardClick(idx)}
          />
        ))}
      </AllDiv>
    </Container>
  );
}
export default ArchivingDetail;
