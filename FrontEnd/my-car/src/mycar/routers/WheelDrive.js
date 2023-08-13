import { styled } from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import { Container } from './Model';
import { LeftWrap, OptionImgWrap, RightWrap } from './Engine';
import TitlePriceTag from '../components/common/TitlePriceTag';
import MandatoryCard from '../components/common/MandatoryCard';
import { MYCAR } from '../../constant';
import { useSelect } from '../hook/useSelect';
import TrimImg from '../components/common/TrimImg';

const WheelDriveContainer = styled(Container)`
  flex-direction: row;
  gap: 40px;
`;

function WheelDrive() {
  const { trimOptions, page } = useOutletContext();
  const wheelOptions = trimOptions[MYCAR.TRIM.FILED.WHEEL];

  const [selected, setSelectedOption] = useSelect({
    option: wheelOptions,
    field: 'wheelDrive',
    page,
  });

  return (
    <WheelDriveContainer>
      <LeftWrap>
        <TrimImg src={wheelOptions[selected].image} />
        <TitlePriceTag selectedOption={wheelOptions[selected]} />
      </LeftWrap>
      <RightWrap>
        {wheelOptions.map((option, index) => (
          <MandatoryCard
            key={index}
            index={index}
            isActive={selected === index}
            clickHandler={setSelectedOption}
            option={option}
          />
        ))}
      </RightWrap>
    </WheelDriveContainer>
  );
}
export default WheelDrive;
