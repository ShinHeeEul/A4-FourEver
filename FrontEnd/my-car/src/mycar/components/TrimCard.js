import styled from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Medium, CaptionMedium, Heading3Bold } from '../../style/typo';
// import { LeBlanc1, LeBlanc2, LeBlanc3 } from '../../style/TrimCarCardSvg';
import { carCardInfo } from '../../constant';

const CarCardDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const CarCardSub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  width: 242px;
  height: 251px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${palette.LightSand};
`;

const CarCardName = styled.span`
  ${Heading3Bold};
  color: ${palette.Black};
`;
const CarCardLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const CarCardLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const CarCardLogoNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;
const CarCardLogoName = styled.div`
  ${CaptionMedium};
  color: ${palette.DarkGray};
  display: flex;
  text-align: center;
  align-items: center;
`;
const CarCardPriceDiv = styled.div``;
const CarCardPriceWon = styled.span`
  ${Body3Medium};
  color: ${palette.DarkGray};
  padding-left: 3px;
`;

function CarCardLine() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="214"
      height="2"
      viewBox="0 0 214 2"
      fill="none"
    >
      <path d="M0 1L214 1.00002" stroke="#BEBEBE" />
    </svg>
  );
}

function TrimCard() {
  return (
    <div>
      <CarCardDiv>
        {carCardInfo.map((car) => (
          <CarCardSub>
            <CarCardName>{car.name}</CarCardName>
            <CarCardLine />
            <CarCardLogoDiv>
              <CarCardLogo>
                {car.logo[0]}
                <CarCardLogoNameDiv>
                  <CarCardLogoName>{car.logoText[0]}</CarCardLogoName>
                  <CarCardLogoName>{car.logoText[1]}</CarCardLogoName>
                </CarCardLogoNameDiv>
              </CarCardLogo>
              <CarCardLogo>
                {car.logo[1]}
                <CarCardLogoNameDiv>
                  <CarCardLogoName>{car.logoText[2]}</CarCardLogoName>
                  <CarCardLogoName>{car.logoText[3]}</CarCardLogoName>
                </CarCardLogoNameDiv>
              </CarCardLogo>
              <CarCardLogo>
                {car.logo[2]}
                <CarCardLogoNameDiv>
                  <CarCardLogoName>{car.logoText[4]}</CarCardLogoName>
                  <CarCardLogoName>{car.logoText[5]}</CarCardLogoName>
                </CarCardLogoNameDiv>
              </CarCardLogo>
            </CarCardLogoDiv>
            <CarCardLine />
            <CarCardPriceDiv>
              <CarCardName>{car.price}</CarCardName>
              <CarCardPriceWon>원</CarCardPriceWon>
            </CarCardPriceDiv>
          </CarCardSub>
        ))}

        {/* <CarCardSub />
        <CarCardSub />
        <CarCardSub /> */}
      </CarCardDiv>
    </div>
  );
}
export default TrimCard;
