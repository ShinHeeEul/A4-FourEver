import { css, styled } from 'styled-components';
import palette from '../../../style/styleVariable';
import { Body4Regular, Heading3Medium } from '../../../style/typo';

const EachColorWrap = styled.div`
  width: 333px;
  display: flex;
  flex-direction: column;
  color: ${palette.Black};
`;
const ColorTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 9px;
  h2 {
    ${Heading3Medium}
  }
  span {
    ${Body4Regular}
  }
`;
const ColorImgWrap = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  span {
    ${Body4Regular}
  }
  text-align: center;
  position: relative;
`;
const ColorImg = styled.img`
  border-radius: 8px;
  box-sizing: border-box;
  ${(props) =>
    props.$isActive &&
    css`
      border: 3px solid #00aad2;
    `}
`;
const ColorOptionsWrap = styled.div`
  display: flex;
  padding-top: 18px;
  width: 100%;
  ${(props) =>
    props.$title === '외장 색상'
      ? css`
          flex-wrap: wrap;
          gap: 10px;
          ${ColorImgWrap} {
            gap: 8px;
            width: 90px;
            ${ColorImg} {
              width: 100%;
              height: 90px;
            }
          }
        `
      : css`
          gap: 20px;
          flex-direction: column;

          ${ColorImgWrap} {
            width: 100%;
            height: 68px;
            gap: 16px;
            ${ColorImg} {
              width: 100%;
              height: 100%;
            }
          }
        `}
`;
const CheckIconWrap = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  width: 22px;
  height: 22px;
  ${(props) =>
    props.$isActive &&
    css`
      display: block;
    `}
`;

function ColorComponents({ title, selected, options, optionClick }) {
  return (
    <EachColorWrap>
      <ColorTitleWrap>
        <h2>{title}</h2>
        <span>{options[selected].name}</span>
      </ColorTitleWrap>
      <UnderLine />
      <ColorOptionsWrap $title={title}>
        {options.map((option, index) => {
          return (
            <ColorImgWrap
              key={index}
              onClick={() => optionClick({ index, option })}
            >
              <CheckIconWrap $isActive={index === selected} src={option.src}>
                <CheckIcon />
              </CheckIconWrap>
              <ColorImg
                $isActive={index === selected}
                src={option.color_image}
              />
              {title === '외장 색상' && <span>{option.name}</span>}
            </ColorImgWrap>
          );
        })}
      </ColorOptionsWrap>
    </EachColorWrap>
  );
}

function UnderLine() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="331"
      height="2"
      viewBox="0 0 331 2"
      fill="none"
    >
      <path d="M0 1L331 0.999971" stroke="#DCDCDC" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <circle cx="11" cy="11" r="11" fill="#00AAD2" />
      <path
        d="M6 11.5L9.33333 15L16 8"
        stroke="#F6F3F2"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ColorComponents;
