import styled from 'styled-components';
import { useEffect, useState } from 'react';
import palette from '../../style/styleVariable';
import { Body3Medium, CaptionMedium, Heading3Bold } from '../../style/typo';
import { carCardInfo } from '../../constant';
import { useOutletContext } from 'react-router-dom';

const CarCardDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const CarCardSub = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  width: 242px;
  height: 251px;
  flex-shrink: 0;
  border-radius: 8px;
  ${(props) => {
    if (props.isactive === true) {
      return `
        background-color: rgba(0, 44, 95, 0.10);;
        border: 2px solid ${palette.Primary}
      `;
    }
    return `
      background-color: ${palette.LightSand};
      border: 2px solid ${palette.LightSand};
    `;
  }}
`;

const CarCardName = styled.span`
  ${Heading3Bold};
  ${(props) => {
    if (props.isactive === true) {
      return `
        color: ${palette.Primary};
      `;
    }
    return `
      color: ${palette.Black};
    `;
  }}
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

const CarCardLogoImg = styled.div`
  ${(props) => {
    if (props.isactive === true) {
      return `
        stroke: ${palette.Primary};
      `;
    }
    return `
      stroke: ${palette.DarkGray};
    `;
  }}
`;

const CarCardLogoName = styled.div`
  ${CaptionMedium};
  display: flex;
  text-align: center;
  align-items: center;
  ${(props) => {
    if (props.isactive === true) {
      return `
        color: ${palette.Primary};
      `;
    }
    return `
      color: ${palette.DarkGray};
    `;
  }}
`;
const CarCardPriceDiv = styled.div``;
const CarCardPriceWon = styled.span`
  ${Body3Medium};
  padding-left: 4px;
  ${(props) => {
    if (props.isactive === true) {
      return `
        color: ${palette.Primary};
      `;
    }
    return `
      color: ${palette.DarkGray};
      padding-left: 3px;
    `;
  }}
`;

function CarCardLine({ isactive }) {
  if (isactive) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="214"
        height="2"
        viewBox="0 0 214 2"
        fill="none"
      >
        <path d="M0 1L214 1.00002" stroke="#002C5F" />
      </svg>
    );
  }
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
  const { userCar, setUserCar, page } = useOutletContext();
  const [selected, setSelected] = useState(userCar.trim);

  function ChangeCard(car, stateUserCar, idx) {
    const Price = [...userCar.price];
    Price[page] = parseInt(car.price.replace(/,/g, ''), 10);

    stateUserCar((prevState) => ({
      ...prevState,
      trim: idx,
      price: Price,
    }));
    setSelected(idx);
  }

  return (
    <div>
      <CarCardDiv>
        {carCardInfo.map((car, idx) => (
          <CarCardSub
            key={idx}
            isactive={selected === idx}
            onClick={() => ChangeCard(car, setUserCar, idx)}
          >
            <CarCardName isactive={selected === idx}>{car.name}</CarCardName>
            <CarCardLine isactive={selected === idx} />
            <CarCardLogoDiv>
              <CarCardLogo isactive={selected === idx}>
                <CarCardLogoImg>{car.logo[0]}</CarCardLogoImg>
                <CarCardLogoNameDiv>
                  <CarCardLogoName isactive={selected === idx}>
                    {car.logoText[0]}
                  </CarCardLogoName>
                  <CarCardLogoName isactive={selected === idx}>
                    {car.logoText[1]}
                  </CarCardLogoName>
                </CarCardLogoNameDiv>
              </CarCardLogo>
              <CarCardLogo>
                <CarCardLogoImg>{car.logo[1]}</CarCardLogoImg>
                <CarCardLogoNameDiv>
                  <CarCardLogoName isactive={selected === idx}>
                    {car.logoText[2]}
                  </CarCardLogoName>
                  <CarCardLogoName isactive={selected === idx}>
                    {car.logoText[3]}
                  </CarCardLogoName>
                </CarCardLogoNameDiv>
              </CarCardLogo>
              <CarCardLogo>
                <CarCardLogoImg>{car.logo[2]}</CarCardLogoImg>
                <CarCardLogoNameDiv>
                  <CarCardLogoName isactive={selected === idx}>
                    {car.logoText[4]}
                  </CarCardLogoName>
                  <CarCardLogoName isactive={selected === idx}>
                    {car.logoText[5]}
                  </CarCardLogoName>
                </CarCardLogoNameDiv>
              </CarCardLogo>
            </CarCardLogoDiv>
            <CarCardLine isactive={selected === idx} />
            <CarCardPriceDiv>
              <CarCardName isactive={selected === idx}>{car.price}</CarCardName>
              <CarCardPriceWon isactive={selected === idx}>원</CarCardPriceWon>
            </CarCardPriceDiv>
          </CarCardSub>
        ))}
      </CarCardDiv>
    </div>
  );
}
export default TrimCard;
