import { css, styled } from 'styled-components';
import { Container } from './Trim';
import { LeftWrap, OptionImgWrap, RightWrap } from './Engine';
import TitlePriceTag from '../components/TitlePriceTag';
import { innerColorInfo, outerColorInfo } from '../../constant';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Body4Regular, Heading3Medium } from '../../style/typo';
import palette from '../../style/styleVariable';

const ColorContainer = styled(Container)`
  flex-direction: row;
  gap: 75px;
`;
const ColorRightWrap = styled(RightWrap)`
  gap: 34px;
`;
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
function CheckIcon({ $isActive }) {
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
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function ColorComponents({ title, selected, options, optionClick }) {
  return (
    <EachColorWrap>
      <ColorTitleWrap>
        <h2>{title}</h2>
        <span>{options[selected].name}</span>
      </ColorTitleWrap>
      <UnderLine />
      <ColorOptionsWrap $title={title}>
        {options.map(({ src, name }, index) => {
          return (
            <>
              <ColorImgWrap onClick={() => optionClick(index)}>
                <CheckIconWrap $isActive={index === selected} src={src}>
                  <CheckIcon />
                </CheckIconWrap>
                <ColorImg $isActive={index === selected} src={src} />
                {title === '외장 색상' && <span>{name}</span>}
              </ColorImgWrap>
            </>
          );
        })}
      </ColorOptionsWrap>
    </EachColorWrap>
  );
}

function Color() {
  const { setUserCar, userCar, page } = useOutletContext();
  const [selectedOption, setSelectedOption] = useState(outerColorInfo[2]);
  const [outerSelected, setOuterSelected] = useState(userCar.outerColor || 2);
  const [innerSelected, setInnerSelected] = useState(userCar.innerColor || 0);

  const outerClick = (index) => {
    const Price = [...userCar.price];
    Price[page] = parseInt(outerColorInfo[index].price.replace(/,/g, ''), 10);
    setUserCar((prevState) => ({
      ...prevState,
      outerColor: index,
      price: Price,
    }));
    setOuterSelected(index);
    setSelectedOption(outerColorInfo[index]);
  };

  const innerClick = (index) => {
    setUserCar((prevState) => ({
      ...prevState,
      innerColor: index,
    }));
    setInnerSelected(index);
    setSelectedOption(innerColorInfo[index]);
  };

  useEffect(() => {
    if (!userCar.innerColor && !userCar.outerColor) {
      setUserCar((prevState) => ({
        ...prevState,
        innerColor: 0,
        outerColor: 2,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ColorContainer>
      <LeftWrap>
        <OptionImgWrap></OptionImgWrap>
        <TitlePriceTag selectedOption={selectedOption} />
      </LeftWrap>
      <ColorRightWrap>
        <ColorComponents
          title="외장 색상"
          options={outerColorInfo}
          selected={outerSelected}
          optionClick={outerClick}
        />
        <ColorComponents
          title="내장 색상"
          options={innerColorInfo}
          selected={innerSelected}
          optionClick={innerClick}
        />
      </ColorRightWrap>
    </ColorContainer>
  );
}
export default Color;
