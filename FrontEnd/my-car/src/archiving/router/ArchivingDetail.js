import { useParams } from 'react-router-dom';
import ChivingHeader from '../../common/ChivingHeader';

function ArchivingDetail() {
  const { id } = useParams();
  return <ChivingHeader />;
}
export default ArchivingDetail;
