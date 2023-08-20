import CompleteTopBanner from '../components/completePage/CompleteTopBanner';
import CompletedFunction from '../components/completePage/CompletedFunction';
import AnimationMovingCar from '../components/completePage/AnimationMovingCar';
import { useContext, useEffect, useState } from 'react';
import NotFound from '../../error/NotFoundPage';
import { HeaderActionContext } from '../../Root';
import { useUserCarState } from '../hook/useUserCar';
import ServerErrorPage from '../../error/ServerErrorPage';
import { UserCarPostRequest } from '../UserCarPostAPI';

function Complete() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notLogin, setNotLogin] = useState(false);

  const userCar = useUserCarState();

  const { setIsAccess } = useContext(HeaderActionContext);

  const FetchCompleteCar = async () => {
    try {
      const res = await UserCarPostRequest({});
      if (res.status === 400) {
        setNotLogin(true);
      }
      setLoading(false);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    setIsAccess(true);
    FetchCompleteCar();

    return () => {
      localStorage.removeItem('userCar');
      localStorage.setItem('myChiving_id', 0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!localStorage.getItem('userCar') && !userCar.trim?.id) {
    return <NotFound />;
  }
  if (error) return <ServerErrorPage />;
  if (notLogin) return <NotFound />;

  return (
    <>
      <AnimationMovingCar loading={loading} />
      <CompleteTopBanner />
      <CompletedFunction />
    </>
  );
}

export default Complete;
