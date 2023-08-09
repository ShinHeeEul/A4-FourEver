import { styled } from 'styled-components';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { Container } from './Model';
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
    SelectedIndex({
      userOptionID: userCar.engine?.id || engineInfo[0].id,
      optionInfo: engineInfo,
    }),
  );

  const setEngineOption = ({ selectOption, index }) => {
    const Price = [...userCar.price];
    Price[page] = parseInt(selectOption.price.replace(/,/g, ''), 10);
    setUserCar((prevState) => ({
      ...prevState,
      engine: selectOption,
      price: Price,
    }));
    setSelected(index || 0);
  };

  useEffect(() => {
    if (!userCar.engine?.id) {
      setEngineOption({ selectOption: engineInfo[0] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
            index={index}
            isActive={selected === index}
            clickHandler={setEngineOption}
            option={option}
          />
        ))}
      </RightWrap>
    </EngineContainer>
  );
}
export default Engine;
