import styled, { css } from 'styled-components';
import palette from '../style/styleVariable';
import ToBackSymbol from '../assets/leftArrow.svg';
import { ReactComponent as ArchivingLogo } from '../assets/archivingLogoBlack.svg';
import { ReactComponent as CarLogo } from '../assets/carLogo.svg';
import { Heading3Medium, Heading4Medium } from '../style/typo';
import { useLocation, useNavigate } from 'react-router-dom';
import { myCarPagePath } from '../constant';
const ChivingHeaderDiv = styled.div`
  width: calc(100% - 180px);
  height: 91px;
  flex-shrink: 0;
  background-color: white;
  display: flex;
  align-items: center;
  margin-top: 60px;

  justify-content: space-between;
  padding: 0 90px;
  position: fixed;
  z-index: 4;
`;

const ArchivingSymbolDiv = styled.div`
  width: 133px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 18px;
  background-color: ${palette.LightSand};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  padding: ${({ $isMychiving }) => ($isMychiving ? '0 8px' : '')};
`;
const ArchivingSymbolText = styled.span`
  ${Heading3Medium}
`;
const ToMycarDiv = styled.div`
  visibility: ${({ $isShow }) => ($isShow ? 'visible' : 'hidden')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;
const ToMycarText = styled.span`
  ${Heading4Medium}
`;

const GoBack = styled.img`
  cursor: pointer;
  ${({ $isShow }) =>
    $isShow
      ? css`
          visibility: visible;
          cursor: pointer;
        `
      : css`
          visibility: hidden;
          cursor: auto;
        `};
`;

function ChivingHeader({ fromMycar }) {
  const { state } = useLocation();

  const navigate = useNavigate();
  const BackClick = () => {
    navigate(-1);
  };
  const GoMyCar = () => {
    navigate(`/mycar/${myCarPagePath[0]}`);
  };
  const currentPath = useLocation().pathname.split('/')[1];
  let titleText;

  switch (currentPath) {
    case 'archiving':
      titleText = '아카이빙';
      break;
    case 'mychiving':
      titleText = '마이카이빙';
      break;
    default:
  }
  return (
    <ChivingHeaderDiv>
      <GoBack
        onClick={BackClick}
        src={ToBackSymbol}
        $isShow={fromMycar !== null}
      />
      <ArchivingSymbolDiv $isMychiving={titleText === '마이카이빙'}>
        <ArchivingLogo />
        <ArchivingSymbolText>{titleText}</ArchivingSymbolText>
      </ArchivingSymbolDiv>
      <ToMycarDiv onClick={GoMyCar} $isShow={fromMycar === null}></ToMycarDiv>
    </ChivingHeaderDiv>
  );
}

export default ChivingHeader;
