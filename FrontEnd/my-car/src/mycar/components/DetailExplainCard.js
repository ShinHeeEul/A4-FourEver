import { styled } from 'styled-components';
import {
  Body3Regular,
  Body4Regular,
  CaptionRegular,
  Heading4Medium,
} from '../../style/typo';
import palette from '../../style/styleVariable';
import { useRef, useState } from 'react';

const ExplainHeaderWrap = styled.div``;
const ExplainHeaderTitle = styled.div``;
const ExplainHeaderPage = styled.div``;
const ExplainHeaderPageInfo = styled.div``;
const ExplainDetail = styled.div`
  ${Body3Regular}
`;
const ExplainWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: calc(507px - 68px);
  height: calc(152px - 40px);
  padding: 22px 34px 18px;

  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid ${palette.Primary};
  background: rgba(0, 44, 95, 0.1);
  ${ExplainHeaderWrap} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid ${palette.Primary};
    ${ExplainHeaderTitle} {
      display: flex;
      align-items: center;
      gap: 8px;
      ${ExplainHeaderPage} {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: ${palette.Primary};
        color: ${palette.LightSand};
        ${Body4Regular}
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1px 1px 0px;
      }
      span {
        ${Heading4Medium}
      }
    }
    ${ExplainHeaderPageInfo} {
      border-radius: 13px;
      background: ${palette.DarkGray};
      width: 33px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      ${CaptionRegular}
      color: ${palette.LightSand};
    }
  }
  ${ExplainDetail} {
    padding: 0 13px;
    height: 66px;
    overflow: scroll;
  }
  svg {
    position: absolute;
    top: 50%;
    cursor: pointer;
    &:first-of-type {
      left: -5px;
      display: none;
    }
    &:last-child {
      right: -5px;
    }
  }
`;

function LeftArrow({ reference, clickHandler, explainPage }) {
  return (
    <svg
      ref={reference}
      onClick={() => clickHandler(explainPage - 1)}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
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
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
function RightArrow({ reference, clickHandler, explainPage }) {
  return (
    <svg
      ref={reference}
      onClick={() => clickHandler(explainPage + 1)}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
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
            width="48"
            height="48"
            fill="white"
            transform="matrix(-1 0 0 1 48 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function DetailExplainCard({ selectOptionInfo, selected }) {
  const leftArrow = useRef();
  const rightArrow = useRef();
  const [explainPage, setExplainPage] = useState(0);
  const changeExplainPage = (state) => {
    setExplainPage(state);
    leftArrow.current.style.display = state === 0 ? 'none' : ' block';
    rightArrow.current.style.display =
      state === selectOptionInfo[selected].explain.length - 1
        ? 'none'
        : ' block';
  };
  return (
    <ExplainWrap>
      <ExplainHeaderWrap>
        <ExplainHeaderTitle>
          <ExplainHeaderPage>0{explainPage + 1}</ExplainHeaderPage>
          <span>{selectOptionInfo[selected].explain[explainPage].main}</span>
        </ExplainHeaderTitle>
        <ExplainHeaderPageInfo>
          {explainPage + 1}/{selectOptionInfo[selected].explain.length}
        </ExplainHeaderPageInfo>
      </ExplainHeaderWrap>
      <ExplainDetail>
        {selectOptionInfo[selected].explain[explainPage].detail}
      </ExplainDetail>
      <LeftArrow
        reference={leftArrow}
        clickHandler={changeExplainPage}
        explainPage={explainPage}
      />
      <RightArrow
        reference={rightArrow}
        clickHandler={changeExplainPage}
        explainPage={explainPage}
      />
    </ExplainWrap>
  );
}

export default DetailExplainCard;
