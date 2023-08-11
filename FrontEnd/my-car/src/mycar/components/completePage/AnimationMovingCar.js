import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import carImage from './image-91.png';
import { Heading1Medium } from '../../../style/typo';
import { useOutletContext } from 'react-router-dom';

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
`;

const slideInAndOut = keyframes`
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    left: 14%;
    
  }
`;

const TitleDiv = styled.div`
  position: absolute;
  left: 50%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 20px;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1; 
  }
`;
const TitleText = styled.span`
  color: whitesmoke;
  ${Heading1Medium}
  font-size: 30px;
  font-weight: 400;
  opacity: 0;
  animation: ${fadeIn} 3s forwards;
  filter: drop-shadow(0 0 0.75rem black);
`;

const TitleTextBig = styled(TitleText)`
  font-size: 37px;
`;

const CarImage = styled.img`
  height: 80%;
  width: auto;
  filter: drop-shadow(0 0 0.75rem white);
  animation: ${slideInAndOut} 1s ease-out;
  z-index: 1;
  position: sticky;
  left: 14%;
`;

function AnimationMovingCar() {
  const [removeModal, setRemoveModal] = useState(false);
  const { userCar } = useOutletContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRemoveModal(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (removeModal !== true) {
    return (
      <ModalBgDiv $removeModal={removeModal}>
        <Container $removeModal={removeModal}>
          <CarImage src={userCar.outerColor.rotation_image} alt="Car Image" />
          <TitleDiv>
            <div>
              <TitleText>당신만의 세상을 위한,</TitleText>
            </div>

            <TitleTextBig>펠리세이드가 완성되었습니다</TitleTextBig>
          </TitleDiv>
        </Container>
      </ModalBgDiv>
    );
  }
}

export default AnimationMovingCar;
