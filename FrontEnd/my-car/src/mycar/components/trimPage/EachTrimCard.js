import styled from 'styled-components';
import palette from '../../../style/styleVariable';
import { CaptionMedium } from '../../../style/typo';
import { ReactComponent as Leblanc1 } from '../../../assets/leblancLogo1.svg';
import { ReactComponent as Leblanc2 } from '../../../assets/leblancLogo2.svg';
import { ReactComponent as Leblanc3 } from '../../../assets/leblancLogo3.svg';
import { ReactComponent as Exclusive1 } from '../../../assets/exclusiveLogo1.svg';
import { ReactComponent as Exclusive2 } from '../../../assets/exclusiveLogo2.svg';
import { ReactComponent as Exclusive3 } from '../../../assets/exclusiveLogo3.svg';
import { ReactComponent as Prestige1 } from '../../../assets/prestigeLogo1.svg';
import { ReactComponent as Prestige2 } from '../../../assets/prestigeLogo2.svg';
import { ReactComponent as Prestige3 } from '../../../assets/prestigeLogo3.svg';
import { ReactComponent as Calligraphy1 } from '../../../assets/calligraphyLogo1.svg';
import { ReactComponent as Calligraphy2 } from '../../../assets/calligraphyLogo2.svg';
import { ReactComponent as Calligraphy3 } from '../../../assets/calligraphyLogo3.svg';
import { logoTextInfo } from '../../../constant';
const CarCardLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const CarCardLogoNameDiv = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  padding-top: 10px;
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
`;

function EachTrimCard({ car, isActive }) {
  function render(name) {
    switch (name) {
      case 'Le Blanc(르블랑)':
        return (
          <>
            <CarCardLogoImg $isActive={isActive}>
              <Leblanc1 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][0]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][1]}
              </CarCardLogoName>
            </CarCardLogoImg>
            <CarCardLogoImg>
              <Leblanc2 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][2]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][3]}
              </CarCardLogoName>
            </CarCardLogoImg>
            <CarCardLogoImg>
              <Leblanc3 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][4]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][5]}
              </CarCardLogoName>
            </CarCardLogoImg>
          </>
        );
      case 'Exclusive':
        return (
          <>
            <CarCardLogoImg>
              <Exclusive1 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][0]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][1]}
              </CarCardLogoName>
            </CarCardLogoImg>
            <CarCardLogoImg>
              <Exclusive2 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][2]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][3]}
              </CarCardLogoName>
            </CarCardLogoImg>
            <CarCardLogoImg>
              <Exclusive3 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][4]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][5]}
              </CarCardLogoName>
            </CarCardLogoImg>
          </>
        );
      case 'Prestige':
        return (
          <>
            <CarCardLogoImg>
              <Prestige1 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][0]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][1]}
              </CarCardLogoName>
            </CarCardLogoImg>
            <CarCardLogoImg>
              <Prestige2 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][2]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][3]}
              </CarCardLogoName>
            </CarCardLogoImg>
            <CarCardLogoImg>
              <Prestige3 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][4]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][5]}
              </CarCardLogoName>
            </CarCardLogoImg>
          </>
        );
      default:
        return (
          <>
            <CarCardLogoImg>
              <Calligraphy1 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][0]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][1]}
              </CarCardLogoName>
            </CarCardLogoImg>
            <CarCardLogoImg>
              <Calligraphy2 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][2]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][3]}
              </CarCardLogoName>
            </CarCardLogoImg>
            <CarCardLogoImg>
              <Calligraphy3 />
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][4]}
              </CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>
                {logoTextInfo[name][5]}
              </CarCardLogoName>
            </CarCardLogoImg>
          </>
        );
    }
  }

  return render(car.name);
}

export default EachTrimCard;
