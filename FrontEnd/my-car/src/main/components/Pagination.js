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
        outline-offset:3px;
      `;
    }
    return `background-color: transparent;
             outline: 1px solid ${palette.LightSand};
                     outline-offset:2px;`;
  }}
`;

function Pagination({ $currentDisplay }) {
  console.log($currentDisplay);
  return (
    <PaginationContainer>
      <EachPageSymbol $currentDisplay={$currentDisplay === 1} />
      <EachPageSymbol $currentDisplay={$currentDisplay === 2} />
      <EachPageSymbol $currentDisplay={$currentDisplay === 3} />
    </PaginationContainer>
  );
}

export default Pagination;
