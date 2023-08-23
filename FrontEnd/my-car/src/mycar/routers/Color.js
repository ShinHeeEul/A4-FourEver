import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { styled } from 'styled-components';
import { Container } from './Model';
import { LeftWrap, RightWrap } from './Engine';
import TitlePriceTag from '../components/common/TitlePriceTag';
import { MYCAR, USER_CAR_ACTIONS } from '../../constant';

import TrimImg from '../components/common/TrimImg';
import ColorComponents from '../components/colorPage/ColorSelect';

import {
  ColorActionContext,
  ColorValueContext,
} from '../../context/mycar/color/ColorPrivider';
import { useUserCarAction, useUserCarState } from '../hook/useUserCar';
import RotateImg from '../components/colorPage/RotateImg';

const ColorContainer = styled(Container)`
  flex-direction: row;
  gap: 75px;
`;
const ColorRightWrap = styled(RightWrap)`
  gap: 34px;
`;

function Color() {
  const { page, inColorOptions, exColorOptions } = useOutletContext();

  const { selected, selectedOption, activeColorFiled } =
    useContext(ColorValueContext);

  const dispatch = useUserCarAction();
  const userCar = useUserCarState();

  const [loading, setLoading] = useState(true);
  const action = useContext(ColorActionContext);
  useEffect(() => {
    if (!userCar.outerColor?.name && !userCar.innerColor?.name) {
      const Price = [...userCar.price];
      Price[page] = exColorOptions[0].price;

      dispatch({
        type: USER_CAR_ACTIONS.EXCOLOR,
        select: exColorOptions[0],
        price: Price,
      });

      dispatch({
        type: USER_CAR_ACTIONS.INCOLOR,
        select: inColorOptions[0],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  useLayoutEffect(() => {
    preloadCarImg().then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ColorContainer>
      <LeftWrap>
        {activeColorFiled === MYCAR.COLOR.FILED.EXCOLOR ? (
          <RotateImg
            loading={loading}
            selectedOption={selectedOption}
          ></RotateImg>
        ) : (
          <TrimImg
            src={selectedOption[MYCAR.COLOR.FILED.IMG[activeColorFiled]]}
          />
        )}

        <TitlePriceTag
          selectedOption={selectedOption}
          tagFiled={MYCAR.COLOR.FILED.TAGS[activeColorFiled]}
        />
      </LeftWrap>
      <ColorRightWrap>
        <ColorComponents
          title="외장 색상"
          options={exColorOptions}
          selected={selected.ex}
          isExColor={true}
        />
        <ColorComponents
          title="내장 색상"
          options={inColorOptions}
          selected={selected.in}
          isExColor={false}
        />
      </ColorRightWrap>
    </ColorContainer>
  );
}
export default Color;
