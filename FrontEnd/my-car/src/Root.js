import { Outlet } from 'react-router-dom';
import Header from './common/Header';

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
