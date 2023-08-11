import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import ToolTip from './components/common/ToolTip';
import SummaryModal from './components/common/SummaryModal';
import { myCarPagePath } from '../constant';

function Mycar() {
  const [page, setPage] = useState(0);

  const savedUserCar = localStorage.getItem('userCar');
  const initialUserCar = savedUserCar
    ? JSON.parse(savedUserCar)
    : {
        trim: {},
        engine: {},
        bodyType: {},
        wheelDrive: {},
        outerColor: {},
        innerColor: {},
        selectedOptions: [],
        price: [47720000],
        optionPrice: [],
      };

  const [userCar, setUserCar] = useState(initialUserCar);
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('userCar', JSON.stringify(userCar));
  }, [userCar]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const currentPath = window.location.pathname; // 현재 경로 가져오기
    const mycarPath = currentPath.match(/\/mycar\/(.*)/)[1];
    const currentPage = myCarPagePath.findIndex((url) => url === mycarPath);
    setPage(currentPage);
  }, []);

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
