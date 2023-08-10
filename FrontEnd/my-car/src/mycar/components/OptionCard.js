import { css, styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Medium, Body4Regular } from '../../style/typo';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export const DimmedOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ul {
    ${Body4Regular}
    margin-top: 35px;
    color: ${palette.Neutral};
    font-size: 12px;
    width: 70%;
    padding: 0 10% 0 20%;
    height: 65%;
    overflow: auto;
    opacity: 0;
    transition: all 0.9s;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      list-style: disc;
      margin-bottom: 5px;
      list-style-position: inside;
      text-indent: -15px;
    }
  }
`;

const Container = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
    display: none;
    &:first-of-type {
      left: -50px;
    }
    &:last-child {
      right: -40px;
    }
  }
`;

export const CardsWrap = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const ScrollWrapper = styled.div`
  display: flex;
  gap: 10px;
  transition: transform 0.3s ease;
  transform: ${(props) => `translateX(${props.$scroll}px)`};
`;

const Card = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 160px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 2px solid white;
  box-sizing: border-box;

  background-color: ${(props) =>
    props.$isAdded ? 'rgba(0, 44, 95, 0.10)' : palette.LightSand};
  ${(props) =>
    props.$isActive &&
    css`
      border: 2px solid ${palette.Primary};
    `}

  ${(props) =>
    !props.$isBasicTab &&
    css`
      &:hover{
        ${DimmedOverlay}{
          opacity: 1;
          ul{
            opacity: 1;
            margin-top: 15px;
          }
        }}
      }
      }
    `} 

  cursor: pointer;
`;
const CardImg = styled.img`
  width: 160px;
  height: 93px;
`;

export const CardDetailWrap = styled.div`
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${Body3Medium}
`;

const CardDetailTextWrap = styled.div`
  h3 {
    ${Body3Medium}
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const AddOrRemoveButton = styled.button`
  width: 100%;
  height: 30px;

  color: #385da2;
  background-color: ${palette.Neutral};
  border-radius: 8px;
  ${Body3Medium}
  cursor: pointer;
  z-index: 0;

  ${(props) =>
    props.$isAdded
      ? css`
          background-color: ${palette.Primary};
          border: 2px solid ${palette.Primary};
          color: white;
        `
      : css`
          background-color: ${palette.Neutral};
          color: #385da2;
          border: 2px solid #385da2;
        `}
`;

function LeftArrow({ reference, clickHandler }) {
  return (
    <svg
      ref={reference}
      onClick={() => clickHandler('left')}
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
    >
      <g clipPath="url(#clip0_577_15836)">
        <path
          d="M31 36L19 24L31 12"
          stroke="#002C5F"
          strokeOpacity="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_577_15836">
          <rect width="45" height="45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
function RightArrow({ reference, clickHandler }) {
  return (
    <svg
      ref={reference}
      onClick={() => clickHandler('right')}
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
    >
      <g clipPath="url(#clip0_577_15837)">
        <path
          d="M17 36L29 24L17 12"
          stroke="#002C5F"
          strokeOpacity="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_577_15837">
          <rect
            width="45"
            height="45"
            fill="white"
            transform="matrix(-1 0 0 1 45 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function OptionCard({
  optionInfo,
  selected,
  optionClick,
  isBasicTab,
  addOption,
  removeOption,
  setModal,
  basicIndex,
}) {
  const { userCar } = useOutletContext();
  const leftArrow = useRef();
  const rightArrow = useRef();
  const scrollWrap = useRef();
  const cardWrap = useRef();

  const isAdded = (eachOption) => {
    const found = userCar.selectedOptions.some(
      (option) => option.id === eachOption.id,
    );
    return found;
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setScrollPosition(0);
    leftArrow.current.style.display = 'none';
    if (optionInfo.length > 6) {
      rightArrow.current.style.display = 'block';
    } else {
      rightArrow.current.style.display = 'none';
    }
  }, [optionInfo.length, basicIndex]);

  const scrollContainer = (direction) => {
    const cardWrapWidth = cardWrap.current.offsetWidth;
    const scrollWrapWidth = scrollWrap.current.offsetWidth;
    const scrollAmount =
      direction === 'left' ? cardWrapWidth : Number(`-${cardWrapWidth}`);
    const newScrollPosition = scrollPosition + scrollAmount;

    console.log(newScrollPosition);
    console.log(cardWrapWidth);
    console.log(scrollWrapWidth);
    if (newScrollPosition === 0) {
      rightArrow.current.style.display = 'block';
      leftArrow.current.style.display = 'none';
    } else if (
      newScrollPosition - cardWrapWidth <
      Number(`-${scrollWrapWidth}`)
    ) {
      rightArrow.current.style.display = 'none';
      leftArrow.current.style.display = 'block';
    } else {
      rightArrow.current.style.display = 'block';
      leftArrow.current.style.display = 'block';
    }

    setScrollPosition(newScrollPosition);
  };

  return (
    <Container>
      <CardsWrap ref={cardWrap}>
        <ScrollWrapper
          ref={scrollWrap}
          $scroll={scrollPosition}
          // style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {optionInfo.map((option, index) => {
            const addState = isAdded(option);
            return (
              <Card
                $isAdded={!isBasicTab && addState}
                $isActive={!isBasicTab && index === selected}
                $isBasicTab={isBasicTab}
                key={index}
                onClick={() => {
                  if (!isBasicTab) optionClick(index);
                  else {
                    setModal(() => ({ show: true, optionId: index }));
                  }
                }}
              >
                <DimmedOverlay>
                  <ul>
                    {!isBasicTab && option.subExtraOptionInfoDTOs.length > 1 ? (
                      option.subExtraOptionInfoDTOs.map((item, index) => (
                        <li key={index}>{item.name}</li>
                      ))
                    ) : (
                      <span>옵션 상세 보기</span>
                    )}
                  </ul>
                </DimmedOverlay>
                <CardImg src={option.image} />
                <CardDetailWrap>
                  <CardDetailTextWrap>
                    <h3>{option.name}</h3>
                    {!isBasicTab ? (
                      <h3>+ {option.price.toLocaleString()} 원</h3>
                    ) : (
                      <span style={{ color: `${palette.MediumGray}` }}>
                        기본 포함
                      </span>
                    )}
                  </CardDetailTextWrap>
                  {!isBasicTab && (
                    <AddOrRemoveButton
                      $isAdded={addState}
                      onClick={() => {
                        if (addState) {
                          removeOption(index);
                        } else {
                          addOption(index);
                        }
                      }}
                    >
                      {addState ? '취소하기' : '추가하기'}
                    </AddOrRemoveButton>
                  )}
                </CardDetailWrap>
              </Card>
            );
          })}
        </ScrollWrapper>
      </CardsWrap>
      <LeftArrow reference={leftArrow} clickHandler={scrollContainer} />
      <RightArrow reference={rightArrow} clickHandler={scrollContainer} />
    </Container>
  );
}
export default OptionCard;
