import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { Heading1Medium } from '../../../style/typo';
import { useOutletContext } from 'react-router-dom';
import { useUserCarState } from '../../hook/useUserCar';

const ModalBgDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

const slideInAndOut = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30%);
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
    left: 13%;
    
  }
`;

const TitleDiv = styled.div`
  position: absolute;
  left: 50%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 50px;
`;
const fadeIn = keyframes`
  from {
    transform: translateY(25px);
    opacity: 0.3;
  }
  to {
    transform: translateY(0px);
    opacity: 1; 
  }
`;

const TitleText = styled.span`
  color: whitesmoke;
  ${Heading1Medium}
  font-size: 26px;
  font-weight: 400;
  opacity: 0.3;
  transform: translateY(25px);
  animation: ${fadeIn} 1s ease-in-out forwards;
  /* animation-delay: 0.2s; */
  filter: drop-shadow(0 0 0.75rem black);
`;

const TitleTextBig = styled(TitleText)`
  font-size: 40px;
`;

const CarImage = styled.img`
  height: 80%;
  width: auto;
  filter: drop-shadow(0 0 0.75rem white);
  animation: ${slideInAndOut} 1s ease-out;
  z-index: 1;
  position: sticky;
  left: 13%;
`;

function AnimationMovingCar({ loading }) {
  const [removeModal, setRemoveModal] = useState(false);
  const userCar = useUserCarState();

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('no-scroll');
    const timer = setTimeout(() => {
      body.classList.remove('no-scroll');
      setRemoveModal(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <ModalBgDiv>
        <Container $removeModal={removeModal}>
          <TitleDiv style={{ left: '30%' }}>
            <TitleTextBig>내 차 만들기를 완료하는 중입니다</TitleTextBig>
          </TitleDiv>
        </Container>
      </ModalBgDiv>
    );
  }

  if (!removeModal) {
    return (
      <ModalBgDiv $removeModal={removeModal}>
        <Container $removeModal={removeModal}>
          <CarImage src={userCar.outerColor.rotation_image} alt="Car Image" />
          <TitleDiv>
            <TitleText>당신만의 세상을 위한,</TitleText>

            <TitleTextBig>팰리세이드가 완성되었습니다</TitleTextBig>
          </TitleDiv>
        </Container>
      </ModalBgDiv>
    );
  }
}

export default AnimationMovingCar;
