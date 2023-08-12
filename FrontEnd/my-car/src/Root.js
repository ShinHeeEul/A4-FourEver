import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import Alert from './common/Alert';
import { useState, createContext } from 'react';

export const HeaderContext = createContext();

function Root() {
  const [showCommonAlert, setShowCommonAlert] = useState(false);
  const [isMainBtn, setIsMainBtn] = useState(false);
  const [isAccess, setIsAccess] = useState(true);
  return (
    <>
      <Alert
        showCommonAlert={showCommonAlert}
        setShowCommonAlert={setShowCommonAlert}
        isMainBtn={isMainBtn}
        setIsMainBtn={setIsMainBtn}
      />
      <HeaderContext.Provider value={{ isAccess, setIsAccess }}>
        <Header
          setShowCommonAlert={setShowCommonAlert}
          setIsMainBtn={setIsMainBtn}
        />
        <Outlet />
      </HeaderContext.Provider>
    </>
  );
}

export default Root;
