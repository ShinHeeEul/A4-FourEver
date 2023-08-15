import { useParams } from 'react-router-dom';
import ChivingHeader from '../../common/ChivingHeader';
import DetailBanner from '../components/DetailBanner';
import { styled } from 'styled-components';
import { Body1Regular, Heading1Bold } from '../../style/typo';
import AdditionalInfo from '../components/AdditionalInfo';
import OptDetailCard from '../components/optDetailCard';

const Container = styled.div`
  width: 100%;
  min-width: 1350px;
`;
function ArchivingDetail() {
  const { id } = useParams();
  return (
    <Container>
      <DetailBanner />
      <AdditionalInfo />
      <OptDetailCard />
    </Container>
  );
}
export default ArchivingDetail;
