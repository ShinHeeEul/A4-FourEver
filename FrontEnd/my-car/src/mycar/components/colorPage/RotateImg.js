import { keyframes, styled } from 'styled-components';
import palette from '../../../style/styleVariable';
import { useState } from 'react';
import { Body3Medium, Heading4Medium } from '../../../style/typo';

const ImgContainer = styled.div`
  width: 700px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  align-items: center;
  height: 384px;
`;

const CarImg = styled.img`
  ${(props) => {
    if (props.$isShow) {
      return `display: block;
          object-fit: cover;
          width: 100%;
          height: 100%;
          transition: transform 0.2s ease;
        `;
    }
    return `display: none`;
  }}
`;
const Ellipse = styled.div`
  width: 600px;
  height: 86px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  position: absolute;
  top: 250px;
  border: 1px solid ${palette.Sand};
  background: ${palette.LightSand};
  z-index: -1;
`;

const EllipseTextDiv = styled.div`
  margin-left: 250px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30%;
  text-align: center;
  height: 60px;
  width: 100px;
  background: radial-gradient(white 10%, transparent);
  filter: drop-shadow(0 0 0.9rem white);
`;
const EllipseText = styled.span`
  ${Heading4Medium}
  color: ${palette.DarkGray};
  text-shadow: 0 0 3px white;
`;

const Aopacity = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const LetterWrap = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  div {
    ${Body3Medium}
    font-size: 30px;
    animation-name: ${Aopacity};
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
    animation-direction: linear;
    color: white;
  }
  .l-1 {
    animation-delay: 0.48s;
  }
  .l-2 {
    animation-delay: 0.6s;
  }
  .l-3 {
    animation-delay: 0.72s;
  }
  .l-4 {
    animation-delay: 0.84s;
  }
  .l-5 {
    animation-delay: 0.96s;
  }
  .l-6 {
    animation-delay: 1.08s;
  }
  .l-7 {
    animation-delay: 1.2s;
  }
  .l-8 {
    animation-delay: 1.32s;
  }
  .l-9 {
    animation-delay: 1.44s;
  }
  .l-10 {
    animation-delay: 1.56s;
  }
`;
const LoadingWrap = styled.div`
  position: relative;
  ${LetterWrap} {
  }
  img {
    filter: blur(3px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
  }
`;

function RotateImg({ selectedOption, loading }) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [imageIndex, setImageIndex] = useState(1);

  const imageCnt = 60;
  const imagePath = selectedOption.rotation_image;

  const imagePathArr = imagePath.split('/');
  const imagePathNew = imagePathArr.slice(0, -1).join('/');

  function handleMouseMove(e) {
    if (isMouseDown) {
      const deltaX = e.clientX - startX;
      const threshold = 2;

      if (deltaX > threshold) {
        setImageIndex(
          (prevIndex) => ((prevIndex - 2 + imageCnt) % imageCnt) + 1,
        );
        setStartX(e.clientX);
      } else if (deltaX < -threshold) {
        setImageIndex((prevIndex) => (prevIndex % imageCnt) + 1);
        setStartX(e.clientX);
      }
    }
  }

  function handleMouseDown(e) {
    setIsMouseDown(true);
    setStartX(e.clientX);
  }

  function handleMouseBlock() {
    setIsMouseDown(false);
  }

  return (
    <ImgContainer
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseUp={handleMouseBlock}
      onMouseLeave={handleMouseBlock}
    >
      {loading ? (
        <LoadingWrap>
          <LetterWrap class="letter-holder">
            <div class="l-1 letter">L</div>
            <div class="l-2 letter">o</div>
            <div class="l-3 letter">a</div>
            <div class="l-4 letter">d</div>
            <div class="l-5 letter">i</div>
            <div class="l-6 letter">n</div>
            <div class="l-7 letter">g</div>
            <div class="l-8 letter">.</div>
            <div class="l-9 letter">.</div>
            <div class="l-10 letter">.</div>
          </LetterWrap>
          <img alt="" src={`${imagePathNew}/1.png`} />
        </LoadingWrap>
      ) : (
        Array.from({ length: 60 }, (_, index) => (
          <CarImg
            $isShow={index + 1 === imageIndex}
            alt="trim"
            src={`${imagePathNew}/${index + 1}.png`}
          />
        ))
      )}

      <Ellipse>
        <EllipseTextDiv>
          <EllipseText>360°</EllipseText>
        </EllipseTextDiv>
      </Ellipse>
    </ImgContainer>
  );
}

export default RotateImg;
