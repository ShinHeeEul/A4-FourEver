import { styled, keyframes } from 'styled-components';
import Btn from './components/EachPageBtn';
import ToMycar from './components/ToMycar';
import ToArchiving from './components/ToArchiving';
import ToMychiving from './components/ToMychiving';
import MainHeader from './components/MainHeader';
import Pagination from './components/Pagination';
import { useState, useEffect, useContext } from 'react';
import { HeaderActionContext } from '../Root';
import { useNavigate } from 'react-router-dom';

const BgDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const AnimationDiv = styled.div``;

function Main() {
  const { setIsAccess } = useContext(HeaderActionContext);
  const [currentDisplay, setCurrentDisplay] = useState(1);
  // setIsAccess(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (!token || token === undefined || token === 'undefined') {
      // navigate('/');
    }

    const interval = setInterval(() => {
      setCurrentDisplay((prevDisplay) => (prevDisplay % 3) + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDisplay]);

  return (
    <BgDiv>
      <MainHeader />
      <AnimationDiv>
        <ToMycar $currentDisplay={currentDisplay} />
        <ToArchiving $currentDisplay={currentDisplay} />
        <ToMychiving $currentDisplay={currentDisplay} />
      </AnimationDiv>

      <Pagination
        $currentDisplay={currentDisplay}
        $setCurrentDisplay={setCurrentDisplay}
      />
    </BgDiv>
  );
}
export default Main;
