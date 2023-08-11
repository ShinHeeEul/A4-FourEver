import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { styled } from 'styled-components';
import { Container } from './Model';
import { LeftWrap, RightWrap } from './Engine';
import TitlePriceTag from '../components/common/TitlePriceTag';
import { MYCAR } from '../../constant';

import TrimImg from '../components/common/TrimImg';
import ColorComponents from '../components/colorPage/ColorSelect';

const ColorContainer = styled(Container)`
  flex-direction: row;
  gap: 75px;
`;
const ColorRightWrap = styled(RightWrap)`
  gap: 34px;
`;

function Color() {
  const { setUserCar, userCar, page, inColorOptions, exColorOptions } =
    useOutletContext();

  const [selectedOption, setSelectedOption] = useState(
    userCar.outerColor.id ? userCar.outerColor : exColorOptions[2],
  );
  const [outerSelected, setOuterSelected] = useState(
    userCar.outerColor?.id ? userCar.outerColor?.id - 1 : 2,
  );

  const [innerSelected, setInnerSelected] = useState(
    userCar.innerColor?.id ? userCar.innerColor?.id - 1 : 0,
  );
  const [activeColorFiled, setActiveColorFiled] = useState(
    MYCAR.COLOR.FILED.EXCOLOR,
  );

  const outerClick = ({ option, index }) => {
    const Price = [...userCar.price];
    Price[page] = option.price;
    setUserCar((prevState) => ({
      ...prevState,
      outerColor: option,
      price: Price,
    }));
    setOuterSelected(index);
    setSelectedOption(option);
    setActiveColorFiled(MYCAR.COLOR.FILED.EXCOLOR);
  };

  const innerClick = ({ option, index }) => {
    setUserCar((prevState) => ({
      ...prevState,
      innerColor: option,
    }));
    setInnerSelected(index);
    setSelectedOption(option);
    setActiveColorFiled(MYCAR.COLOR.FILED.INCOLOR);
  };

  useEffect(() => {
    if (!userCar.outerColor?.name && !userCar.innerColor?.name) {
      setUserCar((prevState) => ({
        ...prevState,
        outerColor: exColorOptions[2],
        innerColor: inColorOptions[0],
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ColorContainer>
      <LeftWrap>
        <TrimImg
          src={selectedOption[MYCAR.COLOR.FILED.IMG[activeColorFiled]]}
        />
        <TitlePriceTag
          selectedOption={selectedOption}
          tagFiled={MYCAR.COLOR.FILED.TAGS[activeColorFiled]}
        />
      </LeftWrap>
      <ColorRightWrap>
        <ColorComponents
          title="외장 색상"
          options={exColorOptions}
          selected={outerSelected}
          optionClick={outerClick}
        />
        <ColorComponents
          title="내장 색상"
          options={inColorOptions}
          selected={innerSelected}
          optionClick={innerClick}
        />
      </ColorRightWrap>
    </ColorContainer>
  );
}
export default Color;
