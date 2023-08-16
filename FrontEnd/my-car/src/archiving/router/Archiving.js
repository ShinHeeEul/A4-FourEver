import { styled } from 'styled-components';
import OptSelectionBar from '../components/OptSelectionBar';
import OptReviewHeader from '../components/OptReviewHeader';
import OptReviewCard from '../components/OptReviewCard';
import ArchivingProvider from '../../context/archiving/ArchivingProvider';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  min-width: 1280px;
`;

function Archiving() {
  // const [loading, setLoading] = useState(true);
  const { loading } = useOutletContext();

  return (
    <>
      {loading ? (
        <div>로딩중.........</div>
      ) : (
        <Container>
          <OptSelectionBar />
          <OptReviewHeader />
          <OptReviewCard />
        </Container>
      )}
    </>
  );
}
export default Archiving;
