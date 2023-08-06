import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ToolTip from './components/ToolTip';
import SummaryModal from './components/SummaryModal';

function Mycar() {
  const [page, setPage] = useState(0);
  const [userCar, setUserCar] = useState({
    trim: 0,
    selectedOptions: [],
    price: [47720000],
    optionPrice: [],
  });
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  return (
    <>
      <SummaryModal
        showSummaryModal={showSummaryModal}
        userCar={userCar}
        price={{ trim: userCar.price, option: userCar.optionPrice }}
        setShowSummaryModal={setShowSummaryModal}
      />
      <ToolTip />
      <NavBar page={page} />
      <Outlet context={{ page, userCar, setUserCar }} />
      <Footer
        userCar={userCar}
        price={{ trim: userCar.price, option: userCar.optionPrice }}
        setPage={setPage}
        page={page}
        showSummaryModal={showSummaryModal}
        setShowSummaryModal={setShowSummaryModal}
      />
    </>
  );
}
export default Mycar;
