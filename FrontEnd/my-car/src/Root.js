import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import Alert from './common/Alert';
import { useState, createContext } from 'react';

export const HeaderValueContext = createContext();
export const HeaderActionContext = createContext();
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
      <HeaderValueContext.Provider value={{ isAccess }}>
        <HeaderActionContext.Provider value={{ setIsAccess }}>
          <Header
            setShowCommonAlert={setShowCommonAlert}
            setIsMainBtn={setIsMainBtn}
          />
          <Outlet />
        </HeaderActionContext.Provider>
      </HeaderValueContext.Provider>
    </>
  );
}

export default Root;
