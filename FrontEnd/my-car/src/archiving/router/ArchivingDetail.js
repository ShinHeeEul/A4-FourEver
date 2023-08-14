import { useParams } from 'react-router-dom';
import ChivingHeader from '../../common/ChivingHeader';
import DetailBanner from '../components/DetailBanner';

function ArchivingDetail() {
  const { id } = useParams();
  return (
    <>
      <ChivingHeader />
      <DetailBanner />
    </>
  );
}
export default ArchivingDetail;
