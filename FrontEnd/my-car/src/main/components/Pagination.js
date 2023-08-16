import { css, styled, keyframes } from 'styled-components';
import palette from '../../style/styleVariable';
import { Heading1Bold, Heading3Medium } from '../../style/typo';
const PaginationContainer = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 250px;
  left: 100px;
  display: flex;
  gap: 20px;
`;

const EachPageSymbol = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;

  cursor: pointer;
  &:hover {
    background-color: yellow;
  }
  ${(props) => {
    if (props.$currentDisplay) {
      return `background-color: ${palette.LightSand};
        outline: 1px solid ${palette.LightSand};
        opacity: 0.5;
        outline-offset:2px;
      `;
    }
    return `background-color: transparent;
             outline: 1px solid ${palette.LightSand};
      `;
  }}
`;

function Pagination({ $currentDisplay, $setCurrentDisplay }) {
  return (
    <PaginationContainer>
      <EachPageSymbol
        onClick={() => $setCurrentDisplay(1)}
        $currentDisplay={$currentDisplay === 1}
      />
      <EachPageSymbol
        onClick={() => $setCurrentDisplay(2)}
        $currentDisplay={$currentDisplay === 2}
      />
      <EachPageSymbol
        onClick={() => $setCurrentDisplay(3)}
        $currentDisplay={$currentDisplay === 3}
      />
    </PaginationContainer>
  );
}

export default Pagination;
