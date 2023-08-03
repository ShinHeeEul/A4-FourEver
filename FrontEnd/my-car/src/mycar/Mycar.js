import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import SummaryModal from './components/SummaryModal';

function Mycar() {
  const [page, setPage] = useState(0);
  const [userCar, setUserCar] = useState({});

  return (
    <>
      <NavBar page={page} />
      <Outlet setUserCar={setUserCar} />
      <SummaryModal userCar={userCar} setPage={setPage} page={page} />
    </>
  );
}
export default Mycar;
