import { Outlet } from 'react-router-dom';
import ChivingHeader from '../common/ChivingHeader';

function RootMychiving() {
  return (
    <>
      <ChivingHeader />
      <Outlet context={{}} />
    </>
  );
}
export default RootMychiving;
