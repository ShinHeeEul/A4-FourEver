import { styled } from 'styled-components';
import Btn from './components/EachPageBtn';
import ToMycar from './components/ToMycar';
import ToArchiving from './components/ToArchiving';
import ToMychiving from './components/ToMychiving';
import MainHeader from './components/MainHeader';
import { useState, useEffect } from 'react';

function Main() {
  const [currentDisplay, setCurrentDisplay] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDisplay((prevDisplay) => (prevDisplay % 3) + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <MainHeader $DisplayOrder={currentDisplay} />
      {currentDisplay === 1 && <ToMycar />}
      {currentDisplay === 2 && <ToArchiving />}
      {currentDisplay === 3 && <ToMychiving />}
    </>
  );
}
export default Main;
