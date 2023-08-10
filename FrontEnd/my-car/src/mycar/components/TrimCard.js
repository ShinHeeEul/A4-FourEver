import styled from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Medium, CaptionMedium, Heading3Bold } from '../../style/typo';
import { carCardInfo } from '../../constant';
import { useOutletContext } from 'react-router-dom';
import { useSelect } from '../useSelect';

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
    if (props.$isActive === true) {
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
    if (props.$isActive === true) {
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
  /* ${(props) => {
    if (props.$isActive === true) {
      return `
        stroke: ${palette.Primary};
      `;
    }
    return `
      stroke: ${palette.DarkGray};
    `;
  }} */
`;

const CarCardLogoName = styled.div`
  ${CaptionMedium};
  display: flex;
  text-align: center;
  align-items: center;
  ${(props) => {
    if (props.isActive === true) {
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
    if (props.isActive === true) {
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

function CarCardLine({ $isActive }) {
  if ($isActive) {
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

function TrimCard({ options }) {
  const { userCar, setUserCar, page } = useOutletContext();

  const [selected, setSelectedOption] = useSelect({
    setUserCar,
    userCar,
    option: options,
    field: 'trim',
    page,
  });

  return (
    <div>
      <CarCardDiv>
        {options.map((car, index) => (
          <CarCardSub
            key={index}
            $isActive={selected === index}
            onClick={() => setSelectedOption({ selectOption: car, index })}
          >
            <CarCardName $isActive={selected === index}>{car.name}</CarCardName>
            <CarCardLine $isActive={selected === index} />
            <CarCardLogoDiv>
              {carCardInfo[index].logo.map((item, key) => (
                <CarCardLogoNameDiv key={key}>
                  <CarCardLogoImg> {item}</CarCardLogoImg>
                  <CarCardLogoName $isActive={selected === index}>
                    {carCardInfo[index].logoText[0]}
                  </CarCardLogoName>
                  <CarCardLogoName $isActive={selected === index}>
                    {carCardInfo[index].logoText[1]}
                  </CarCardLogoName>
                </CarCardLogoNameDiv>
              ))}
            </CarCardLogoDiv>
            <CarCardLine $isActive={selected === index} />
            <CarCardPriceDiv>
              <CarCardName $isActive={selected === index}>
                {car.price.toLocaleString()}
              </CarCardName>
              <CarCardPriceWon $isActive={selected === index}>
                원
              </CarCardPriceWon>
            </CarCardPriceDiv>
          </CarCardSub>
        ))}
      </CarCardDiv>
    </div>
  );
}
export default TrimCard;
