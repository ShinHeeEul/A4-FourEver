import { styled } from 'styled-components';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { Container } from './Model';
import { useOutletContext } from 'react-router-dom';
import { MYCAR } from '../../constant';
import TrimImg from '../components/TrimImg';
import { useSelect } from '../useSelect';

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
  position: relative;
  gap: 12px;
`;

function Engine() {
  const { setUserCar, userCar, trimOptions, page } = useOutletContext();
  const engineOption = trimOptions[MYCAR.TRIM.FILED.ENGINE];
  const [selected, setSelectedOption] = useSelect({
    setUserCar,
    userCar,
    option: engineOption,
    field: 'engine',
    page,
  });

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
