import { useEffect, useState } from 'react';

export const useSelect = ({ userCar, setUserCar, option, field, page }) => {
  const [selected, setSelected] = useState(
    userCar[field]?.id ? userCar[field]?.id - 1 : 0,
  );

  const setSelectedOption = ({ selectOption, index = 0 }) => {
    const Price = [...userCar.price];
    Price[page] = selectOption.price;
    setUserCar((prevState) => ({
      ...prevState,
      [field]: selectOption,
      price: Price,
    }));
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
