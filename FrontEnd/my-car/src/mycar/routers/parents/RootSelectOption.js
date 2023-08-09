import { Outlet, useOutletContext } from 'react-router-dom';

function RootSelectOption() {
  const { page, userCar, setUserCar } = useOutletContext();

  return <Outlet context={{ page, userCar, setUserCar }} />;
}
export default RootSelectOption;
