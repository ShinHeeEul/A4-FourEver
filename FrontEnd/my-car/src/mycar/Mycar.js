import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ToolTip from './components/ToolTip';

function Mycar() {
  const [page, setPage] = useState(0);
  const [userCar, setUserCar] = useState({
    trim: 0,
    selectedOptions: [],
    price: [47720000],
  });

  return (
    <>
      <ToolTip />
      <NavBar page={page} />
      <Outlet context={{ page, userCar, setUserCar }} />
      <Footer
        userCar={userCar}
        price={userCar.price}
        setPage={setPage}
        page={page}
      />
    </>
  );
}
export default Mycar;
