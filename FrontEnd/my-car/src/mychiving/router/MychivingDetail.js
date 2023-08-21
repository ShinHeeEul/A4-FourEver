import { createContext, useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import DetailBanner from '../../archiving/components/DetailBanner';
import AdditionalInfo, {
  SelectedOptTitle,
} from '../../archiving/components/AdditionalInfo';
import { MYCHIVINGDETAIL } from '../../constant';
import EachOptCard from '../../archiving/components/EachOptCard';
export const MychivingDataLoaderContext = createContext();

const Container = styled.div`
  width: 100%;
  min-width: 1350px;
  padding-top: 150px;
`;

const AllDiv = styled.div`
  display: flex;
  margin: 20px auto;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  width: 1040px;
  /* padding-top: 100px; */
`;

function MychivingDetail(isArchiving) {
  const { id } = useParams();
  const { data } = useLoaderData();

  const [selectedIdx, setSelectedIdx] = useState(null);

  function toggleSelect(idx) {
    setSelectedIdx((prevIdx) => (prevIdx === idx ? null : idx));
  }

  function handleCardClick(idx) {
    toggleSelect(idx);
  }

  return (
    <MychivingDataLoaderContext.Provider value={data}>
      <Container>
        <DetailBanner
          isArchiving={false}
          selectedIdx={selectedIdx}
          setSelectedIdx={setSelectedIdx}
        />

        <AllDiv>
          <SelectedOptTitle style={{ width: '100%' }}>
            선택 옵션{' '}
            {data[MYCHIVINGDETAIL.SELECTEDCAR.FILED.EXTRAOPTIONS].length}
          </SelectedOptTitle>
          {data[MYCHIVINGDETAIL.SELECTEDCAR.FILED.EXTRAOPTIONS] &&
            data[MYCHIVINGDETAIL.SELECTEDCAR.FILED.EXTRAOPTIONS].map(
              (item, idx) => {
                return (
                  <EachOptCard
                    data={item}
                    idx={idx}
                    isSelected={selectedIdx === idx}
                    onClick={() => handleCardClick(idx)}
                    isArchiving={false}
                  />
                );
              },
            )}
        </AllDiv>
      </Container>
    </MychivingDataLoaderContext.Provider>
  );
}

export default MychivingDetail;
