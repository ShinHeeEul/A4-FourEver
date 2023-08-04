import styled, { css } from 'styled-components';
import palette from '../../style/styleVariable';
import {
  Body3Medium,
  Body3Regular,
  Heading3Bold,
  Heading4Bold,
} from '../../style/typo';
import { useOutletContext } from 'react-router-dom';

const MandatoryCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 347px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${palette.LightSand};
  border: 2px solid ${palette.LightSand};
  padding: 18px 22px 28px;
  cursor: pointer;
  ${(props) =>
    props.$isActive &&
    css`
      border: 2px solid ${palette.Primary};
      background: rgba(56, 93, 162, 0.1);
      span {
        color: ${palette.Primary};
      }
    `}
`;

const CardNamePriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;
const CardName = styled.span`
  ${Heading3Bold}
  color: ${palette.Black};
`;
const CardOne = styled(CardName)`
  ${Heading4Bold}
`;
const CardText = styled.span`
  ${Body3Regular}
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
  margin: 20px 0;
`;

const DetailOptionWrap = styled(CardNamePriceDiv)`
  margin: 0;
  /* &:first-child {
    margin-bottom: 8px;
  } */
  ${(props) =>
    props.$isFirst &&
    css`
      margin-bottom: 8px;
    `}
`;
function MandatoryCard({ option, isActive, clickHandler, id }) {
  const { page } = useOutletContext();
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
    <MandatoryCardDiv $isActive={isActive} onClick={() => clickHandler(id)}>
      <CardNamePriceDiv>
        <CardName>{option.name}</CardName>
        <CardPriceDiv>
          <CardName>+{option.price}</CardName>
          <CardOne>원</CardOne>
        </CardPriceDiv>
      </CardNamePriceDiv>
      <CardText>{option.explanation}</CardText>
      <CardLineDiv>
        <CardLine />
      </CardLineDiv>
      {page === 1 && (
        <>
          <DetailOptionWrap $isFirst>
            <EngineMaxInfo>최고출력</EngineMaxInfo>
            <CardText>{option.maxOutput}</CardText>
          </DetailOptionWrap>
          <DetailOptionWrap>
            <EngineMaxInfo>최대토크</EngineMaxInfo>
            <CardText>{option.maxTalk}</CardText>
          </DetailOptionWrap>
        </>
      )}
    </MandatoryCardDiv>
  );
}

export default MandatoryCard;
