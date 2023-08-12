import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import Alert from './common/Alert';
import { useState } from 'react';

function Root() {
  const [showCommonAlert, setShowCommonAlert] = useState(false);
  const [isMainBtn, setIsMainBtn] = useState(false);
  const [isAchivingBtn, setIsAchivingBtn] = useState(false);
  const [isMychivingBtn, setIsMychivingBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); //main, mycar, archiving, mychiving
  return (
    <>
      <Alert
        showCommonAlert={showCommonAlert}
        setShowCommonAlert={setShowCommonAlert}
        isMainBtn={isMainBtn}
        setIsMainBtn={setIsMainBtn}
        isAchivingBtn={isAchivingBtn}
        setIsAchivingBtn={setIsAchivingBtn}
      />
      <Header
        setShowCommonAlert={setShowCommonAlert}
        setIsAchivingBtn={setIsAchivingBtn}
        setIsMainBtn={setIsMainBtn}
      />
      <Outlet />
    </>
  );
}

export default Root;
