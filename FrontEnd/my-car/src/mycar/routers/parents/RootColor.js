import { Outlet, useLoaderData, useOutletContext } from 'react-router-dom';
import { MYCAR } from '../../../constant';

function RootColor() {
  const { data } = useLoaderData();
  const { page, userCar, setUserCar } = useOutletContext();
  const inColorOptions = data[MYCAR.COLOR.FILED.INCOLOR];
  const exColorOptions = data[MYCAR.COLOR.FILED.EXCOLOR];
  return (
    <Outlet
      context={{
        page,
        userCar,
        setUserCar,
        inColorOptions,
        exColorOptions,
      }}
    />
  );
}
export default RootColor;
