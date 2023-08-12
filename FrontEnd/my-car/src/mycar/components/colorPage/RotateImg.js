import { css, styled } from 'styled-components';
import palette from '../../../style/styleVariable';
import { useState } from 'react';
import { Heading4Medium } from '../../../style/typo';

const ImgContainer = styled.div`
  width: 700px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  align-items: center;
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

function RotateImg({ selectedOption }) {
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
      {Array.from({ length: 60 }, (_, index) => (
        <CarImg
          $isShow={index + 1 === imageIndex}
          alt="trim"
          src={`${imagePathNew}/${index + 1}.png`}
        />
      ))}

      <Ellipse>
        <EllipseTextDiv>
          <EllipseText>360°</EllipseText>
        </EllipseTextDiv>
      </Ellipse>
    </ImgContainer>
  );
}

export default RotateImg;
