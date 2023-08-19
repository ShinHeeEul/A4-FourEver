import { styled } from 'styled-components';
import OptSelectionBar from '../components/OptSelectionBar';
import OptReviewHeader from '../components/OptReviewHeader';
import OptReviewCard from '../components/OptReviewCard';
import ArchivingProvider from '../../context/archiving/ArchivingProvider';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import WarningTooltip from '../components/WarningTooltip';
import Loading from '../../common/Loading';

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
        <Loading text={'후기를 불러오는 중입니다'} />
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
