import CompleteTopBanner from '../components/completePage/CompleteTopBanner';
import CompletedFunction from '../components/completePage/CompletedFunction';
import AnimationMovingCar from '../components/completePage/AnimationMovingCar';
import { useEffect } from 'react';
import NotFound from '../../error/NotFoundPage';
import { useOutletContext } from 'react-router-dom';

function Complete() {
  const { userCar } = useOutletContext();
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
