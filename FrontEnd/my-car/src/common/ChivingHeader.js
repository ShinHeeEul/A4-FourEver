import styled from 'styled-components';
import palette from '../style/styleVariable';
import { ReactComponent as ToBackSymbol } from '../assets/leftArrow.svg';
import { ReactComponent as ArchivingLogo } from '../assets/archivingLogoBlack.svg';
import { ReactComponent as CarLogo } from '../assets/carLogo.svg';
import { Heading3Medium, Heading4Medium } from '../style/typo';
const ChivingHeaderDiv = styled.div`
  width: calc(100%-200px);
  height: 91px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  margin-top: 60px;
  position: relative;
  justify-content: space-between;
  padding: 0 100px;
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
`;
const ArchivingSymbolText = styled.span`
  ${Heading3Medium}
`;
const ToMycarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;
const ToMycarText = styled.span`
  ${Heading4Medium}
`;

function ChivingHeader() {
  return (
    <ChivingHeaderDiv>
      <ToBackSymbol style={{ cursor: 'pointer' }} />
      <ArchivingSymbolDiv>
        <ArchivingLogo />
        <ArchivingSymbolText>아카이빙</ArchivingSymbolText>
      </ArchivingSymbolDiv>
      <ToMycarDiv>
        <CarLogo />
        <ToMycarText>내 차 만들기 바로가기</ToMycarText>
      </ToMycarDiv>
    </ChivingHeaderDiv>
  );
}

export default ChivingHeader;
