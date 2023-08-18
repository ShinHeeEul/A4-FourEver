import CompleteTopBanner from '../components/completePage/CompleteTopBanner';
import CompletedFunction from '../components/completePage/CompletedFunction';
import AnimationMovingCar from '../components/completePage/AnimationMovingCar';
import { useContext, useEffect } from 'react';
import NotFound from '../../error/NotFoundPage';
import { HeaderActionContext } from '../../Root';
import { useUserCarState } from '../hook/useUserCar';
function Complete() {
  const userCar = useUserCarState();
  const { setIsAccess } = useContext(HeaderActionContext);
  useEffect(() => {
    setIsAccess(true);
    return () => localStorage.removeItem('userCar');
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
