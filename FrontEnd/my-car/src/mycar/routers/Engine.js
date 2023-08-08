import { styled } from 'styled-components';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { Container } from './Trim';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { engineInfo } from '../../constant';
import { SelectedIndex } from '../util/SelectedIndex';

const EngineContainer = styled(Container)`
  flex-direction: row;
  gap: 40px;
`;

export const OptionImgWrap = styled.div`
  width: 620px;
  height: 400px;
  flex-shrink: 0;
  background-color: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

function Engine() {
  const { setUserCar, userCar, page } = useOutletContext();

  const [selected, setSelected] = useState(
    SelectedIndex({ userOption: userCar.engine, optionInfo: engineInfo }),
  );

  const setEngineOption = (index) => {
    const Price = [...userCar.price];
    Price[page] = parseInt(engineInfo[index].price.replace(/,/g, ''), 10);
    setUserCar((prevState) => ({
      ...prevState,
      engine: engineInfo[index],
      price: Price,
    }));
  };

  const optionClick = (optionId) => {
    setSelected(optionId);
    setEngineOption(optionId);
  };

  return (
    <EngineContainer>
      <LeftWrap>
        <OptionImgWrap></OptionImgWrap>
        <TitlePriceTag selectedOption={engineInfo[selected]} />
      </LeftWrap>
      <RightWrap>
        {engineInfo.map((option, index) => (
          <MandatoryCard
            key={index}
            id={index}
            isActive={selected === index}
            clickHandler={optionClick}
            option={option}
          />
        ))}
      </RightWrap>
    </EngineContainer>
  );
}
export default Engine;
