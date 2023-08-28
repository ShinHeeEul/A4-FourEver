import { createContext, useEffect, useState } from 'react';
import {
  useUserCarAction,
  useUserCarState,
} from '../../../mycar/hook/useUserCar';
import { MYCAR, USER_CAR_ACTIONS } from '../../../constant';

export const ColorActionContext = createContext();
export const ColorValueContext = createContext();

function ColorProvider({ exColorOptions, children }) {
  const userCar = useUserCarState();

  const [selected, setSelected] = useState({
    ex: userCar.outerColor?.id ? userCar.outerColor?.id - 1 : 2,
    in: userCar.innerColor?.id ? userCar.innerColor?.id - 1 : 0,
  });

  const [selectedOption, setSelectedOption] = useState(
    userCar.outerColor.id ? userCar.outerColor : exColorOptions[2],
  );
  const [activeColorFiled, setActiveColorFiled] = useState(
    MYCAR.COLOR.FILED.EXCOLOR,
  );

  const dispatch = useUserCarAction();
  const action = {
    onClick: ({ index, option, page, isExColor }) => {
      const Price = [...userCar.price];
      Price[page] = option.price;
      dispatch({
        type: isExColor ? USER_CAR_ACTIONS.EXCOLOR : USER_CAR_ACTIONS.INCOLOR,
        select: option,
        price: isExColor ? Price : [...userCar.price],
      });
      isExColor
        ? setSelected((prev) => ({ ...prev, ex: index }))
        : setSelected((prev) => ({ ...prev, in: index }));
      setSelectedOption(option);
      setActiveColorFiled(
        isExColor ? MYCAR.COLOR.FILED.EXCOLOR : MYCAR.COLOR.FILED.INCOLOR,
      );
    },
  };

  return (
    <ColorActionContext.Provider value={action}>
      <ColorValueContext.Provider
        value={{
          selected,
          selectedOption,
          activeColorFiled,
        }}
      >
        {children}
      </ColorValueContext.Provider>
    </ColorActionContext.Provider>
  );
}

export default ColorProvider;
