import { Outlet, useOutletContext } from 'react-router-dom';

function RootColor() {
  //   const { data } = useLoaderData();
  const { page, userCar, setUserCar } = useOutletContext();
  return <Outlet context={{ page, userCar, setUserCar }} />;
}
export default RootColor;
