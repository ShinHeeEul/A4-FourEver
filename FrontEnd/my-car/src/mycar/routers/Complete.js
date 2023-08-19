import CompleteTopBanner from '../components/completePage/CompleteTopBanner';
import CompletedFunction from '../components/completePage/CompletedFunction';
import AnimationMovingCar from '../components/completePage/AnimationMovingCar';
import { useContext, useEffect, useState } from 'react';
import NotFound from '../../error/NotFoundPage';
import { HeaderActionContext } from '../../Root';
import { useUserCarState } from '../hook/useUserCar';
import { BASIC_SERVER_URL } from '../../constant';
import ServerErrorPage from '../../error/ServerErrorPage';
import Loading from '../../common/Loading';

function Complete() {
  const [removeModal, setRemoveModal] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notLogin, setNotLogin] = useState(false);

  const userCar = useUserCarState();
  const trimPrice = userCar.price.reduce((acc, current) => acc + current, 0);
  const optionPrice = userCar.optionPrice.reduce(
    (acc, current) => acc + current,
    0,
  );
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString();
  const selectedOptionIDs = userCar.selectedOptions.map((item) => item.id);

  const { setIsAccess } = useContext(HeaderActionContext);

  const FetchCompleteCar = async () => {
    const accessToken = localStorage.getItem('jwtToken');
    try {
      const res = await fetch(`${BASIC_SERVER_URL}/myChiving/create?userId=1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          is_end: 1,
          car_id: 1,
          trim_id: userCar.trim.id,
          engine_id: userCar.engine.id,
          body_id: userCar.bodyType.id,
          drive_id: userCar.wheelDrive.id,
          ex_color_id: userCar.outerColor.id,
          in_color_id: userCar.innerColor.id,
          price: trimPrice + optionPrice,
          updated_at: formattedDate,
          optionIds: selectedOptionIDs,
        }),
      });
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

    return () => localStorage.removeItem('userCar');
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
