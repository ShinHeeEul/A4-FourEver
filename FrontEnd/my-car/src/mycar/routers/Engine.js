import { useOutletContext } from 'react-router-dom';
import { styled } from 'styled-components';
import TitlePriceTag from '../components/common/TitlePriceTag';
import MandatoryCard from '../components/common/MandatoryCard';
import { Container } from './Model';
import { MYCAR } from '../../constant';
import TrimImg from '../components/common/TrimImg';
import { useSelect } from '../hook/useSelect';
import { useEffect, useLayoutEffect } from 'react';

const EngineContainer = styled(Container)`
  flex-direction: row;
  gap: 40px;
`;

export const OptionImgWrap = styled.div`
  width: 700px;
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
  position: relative;
  gap: 12px;
`;

function Engine() {
  const { trimOptions, page } = useOutletContext();
  const engineOption = trimOptions[MYCAR.TRIM.FILED.ENGINE];

  const [selected, setSelectedOption] = useSelect({
    option: engineOption,
    field: 'engine',
    page,
  });

  const CarColor = ['abyss', 'silver', 'blue', 'brown', 'gray', 'white'];

  const preloadCarImg = () => {
    const promise = CarColor.map((color) => {
      return new Promise((resolve) => {
        const imagePaths = Array.from(
          { length: 60 },
          (_, index) =>
            `https://s3.ap-northeast-2.amazonaws.com/hyundaimycar.store/rotation/${color}/${
              index + 1
            }.webp`,
        );
        imagePaths.forEach((path) => {
          const img = new Image();
          img.src = path;
          img.onload = resolve;
        });
      });
    });
    return Promise.all(promise);
  };
  useEffect(() => {
    preloadCarImg().then(() => {
      // setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EngineContainer>
      <LeftWrap>
        <TrimImg src={engineOption[selected].image} />
        <TitlePriceTag selectedOption={engineOption[selected]} />
      </LeftWrap>
      <RightWrap>
        {engineOption.map((option, index) => (
          <MandatoryCard
            key={index}
            index={index}
            isActive={selected === index}
            clickHandler={setSelectedOption}
            option={option}
          />
        ))}
      </RightWrap>
    </EngineContainer>
  );
}
export default Engine;
