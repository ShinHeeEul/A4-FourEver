import { useParams } from 'react-router-dom';
import ChivingHeader from '../../common/ChivingHeader';
import DetailBanner from '../components/DetailBanner';
import { styled } from 'styled-components';
import { Body1Regular, Heading1Bold } from '../../style/typo';
import AdditionalInfo from '../components/AdditionalInfo';

function ArchivingDetail() {
  const { id } = useParams();
  return (
    <>
      <DetailBanner />
      <AdditionalInfo />
    </>
  );
}
export default ArchivingDetail;
