import { styled } from 'styled-components';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { Container } from './Trim';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { engineInfo } from '../../constant';

const EngineContainer = styled(Container)`
  flex-direction: row;
  gap: 40px;
`;

export const OptionImgWrap = styled.div`
  width: 620px;
  height: 400px;
  flex-shrink: 0;
  background-color: black;
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
  // const engine = [
  //   {
  //     name: '디젤 2.2',
  //     price: '1,480,000',
  //     explanation:
  //       '높은 토크로 파워풀한 드라이빙이 가능하며, 차급대비 연비 효율이 우수합니다.',
  //     maxOutput: '295/6,000PS/rpm',
  //     maxTalk: '36.2/5,200kgf-m/rpm',
  //   },
  //   {
  //     name: '가솔린 3.8',
  //     price: '1,480,001',
  //     explanation:
  //       '고마력의 우수한 가속 성능을 확보하여, 넉넉하고 안정감 있는 주행이 가능합니다엔진의 진동이 적어 편안하고 조용한 드라이빙 감성을 제공합니다.',
  //     maxOutput: '295/6,000PS/rpm',
  //     maxTalk: '36.2/5,200kgf-m/rpm',
  //   },
  // ];
  const { setUserCar, userCar, page } = useOutletContext();
  const [selected, setSelected] = useState(userCar.engine || 0);

  const setEngineOption = (id) => {
    const Price = [...userCar.price];
    Price[page] = parseInt(engineInfo[id].price.replace(/,/g, ''), 10);
    setUserCar((prevState) => ({
      ...prevState,
      engine: id,
      price: Price,
    }));
  };

  const optionClick = (optionId) => {
    setSelected(optionId);
    setEngineOption(optionId);
  };

  useEffect(() => {
    if (!userCar.engine) {
      setEngineOption(0);
    }
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
