import CompleteTopBanner from '../components/completePage/CompleteTopBanner';
import CompletedFunction from '../components/completePage/CompletedFunction';
import AnimationMovingCar from '../components/completePage/AnimationMovingCar';
import { useContext, useEffect } from 'react';
import NotFound from '../../error/NotFoundPage';
import { useOutletContext } from 'react-router-dom';
import { HeaderContext } from '../../Root';

function Complete() {
  const { userCar } = useOutletContext();
  const { setIsAccess } = useContext(HeaderContext);
  setIsAccess(true);
  useEffect(() => {
    localStorage.removeItem('userCar');
  }, []);

  if (!localStorage.getItem('userCar') || !userCar.trim?.id) {
    return <NotFound />;
  }

  return (
    <>
      <AnimationMovingCar />
      <CompleteTopBanner />
      <CompletedFunction />
    </>
  );
}

export default Complete;
