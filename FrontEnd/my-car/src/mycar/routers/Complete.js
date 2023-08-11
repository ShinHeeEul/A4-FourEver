import CompleteTopBanner from '../components/completePage/CompleteTopBanner';
import CompletedFunction from '../components/completePage/CompletedFunction';
import AnimationMovingCar from '../components/completePage/AnimationMovingCar';
import { useEffect } from 'react';

function Complete() {
  useEffect(() => {
    localStorage.removeItem('userCar');
  }, []);

  return (
    <>
      <AnimationMovingCar />
      <CompleteTopBanner />
      <CompletedFunction />
    </>
  );
}

export default Complete;
