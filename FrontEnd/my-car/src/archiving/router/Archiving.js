import { styled } from 'styled-components';
import OptSelectionBar from '../components/OptSelectionBar';
import OptReviewHeader from '../components/OptReviewHeader';
import OptReviewCard from '../components/OptReviewCard';

const Container = styled.div`
  width: 100%;
  min-width: 1280px;
`;

function Archiving() {
  return (
    <Container>
      <OptSelectionBar />
      <OptReviewHeader />
      <OptReviewCard />
    </Container>
  );
}
export default Archiving;
