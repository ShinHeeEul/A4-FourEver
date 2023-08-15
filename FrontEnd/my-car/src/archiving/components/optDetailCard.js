import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Regular, CaptionRegular, Heading3Medium } from '../../style/typo';
import { ReactComponent as CardDivisionSvg } from '../../assets/optionCardDivision.svg';
const AllDiv = styled.div`
  display: flex;
  margin: 50px auto;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  width: 1048px;
`;

const CardDiv = styled.div`
  width: 331px;
  height: 263px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid ${palette.Sand};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
`;
const CardImgdiv = styled.div`
  width: 320px;
  height: 150px;
  background-color: aliceblue;
  margin: 5px auto;
`;

const CardTitleDiv = styled.div`
  display: flex;
  gap: 6px;
  margin: 8px 15px;
`;

const CardNumber = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background-color: ${palette.Neutral};
  border: 2px solid ${palette.Primary};
  color: ${palette.Primary};

  ${CaptionRegular}
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.6px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardText = styled.span`
  ${Heading3Medium}
`;

const CardTagDiv = styled.div`
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  height: 30px;
  gap: 8px;
  align-items: center;
  padding: 14px;
`;
const EachTagDiv = styled.div`
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Body3Regular};
  border-radius: 8px;
  background-color: ${palette.LightSand};
  width: max-content;
`;

function OptDetailCard() {
  return (
    <AllDiv>
      <CardDiv>
        <CardImgdiv></CardImgdiv>
        <CardTitleDiv>
          <CardNumber>01</CardNumber>
          <CardText>컴포트 || 패키지 </CardText>
        </CardTitleDiv>
        <CardDivisionSvg style={{ margin: '0 auto' }} />
        <CardTagDiv>
          <EachTagDiv>편리해요😉</EachTagDiv>
          <EachTagDiv>출퇴근용으로 딱🚶</EachTagDiv>
          <EachTagDiv> 어린이👶</EachTagDiv>
        </CardTagDiv>
      </CardDiv>
      <CardDiv>
        <CardImgdiv></CardImgdiv>
        <CardTitleDiv>
          <CardNumber>02</CardNumber>
          <CardText>현대 스마트센스Ⅰ패키지</CardText>
        </CardTitleDiv>
        <CardDivisionSvg style={{ margin: '0 auto' }} />
        <CardTagDiv>
          <EachTagDiv>편리해요😉</EachTagDiv>
          <EachTagDiv>출퇴근용으로 딱🚶</EachTagDiv>
          <EachTagDiv> 어린이👶</EachTagDiv>
        </CardTagDiv>
      </CardDiv>
      <CardDiv>
        <CardImgdiv></CardImgdiv>
        <CardTitleDiv>
          <CardNumber>03</CardNumber>
          <CardText>2열 통풍시트</CardText>
        </CardTitleDiv>
        <CardDivisionSvg style={{ margin: '0 auto' }} />
        <CardTagDiv>
          <EachTagDiv>편리해요😉</EachTagDiv>
          <EachTagDiv>출퇴근용으로 딱🚶</EachTagDiv>
          <EachTagDiv> 어린이👶</EachTagDiv>
        </CardTagDiv>
      </CardDiv>
      <CardDiv>
        <CardImgdiv></CardImgdiv>
        <CardTitleDiv>
          <CardNumber>04</CardNumber>
          <CardText>빌트인 캠(보조배터리 포함)</CardText>
        </CardTitleDiv>
        <CardDivisionSvg style={{ margin: '0 auto' }} />
        <CardTagDiv>
          <EachTagDiv>편리해요😉</EachTagDiv>
          <EachTagDiv>출퇴근용으로 딱🚶</EachTagDiv>
          <EachTagDiv> 어린이👶</EachTagDiv>
        </CardTagDiv>
      </CardDiv>
      <CardDiv>
        <CardImgdiv></CardImgdiv>
        <CardTitleDiv>
          <CardNumber>05</CardNumber>
          <CardText>사이드스텝</CardText>
        </CardTitleDiv>
        <CardDivisionSvg style={{ margin: '0 auto' }} />
        <CardTagDiv>
          <EachTagDiv>편리해요😉</EachTagDiv>
          <EachTagDiv>출퇴근용으로 딱🚶</EachTagDiv>
          <EachTagDiv> 어린이👶</EachTagDiv>
        </CardTagDiv>
      </CardDiv>
    </AllDiv>
  );
}

export default OptDetailCard;
