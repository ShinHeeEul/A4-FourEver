import { Outlet } from 'react-router-dom';
// import { useState } from 'react';
// import Trim from './routers/Trim.js';
// import Engine from './routers/Engine';
// import BodyType from './routers/BodyType';
// import WheelDrive from './routers/WheelDrive';
import NavBar from './components/NavBar';
import SummaryModal from './components/SummaryModal';

function Mycar() {
  // const [page, setPage] = useState(0);
  // const [options, setOptions] = useState({});

  return (
    <>
      <NavBar />
      <Outlet />
      <SummaryModal />
    </>
  );
}
export default Mycar;
