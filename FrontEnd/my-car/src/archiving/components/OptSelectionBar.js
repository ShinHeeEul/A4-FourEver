import { css, styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Medium, Body3Regular } from '../../style/typo';
import { useContext, useEffect, useState } from 'react';
import {
  OptionSelectAction,
  OptionSelectValue,
} from '../../context/archiving/ArchivingProvider';
import { ARCHIVING } from '../../constant';
import WarningTooltip from './WarningTooltip';

const Container = styled.div`
  background-color: ${palette.Neutral};
  height: ${({ $change }) => ($change ? '55px' : '140px')};
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */

  /* position: fixed; */
  /* top: 150px; */
  /* width: 100vw; */
  transition: all 0.5s;
`;

const TagWrap = styled.div`
  width: calc(1280px - 180px);
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
`;

export const OptTag = styled.button`
  border: 0;
  transition: filter 0.2s ease;
  &:hover {
    filter: ${({ $inNavbar }) => ($inNavbar ? 'brightness(0.93)' : 'none')};
  }
  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: #385da2;
          color: ${palette.Neutral};
        `
      : css`
          background-color: #fff;
          color: ${palette.DarkGray};
        `}

  border-radius: 4px;
  border: 0.5px solid var(--light-gray, #dcdcdc);
  ${Body3Regular}
  cursor: pointer;
  padding: 4px 12px;
`;

const SmallBar = styled.div`
  display: flex;
  align-items: center;
  span {
    ${Body3Medium}
  }
  gap: 20px;
`;

function OptSelectionBar() {
  const [showTooltip, setShowTooltip] = useState(false);

  const { action } = useContext(OptionSelectAction);
  const { activeStates, optionList } = useContext(OptionSelectValue);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const ClickOption = async ({ id }) => {
    const activeLength = Object.values(activeStates).filter(
      (value) => value === true,
    ).length;
    if (activeLength === 4 && !activeStates[id]) {
      setShowTooltip(true);
      await delay(2000);
      setShowTooltip(false);
    } else {
      action.select({ id });
    }
  };

  const [change, setChange] = useState(false);

  const activeOptions = optionList[ARCHIVING.FILED.OPTIONS].filter(
    (item) => activeStates[item.id],
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 40; // 스크롤 내려간 거리의 임계값
      if (window.scrollY > scrollThreshold) {
        setChange(true);
      } else {
        setChange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container $change={change}>
      <WarningTooltip showTooltip={showTooltip} />
      <TagWrap>
        {!change ? (
          optionList[ARCHIVING.FILED.OPTIONS].map((list, index) => (
            <OptTag
              onClick={() => ClickOption({ id: list.id })}
              key={index}
              $isActive={activeStates[list.id]}
              $inNavbar={true}
            >
              {list.name}
            </OptTag>
          ))
        ) : (
          <SmallBar>
            <span>선택 옵션</span>
            {activeOptions.map((option, index) => (
              <OptTag
                onClick={() => ClickOption({ id: option.id })}
                key={index}
                $isActive={activeStates[option.id]}
                $inNavbar={true}
              >
                {option.name}
              </OptTag>
            ))}
          </SmallBar>
        )}
      </TagWrap>
    </Container>
  );
}
export default OptSelectionBar;
