import { useLoaderData, useParams } from 'react-router-dom';
import DetailBanner from '../components/DetailBanner';
import { styled } from 'styled-components';
import AdditionalInfo from '../components/AdditionalInfo';
import EachOptCard from '../components/EachOptCard';
import { useState } from 'react';
import { createContext } from 'react';
import { ARCHIVINGDETAIL } from '../../constant';
export const DataLoaderContext = createContext();
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
`;

function ArchivingDetail() {
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
    <DataLoaderContext.Provider value={data}>
      <Container>
        <DetailBanner
          isArchiving={true}
          selectedIdx={selectedIdx}
          setSelectedIdx={setSelectedIdx}
        />
        <AdditionalInfo />
        <AllDiv>
          {data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.EXTRAOPTIONS] &&
            data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.EXTRAOPTIONS].map(
              (item, idx) => {
                return (
                  <EachOptCard
                    data={item}
                    key={idx}
                    idx={idx}
                    isSelected={selectedIdx === idx}
                    onClick={() => handleCardClick(idx)}
                    isArchiving={true}
                  />
                );
              },
            )}
        </AllDiv>
      </Container>
    </DataLoaderContext.Provider>
  );
}
export default ArchivingDetail;
