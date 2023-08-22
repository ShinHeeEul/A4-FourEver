import { Outlet, useLocation } from 'react-router-dom';
import Header from './common/Header';
import Alert from './common/Alert';
import { useState, createContext, useEffect } from 'react';

export const HeaderValueContext = createContext();
export const HeaderActionContext = createContext();
function Root() {
  const [showCommonAlert, setShowCommonAlert] = useState(false);
  const [isMainBtn, setIsMainBtn] = useState(false);

  const [isAccess, setIsAccess] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(true);

  const [clickLinkBtn, setClickLinkBtn] = useState();

  const location = useLocation();
  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/' || pathname === '/auth') {
      setIsLoginPage(true);
    } else {
      setIsLoginPage(false);
    }
  }, [location]);

  return (
    <>
      <Alert
        showCommonAlert={showCommonAlert}
        setShowCommonAlert={setShowCommonAlert}
        isMainBtn={isMainBtn}
        clickLinkBtn={clickLinkBtn}
        setIsMainBtn={setIsMainBtn}
      />
      <HeaderValueContext.Provider value={{ isAccess, isMainBtn }}>
        <HeaderActionContext.Provider value={{ setIsAccess }}>
          <Header
            setShowCommonAlert={setShowCommonAlert}
            setIsMainBtn={setIsMainBtn}
            clickLinkBtn={clickLinkBtn}
            setClickLinkBtn={setClickLinkBtn}
            isLoginPage={isLoginPage}
          />
          <Outlet />
        </HeaderActionContext.Provider>
      </HeaderValueContext.Provider>
    </>
  );
}

export default Root;
