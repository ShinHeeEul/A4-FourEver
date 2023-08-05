import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Container } from './Trim';
import { styled } from 'styled-components';
import { LeftWrap, OptionImgWrap, RightWrap } from './Engine';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { wheelDriveInfo } from '../../constant';

const WheelDriveContainer = styled(Container)`
  flex-direction: row;
  gap: 40px;
`;

function WheelDrive() {
  const { setUserCar, userCar, page } = useOutletContext();
  const [selected, setSelected] = useState(userCar.wheelDrive || 0);

  const setWheelOption = (id) => {
    const Price = [...userCar.price];
    Price[page] = parseInt(wheelDriveInfo[id].price.replace(/,/g, ''), 10);
    setUserCar((prevState) => ({
      ...prevState,
      wheelDrive: id,
      price: Price,
    }));
  };

  const optionClick = (optionId) => {
    setSelected(optionId);
    setWheelOption(optionId);
  };
  useEffect(() => {
    if (!userCar.wheelDrive) {
      setWheelOption(0);
    }
  }, []);
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
