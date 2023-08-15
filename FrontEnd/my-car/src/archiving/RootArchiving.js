import { Outlet, useLocation } from 'react-router-dom';
import ChivingHeader from '../common/ChivingHeader';

function RootArchiving() {
  const { state } = useLocation();
  return (
    <>
      <ChivingHeader fromMycar={state} />
      <Outlet />
    </>
  );
}
export default RootArchiving;
