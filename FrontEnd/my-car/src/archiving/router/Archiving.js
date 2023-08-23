import { styled } from 'styled-components';
import OptSelectionBar from '../components/OptSelectionBar';
import OptReviewHeader from '../components/OptReviewHeader';
import OptReviewCard from '../components/OptReviewCard';
import ArchivingProvider, {
  ModalContext,
} from '../../context/archiving/ArchivingProvider';
import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import WarningTooltip from '../components/WarningTooltip';
import Loading from '../../common/Loading';
import Onboarding from '../components/Onboarding';

const Container = styled.div`
  width: 100%;
  min-width: 1280px;

  position: relative;
  padding-top: 370px;
`;

const FixedContainer = styled.div`
  position: fixed;
  top: 150px;
  width: 100%;
`;

function Archiving() {
  const { data } = useLoaderData();
  const { loading } = useOutletContext();

  //온보딩 모달 관련
  const { firstBoarding } = useContext(ModalContext);
  const [modalShow, setModalShow] = useState(true);
  const onboardingOff = localStorage.getItem('onboardingOff');

  useEffect(() => {
    const body = document.querySelector('body');
    if (modalShow && !onboardingOff && firstBoarding) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [modalShow, onboardingOff, firstBoarding]);

  return (
    <>
      {loading ? (
        <Loading text={'후기를 불러오는 중입니다'} />
      ) : (
        <>
          {modalShow && !onboardingOff && firstBoarding && (
            <Onboarding data={data} setModalShow={setModalShow} />
          )}
          <Container>
            <FixedContainer>
              <OptSelectionBar />
              <OptReviewHeader />
            </FixedContainer>
            <OptReviewCard />
          </Container>
        </>
      )}
    </>
  );
}
export default Archiving;
