import { styled } from 'styled-components';
import palette from '../../../style/styleVariable';
import { bodyTypeInfo } from '../../../constant';
import { useState } from 'react';

const ImgsContainer = styled.div`
  position: absolute;
  top: 0;
  left: -70px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ImgWrap = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  box-sizing: border-box;
  border: ${(props) => props.$isActive && `2px solid #00AAD2`};
  overflow: hidden;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

function ImgSelect({ selected, imgSelected, setImgSelected }) {
  const imgClick = (index) => {
    setImgSelected(index);
  };

  return (
    <ImgsContainer>
      {bodyTypeInfo[selected].src.map((src, index) => (
        <ImgWrap
          key={index}
          $isActive={index === imgSelected}
          onClick={() => imgClick(index)}
        >
          <Img src={src} />
        </ImgWrap>
      ))}
    </ImgsContainer>
  );
}
export default ImgSelect;
