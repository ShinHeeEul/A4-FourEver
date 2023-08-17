import { Outlet, useLoaderData, useOutletContext } from 'react-router-dom';

function RootTrim() {
  const { data } = useLoaderData();
  const { page, userCar, setUserCar } = useOutletContext();
  return <Outlet context={{ page, userCar, setUserCar, trimOptions: data }} />;
}

export default RootTrim;
