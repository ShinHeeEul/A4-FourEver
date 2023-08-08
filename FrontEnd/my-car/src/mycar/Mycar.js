import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ToolTip from './components/ToolTip';
import SummaryModal from './components/SummaryModal';
import {
  bodyTypeInfo,
  carCardInfo,
  engineInfo,
  innerColorInfo,
  outerColorInfo,
  wheelDriveInfo,
} from '../constant';

function Mycar() {
  const [page, setPage] = useState(0);
  const [userCar, setUserCar] = useState({
    trim: carCardInfo[0],
    engine: engineInfo[0],
    bodyType: bodyTypeInfo[0],
    wheelDrive: wheelDriveInfo[0],
    outerColor: outerColorInfo[2],
    innerColor: innerColorInfo[0],
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
