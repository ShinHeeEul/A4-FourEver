import CompleteTopBanner from '../components/completePage/CompleteTopBanner';
import CompletedFunction from '../components/completePage/CompletedFunction';
import AnimationMovingCar from '../components/completePage/AnimationMovingCar';
import { useEffect } from 'react';
import NotFound from '../../error/NotFoundPage';

function Complete() {
  useEffect(() => {
    localStorage.removeItem('userCar');
  }, []);

  if (!localStorage.getItem('userCar')) {
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
