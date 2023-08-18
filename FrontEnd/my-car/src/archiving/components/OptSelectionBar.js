import { css, styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Regular } from '../../style/typo';
import { useContext, useState } from 'react';
import {
  OptionSelectAction,
  OptionSelectValue,
} from '../../context/archiving/ArchivingProvider';
import { ARCHIVING } from '../../constant';
import WarningTooltip from './WarningTooltip';

const Container = styled.div`
  background-color: ${palette.Neutral};
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      await delay(3000);
      setShowTooltip(false);
    } else {
      action.select({ id });
    }
  };

  return (
    <Container>
      <WarningTooltip showTooltip={showTooltip} />
      <TagWrap>
        {optionList[ARCHIVING.FILED.OPTIONS].map((list, index) => (
          <OptTag
            onClick={() => ClickOption({ id: list.id })}
            key={index}
            $isActive={activeStates[list.id]}
            $inNavbar={true}
          >
            {list.name}
          </OptTag>
        ))}
      </TagWrap>
    </Container>
  );
}
export default OptSelectionBar;
