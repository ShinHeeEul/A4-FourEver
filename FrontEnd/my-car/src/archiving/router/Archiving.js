import { styled } from 'styled-components';
import OptSelectionBar from '../components/OptSelectionBar';
import OptReviewHeader from '../components/OptReviewHeader';
import OptReviewCard from '../components/OptReviewCard';
import ArchivingProvider from '../../context/archiving/ArchivingProvider';

const Container = styled.div`
  width: 100%;
  min-width: 1280px;
`;

function Archiving() {
  return (
    <ArchivingProvider>
      <Container>
        <OptSelectionBar />
        <OptReviewHeader />
        <OptReviewCard />
      </Container>
    </ArchivingProvider>
  );
}
export default Archiving;
