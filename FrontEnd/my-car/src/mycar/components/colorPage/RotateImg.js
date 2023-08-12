import { css, styled } from 'styled-components';

import { useState } from 'react';
const ImgContainer = styled.div`
  height: 430px;
  flex-shrink: 0;
  object-fit: cover;
  display: flex;
  justify-content: center;
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

  function handleMouseUp() {
    setIsMouseDown(false);
  }

  return (
    <ImgContainer
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseUp={handleMouseUp}
    >
      <img alt="trim" src={`${imagePathNew}/${imageIndex}.png`} />
    </ImgContainer>
  );
}

export default RotateImg;
