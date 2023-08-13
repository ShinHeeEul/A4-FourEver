import { useEffect, useState } from 'react';
import { useUserCarAction, useUserCarState } from './useUserCar';

export const useSelect = ({ option, field, page }) => {
  const dispatch = useUserCarAction();
  const userCar = useUserCarState();

  const [selected, setSelected] = useState(
    userCar[field]?.id ? userCar[field]?.id - 1 : 0,
  );

  const setSelectedOption = ({ selectOption, index = 0 }) => {
    const Price = [...userCar.price];
    Price[page] = selectOption.price;
    dispatch({ type: field, select: selectOption, price: Price });
    setSelected(index);
  };

  useEffect(() => {
    if (!userCar[field]?.name) {
      setSelectedOption({
        selectOption: option[0],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [selected, setSelectedOption];
};
