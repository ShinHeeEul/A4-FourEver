import styled from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Medium, Body4Regular, Heading3Bold } from '../../style/typo';

const MandatoryCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 347px;
  height: 218px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${palette.LightSand};
  border: 2px solid ${palette.LightSand};
  padding: 0 22px;
`;

const CardNamePriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardName = styled.span`
  ${Heading3Bold}
  color: ${palette.Black};
`;
const CardText = styled.span`
  ${Body4Regular}
  color: ${palette.Black};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardPriceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EngineMaxInfo = styled.span`
  ${Body3Medium}
  color: ${palette.Black};
`;

const CardLineDiv = styled.div`
  display: flex;
  justify-content: center;
`;
function MandatoryCard() {
  function CardLine() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="347"
        height="2"
        viewBox="0 0 347 2"
        fill="none"
      >
        <path d="M0.800781 1H346.203" stroke="#3C3C3C" />
      </svg>
    );
  }
  return (
    <MandatoryCardDiv>
      <CardNamePriceDiv>
        <CardName>가솔린3.8</CardName>
        <CardPriceDiv>
          <CardName>+1,480,000</CardName>
          <CardText>원</CardText>
        </CardPriceDiv>
      </CardNamePriceDiv>
      <CardText>
        고마력의 우수한 가속 성능을 확보하여, 넉넉하고 안정감 있는 주행이
        가능합니다. 엔진의 진동이 적어 편안하고 조용한 드라이빙 감성을
        제공합니다.
      </CardText>
      <CardLineDiv>
        <CardLine />
      </CardLineDiv>

      <CardNamePriceDiv>
        <EngineMaxInfo>최고출력</EngineMaxInfo>
        <CardText>295/6,000PS/rpm</CardText>
      </CardNamePriceDiv>
      <CardNamePriceDiv>
        <EngineMaxInfo>최대토크</EngineMaxInfo>
        <CardText>36.2/5,200kgf-m/rpm</CardText>
      </CardNamePriceDiv>
    </MandatoryCardDiv>
  );
}

export default MandatoryCard;
