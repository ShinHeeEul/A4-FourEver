import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import Alert from './common/Alert';
import { useState } from 'react';

function Root() {
  const [showCommonAlert, setShowCommonAlert] = useState(false);
  const [isMain, setIsMain] = useState(false);
  const [isAchiving, setIsAchiving] = useState(false);
  return (
    <>
      <Alert
        showCommonAlert={showCommonAlert}
        setShowCommonAlert={setShowCommonAlert}
        isMain={isMain}
        setIsMain={setIsMain}
        isAchiving={isAchiving}
        setIsAchiving={setIsAchiving}
      />
      <Header
        setShowCommonAlert={setShowCommonAlert}
        setIsAchiving={setIsAchiving}
        setIsMain={setIsMain}
      />
      <Outlet />
    </>
  );
}

export default Root;
