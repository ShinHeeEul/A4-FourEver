import { keyframes, styled } from 'styled-components';
import { Body4Medium } from '../../style/typo';

const fadeIn = keyframes`
  from {
    opacity: 0;
    top: 2%;
  }
  to {
    opacity: 1;
    top: 4.5%;
  }
`;

const Container = styled.div`
  position: absolute;
  /* top: 10%; */
  z-index: 10;

  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 40px;
  border-radius: 10px;
  background-color: #545454;
  color: white;
  padding: 5px 10px;
  ${Body4Medium};
  visibility: ${({ $showTooltip }) => ($showTooltip ? 'visible' : 'hidden')};
  animation: ${({ $showTooltip }) => ($showTooltip ? fadeIn : 'none')} 0.8s;
  top: 4.5%;
`;

function WarningTooltip({ showTooltip }) {
  return (
    <Container $showTooltip={showTooltip}>
      옵션은 4개까지만 선택할 수 있습니다
    </Container>
  );
}
export default WarningTooltip;
