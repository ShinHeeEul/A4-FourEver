import { styled } from 'styled-components';
import { Container } from './Trim';
import { LeftWrap, OptionImgWrap, RightWrap } from './Engine';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const BodyTypeContainer = styled(Container)`
  flex-direction: row;
  gap: 40px;
`;
function BodyType() {
  const bodyType = [
    {
      name: '7인승',
      price: '0',
      explanation:
        '기존 8인승 시트(1열 2명, 2열 3명, 3열 3명)에서 2열 가운데 시트를 없애 2열 탑승객의 편의는 물론, 3열 탑승객의 승하차가 편리합니다.',
    },
    {
      name: '8인승',
      price: '0',
      explanation:
        '1열 2명, 2열 3명, 3열 3명이 탑승할 수 있는 구조로, 많은 인원이 탑승할 수 있도록 배려하였습니다',
    },
  ];
  const { setUserCar, userCar, page } = useOutletContext();
  const [selected, setSelected] = useState(userCar.bodyType || 0);
  const setEngineOption = (id) => {
    const Price = [...userCar.price];
    Price[page] = parseInt(bodyType[id].price.replace(/,/g, ''), 10);
    setUserCar((prevState) => ({
      ...prevState,
      bodyType: id,
      price: Price,
    }));
  };

  const optionClick = (optionId) => {
    setSelected(optionId);
    setEngineOption(optionId);
  };
  useEffect(() => {
    if (!userCar.bodyType) {
      setEngineOption(0);
    }
  }, []);
  return (
    <BodyTypeContainer>
      <LeftWrap>
        <OptionImgWrap></OptionImgWrap>
        <TitlePriceTag />
      </LeftWrap>
      <RightWrap>
        {bodyType.map((option, index) => (
          <MandatoryCard
            key={index}
            id={index}
            isActive={selected === index}
            clickHandler={optionClick}
            option={option}
          />
        ))}
      </RightWrap>
    </BodyTypeContainer>
  );
}
export default BodyType;
