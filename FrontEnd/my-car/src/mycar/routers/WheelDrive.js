import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Container } from './Trim';
import { styled } from 'styled-components';
import { LeftWrap, OptionImgWrap, RightWrap } from './Engine';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { wheelDriveInfo } from '../../constant';
import { SelectedIndex } from '../util/SelectedIndex';

const WheelDriveContainer = styled(Container)`
  flex-direction: row;
  gap: 40px;
`;

function WheelDrive() {
  const { setUserCar, userCar, page } = useOutletContext();
  const [selected, setSelected] = useState(
    SelectedIndex({
      userOption: userCar.wheelDrive,
      optionInfo: wheelDriveInfo,
    }),
  );
  const setWheelOption = (index) => {
    const Price = [...userCar.price];
    Price[page] = parseInt(wheelDriveInfo[index].price.replace(/,/g, ''), 10);
    setUserCar((prevState) => ({
      ...prevState,
      wheelDrive: wheelDriveInfo[index],
      price: Price,
    }));
  };

  const optionClick = (optionId) => {
    setSelected(optionId);
    setWheelOption(optionId);
  };

  return (
    <WheelDriveContainer>
      <LeftWrap>
        <OptionImgWrap></OptionImgWrap>
        <TitlePriceTag selectedOption={wheelDriveInfo[selected]} />
      </LeftWrap>
      <RightWrap>
        {wheelDriveInfo.map((option, index) => (
          <MandatoryCard
            key={index}
            id={index}
            isActive={selected === index}
            clickHandler={optionClick}
            option={option}
          />
        ))}
      </RightWrap>
    </WheelDriveContainer>
  );
}
export default WheelDrive;
