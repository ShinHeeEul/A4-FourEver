import { Outlet, useLoaderData, useOutletContext } from 'react-router-dom';
import ServerErrorPage from '../../../error/ServerErrorPage';

function RootTrim() {
  const { data, error } = useLoaderData();
  const { page, userCar, setUserCar } = useOutletContext();

  if (error) return <ServerErrorPage />;

  return <Outlet context={{ page, userCar, setUserCar, trimOptions: data }} />;
}

export default RootTrim;
