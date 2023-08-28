import styled from 'styled-components';
import palette from '../../../style/styleVariable';
import { Body3Medium, CaptionMedium, Heading3Bold } from '../../../style/typo';
import { USER_CAR_ACTIONS, carCardInfo } from '../../../constant';
import { useOutletContext } from 'react-router-dom';
import { useSelect } from '../../hook/useSelect';

import Leblanc1 from '../../../assets/leblancLogo1.svg';
import Leblanc2 from '../../../assets/leblancLogo2.svg';
import Leblanc3 from '../../../assets/leblancLogo3.svg';
import Exclusive1 from '../../../assets/exclusiveLogo1.svg';
import Exclusive2 from '../../../assets/exclusiveLogo2.svg';
import Exclusive3 from '../../../assets/exclusiveLogo3.svg';
import Prestige1 from '../../../assets/prestigeLogo1.svg';
import Prestige2 from '../../../assets/prestigeLogo2.svg';
import Prestige3 from '../../../assets/prestigeLogo3.svg';
import Calligraphy1 from '../../../assets/calligraphyLogo1.svg';
import Calligraphy2 from '../../../assets/calligraphyLogo2.svg';
import Calligraphy3 from '../../../assets/calligraphyLogo3.svg';
import { logoTextInfo } from '../../../constant';

const CarCardDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const CarCardLogoImg = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
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
    if (props.$isActive === true) {
      return `
        color: ${palette.Primary};
      `;
    }
    return `
      color: ${palette.DarkGray};
    `;
  }}
  img {
  }
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
const CarCardPriceDiv = styled.div``;
const CarCardPriceWon = styled.span`
  ${Body3Medium};
  padding-left: 4px;
  ${(props) => {
    if (props.$isActive === true) {
      return `
        color: ${palette.Primary};
      `;
    }
  }}
`;
const CarCardLogoNameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
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
  const { page } = useOutletContext();
  const [selected, setSelectedOption] = useSelect({
    option: options,
    field: USER_CAR_ACTIONS.MODEL,
    page,
  });
  const svgImgs = [
    [Leblanc1, Leblanc2, Leblanc3],
    [Exclusive1, Exclusive2, Exclusive3],
    [Prestige1, Prestige2, Prestige3],
    [Calligraphy1, Calligraphy2, Calligraphy3],
  ];

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
              {logoTextInfo[index].value.map((item, idx) => {
                return (
                  <CarCardLogoImg key={idx} $isActive={selected === index}>
                    <img alt={'img'} src={svgImgs[index][idx]} />
                    <CarCardLogoName $isActive={selected === index}>
                      {item[0]}
                    </CarCardLogoName>
                    <CarCardLogoName $isActive={selected === index}>
                      {item[1]}
                    </CarCardLogoName>
                  </CarCardLogoImg>
                );
              })}
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
