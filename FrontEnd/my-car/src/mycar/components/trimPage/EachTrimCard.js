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
  return (
    <>
      {logoTextInfo.map((model) =>
        model.value.map((item, idx) => {
          return (
            <CarCardLogoImg key={idx} $isActive={isActive}>
              <img
                alt="logoImage"
                src={`../../../../assets/${model.name}Logo${idx + 1}.svg`}
              />
              <CarCardLogoName $isActive={isActive}>{item[0]}</CarCardLogoName>
              <CarCardLogoName $isActive={isActive}>{item[1]}</CarCardLogoName>
            </CarCardLogoImg>
          );
        }),
      )}
    </>
  );
}

export default EachTrimCard;
