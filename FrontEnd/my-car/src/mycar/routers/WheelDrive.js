import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Container } from './Model';
import { styled } from 'styled-components';
import { LeftWrap, OptionImgWrap, RightWrap } from './Engine';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { MYCAR, wheelDriveInfo } from '../../constant';
import { SelectedIndex } from '../util/SelectedIndex';
import { useSelect } from '../useSelect';
import TrimImg from '../components/TrimImg';

const WheelDriveContainer = styled(Container)`
  flex-direction: row;
  gap: 40px;
`;

function WheelDrive() {
  const { setUserCar, userCar, trimOptions, page } = useOutletContext();

  const wheelOptions = trimOptions[MYCAR.TRIM.FILED.WHEEL].sort(
    (a, b) => a.id - b.id,
  );
  const [selected, setSelectedOption] = useSelect({
    setUserCar,
    userCar,
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
