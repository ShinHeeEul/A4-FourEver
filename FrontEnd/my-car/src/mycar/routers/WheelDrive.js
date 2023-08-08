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
      userOptionID: userCar.wheelDrive.id || wheelDriveInfo[0].id,
      optionInfo: wheelDriveInfo,
    }),
  );
  const setWheelOption = ({ selectOption, index }) => {
    const Price = [...userCar.price];
    Price[page] = parseInt(selectOption.price.replace(/,/g, ''), 10);
    setUserCar((prevState) => ({
      ...prevState,
      wheelDrive: selectOption,
      price: Price,
    }));
    setSelected(index || 0);
  };

  useEffect(() => {
    !userCar.WheelDrive?.id &&
      setWheelOption({ selectOption: wheelDriveInfo[0] });
    // if (!userCar.WheelDrive?.id) {

    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            index={index}
            isActive={selected === index}
            clickHandler={setWheelOption}
            option={option}
          />
        ))}
      </RightWrap>
    </WheelDriveContainer>
  );
}
export default WheelDrive;
