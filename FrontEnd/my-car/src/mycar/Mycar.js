import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import ToolTip from './components/common/ToolTip';
import SummaryModal from './components/common/SummaryModal';
import { myCarPagePath } from '../constant';
import UserCarProvider from '../context/mycar/UserCarProvider';

function Mycar() {
  const [page, setPage] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const currentPath = window.location.pathname; // 현재 경로 가져오기
    const mycarPath = currentPath.match(/\/mycar\/(.*)/)[1];
    const currentPage = myCarPagePath.findIndex((url) => url === mycarPath);
    setPage(currentPage);
  }, [location]);

  return (
    <UserCarProvider
      fromChivingState={
        location?.state?.reviewState || location?.state?.tempState
      }
    >
      <SummaryModal />
      <ToolTip />
      <NavBar page={page} />
      <Outlet context={{ page }} />
      <Footer setPage={setPage} page={page} />
    </UserCarProvider>
  );
}
export default Mycar;
