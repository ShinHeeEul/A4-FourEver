import { Outlet, useLoaderData, useOutletContext } from 'react-router-dom';
import { MYCAR } from '../../../constant';
import ServerErrorPage from '../../../error/ServerErrorPage';

function RootColor() {
  const { data, error } = useLoaderData();
  const { page, userCar, setUserCar } = useOutletContext();

  if (error) return <ServerErrorPage />;

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
