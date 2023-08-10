import { css, styled } from 'styled-components';
import { Container } from './Model';
import { LeftWrap, OptionImgWrap, RightWrap } from './Engine';
import TitlePriceTag from '../components/TitlePriceTag';
import { innerColorInfo, outerColorInfo } from '../../constant';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Body4Regular, Heading3Medium } from '../../style/typo';
import palette from '../../style/styleVariable';
import { SelectedIndex } from '../util/SelectedIndex';
import { MYCAR } from '../../constant';

import TrimImg from '../components/TrimImg';

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

function Color() {
  const { setUserCar, userCar, page, inColorOptions, exColorOptions } =
    useOutletContext();

  const [selectedOption, setSelectedOption] = useState(
    userCar.outerColor.id ? userCar.outerColor : exColorOptions[2],
  );
  const [outerSelected, setOuterSelected] = useState(
    userCar.outerColor?.id ? userCar.outerColor?.id - 1 : 2,
  );

  const [innerSelected, setInnerSelected] = useState(
    userCar.innerColor?.id ? userCar.innerColor?.id - 1 : 0,
  );
  const [activeColorFiled, setActiveColorFiled] = useState(
    MYCAR.COLOR.FILED.EXCOLOR,
  );

  const outerClick = ({ option, index }) => {
    const Price = [...userCar.price];
    Price[page] = option.price;
    setUserCar((prevState) => ({
      ...prevState,
      outerColor: option,
      price: Price,
    }));
    setOuterSelected(index);
    setSelectedOption(option);
    setActiveColorFiled(MYCAR.COLOR.FILED.EXCOLOR);
  };

  const innerClick = ({ option, index }) => {
    setUserCar((prevState) => ({
      ...prevState,
      innerColor: option,
    }));
    setInnerSelected(index);
    setSelectedOption(option);
    setActiveColorFiled(MYCAR.COLOR.FILED.INCOLOR);
  };

  useEffect(() => {
    if (!userCar.outerColor?.name && !userCar.innerColor?.name) {
      console.log('초기화');
      setUserCar((prevState) => ({
        ...prevState,
        outerColor: exColorOptions[2],
        innerColor: inColorOptions[0],
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ColorContainer>
      <LeftWrap>
        <TrimImg
          src={selectedOption[MYCAR.COLOR.FILED.IMG[activeColorFiled]]}
        />
        <TitlePriceTag
          selectedOption={selectedOption}
          tagFiled={MYCAR.COLOR.FILED.TAGS[activeColorFiled]}
        />
      </LeftWrap>
      <ColorRightWrap>
        <ColorComponents
          title="외장 색상"
          options={exColorOptions}
          selected={outerSelected}
          optionClick={outerClick}
        />
        <ColorComponents
          title="내장 색상"
          options={inColorOptions}
          selected={innerSelected}
          optionClick={innerClick}
        />
      </ColorRightWrap>
    </ColorContainer>
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

export default Color;
