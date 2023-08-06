import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import Alert from './common/Alert';
import { useState } from 'react';

function Root() {
  const [showCommonAlert, setShowCommonAlert] = useState(false);
  return (
    <>
      <Alert
        showCommonAlert={showCommonAlert}
        setShowCommonAlert={setShowCommonAlert}
      />
      <Header setShowCommonAlert={setShowCommonAlert} />
      <Outlet />
    </>
  );
}

export default Root;
