import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Regular, Body4Medium, Heading4Bold } from '../../style/typo';
import { ReactComponent as RemoveSvg } from '../../assets/removeIcon.svg';
const Container = styled.div`
  width: 1040px;
  height: 254px;
  margin: 30px 0;
  display: flex;
  overflow: auto;
`;

const CardDiv = styled.div`
  height: 250px;
  width: 270px;
  border-radius: 8px;
  border: 2px solid ${palette.Primary};
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  flex-shrink: 0;
  position: relative;
`;

const CardTopDiv = styled.div`
  height: 50%;
  width: 100%;
`;

const CardBottomDiv = styled.div`
  height: 50%;
  width: 100%;
  background-color: ${palette.LightSand};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const BottomContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const BottomTitle = styled.span`
  ${Heading4Bold}
`;
const BottomOption = styled.span`
  ${Body3Regular}
`;
const BottomDate = styled.span`
  ${Body4Medium}
  color: ${palette.Gold};
`;

const CardButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  position: absolute;
  top: 3%;
  right: 3%;
`;
const PlusSvg = styled(RemoveSvg)`
  transform: rotate(45deg);
  border-radius: 100%;
  cursor: pointer;
  background-color: white;
  &:hover {
    filter: brightness(0.9);
  }
`;
const EscSvg = styled(RemoveSvg)`
  cursor: pointer;
  background-color: white;
  border-radius: 100%;
  &:hover {
    filter: brightness(0.9);
  }
`;
function CardByMe() {
  return (
    <Container>
      <CardDiv>
        <CardButtonDiv>
          <PlusSvg />
          <EscSvg />
        </CardButtonDiv>
        <CardTopDiv />
        <CardBottomDiv>
          <BottomContentDiv>
            <BottomTitle>팰리세이드 Le Blanc</BottomTitle>
            <BottomOption>디젤 2.2 / 4WD / 7인승</BottomOption>
            <BottomDate style={{ color: 'rgb(216, 115, 97' }}>
              23년 7월 19일 임시저장
            </BottomDate>
          </BottomContentDiv>
        </CardBottomDiv>
      </CardDiv>
      <CardDiv>
        <CardButtonDiv>
          <EscSvg />
        </CardButtonDiv>
        <CardTopDiv />
        <CardBottomDiv>
          <BottomContentDiv>
            <BottomTitle>팰리세이드 Le Blanc</BottomTitle>
            <BottomOption>디젤 2.2 / 4WD / 7인승</BottomOption>
            <BottomDate>23년 7월 19일 완료</BottomDate>
          </BottomContentDiv>
        </CardBottomDiv>
      </CardDiv>
    </Container>
  );
}

export default CardByMe;
