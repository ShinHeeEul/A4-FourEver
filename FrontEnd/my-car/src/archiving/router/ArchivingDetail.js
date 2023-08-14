import { useParams } from 'react-router-dom';
import ChivingHeader from '../../common/ChivingHeader';
import DetailBanner from '../components/DetailBanner';

function ArchivingDetail() {
  const { id } = useParams();
  return (
    <>
      <DetailBanner />
    </>
  );
}
export default ArchivingDetail;
