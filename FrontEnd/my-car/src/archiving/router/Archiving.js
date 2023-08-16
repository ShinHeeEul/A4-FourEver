import { styled } from 'styled-components';
import OptSelectionBar from '../components/OptSelectionBar';
import OptReviewHeader from '../components/OptReviewHeader';
import OptReviewCard from '../components/OptReviewCard';
import ArchivingProvider from '../../context/archiving/ArchivingProvider';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Loading from '../components/Loading';

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
        <Loading />
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
