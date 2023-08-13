import { styled } from 'styled-components';
import {
  Body3Regular,
  Body4Regular,
  CaptionRegular,
  Heading4Medium,
} from '../../../style/typo';
import palette from '../../../style/styleVariable';
import { useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSelectAction, useSelectValue } from '../../hook/useUserCar';

const ExplainHeaderWrap = styled.div``;
const ExplainHeaderTitle = styled.div``;
export const ExplainNumber = styled.div`
  width: 22px;
  height: 22px;
  border: 3px solid white;
  border-radius: 50%;
  background-color: ${palette.Primary};
  color: ${palette.LightSand};
  ${Body4Regular}
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 1px 0px;
`;
const ExplainHeaderPageInfo = styled.div``;
const ExplainDetail = styled.div`
  ${Body3Regular}
`;
const ExplainWrap = styled.div`
  /* position: relative; */
  position: absolute;
  bottom: 0;

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
      span {
        ${Heading4Medium}
        max-width: 350px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
    padding: 0 3px;
    height: 66px;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  svg {
    position: absolute;
    top: 50%;
    cursor: pointer;
    &:first-of-type {
      left: -7px;
      display: none;
    }
    &:last-child {
      right: 0px;
    }
  }
`;

function LeftArrow({ reference, clickHandler, explainPage }) {
  return (
    <svg
      ref={reference}
      onClick={() => clickHandler(explainPage - 1)}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
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
          <rect width="40" height="40" fill="white" />
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
      width="40"
      height="40"
      viewBox="0 0 40 40"
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
            width="40"
            height="40"
            fill="white"
            transform="matrix(-1 0 0 1 40 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function DetailExplainCard() {
  const { page } = useOutletContext();

  const { setPage } = useSelectAction();
  const { selected, optionList, explainPage } = useSelectValue();
  const selectedOption = optionList[selected];

  const leftArrow = useRef();
  const rightArrow = useRef();

  const changeExplainPage = (page) => {
    setPage(page);
    leftArrow.current.style.display = page === 0 ? 'none' : ' block';
    rightArrow.current.style.display =
      page === selectedOption.subExtraOptionInfoDTOs.length - 1
        ? 'none'
        : ' block';
  };

  useEffect(() => {
    setPage(0);
    leftArrow.current.style.display = 'none';
    rightArrow.current.style.display =
      selectedOption.subExtraOptionInfoDTOs.length - 1 !== 0 ? 'block' : 'none';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, selected]);

  return (
    <ExplainWrap>
      <ExplainHeaderWrap>
        <ExplainHeaderTitle>
          {selectedOption.subExtraOptionInfoDTOs.length > 1 && (
            <ExplainNumber>0{explainPage + 1}</ExplainNumber>
          )}

          <span>
            {selectedOption.subExtraOptionInfoDTOs[explainPage].name ||
              selectedOption.name}
          </span>
        </ExplainHeaderTitle>
        <ExplainHeaderPageInfo>
          {explainPage + 1}/{selectedOption.subExtraOptionInfoDTOs.length}
        </ExplainHeaderPageInfo>
      </ExplainHeaderWrap>
      <ExplainDetail>
        {selectedOption.subExtraOptionInfoDTOs[explainPage].description ||
          selectedOption.description}
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
