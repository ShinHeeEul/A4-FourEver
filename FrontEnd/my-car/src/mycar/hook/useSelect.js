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

export const useColorSelect = ({
  userCar,
  setUserCar,
  selectOption,
  colorOptions,
}) => {
  const [outerSelected, setOuterSelected] = useState();
  const [innerSelected, setInnerSelected] = useState();
  const [selectedOption, setSelectedOption] = useState(
    userCar.outerColor.id ? userCar.outerColor.id - 1 : colorOptions[2],
  );

  const outerClick = (index) => {
    const Price = [...userCar.price];
    setUserCar((prevState) => ({
      ...prevState,
      outerColor: selectOption[index],
      price: Price,
    }));
    setOuterSelected(index);
    setSelectedOption(selectOption[index]);
  };

  const innerClick = (index) => {
    setUserCar((prevState) => ({
      ...prevState,
      innerColor: selectOption[index],
    }));
    setInnerSelected(index);
    setSelectedOption(selectOption[index]);
  };
  return [
    outerClick,
    innerClick,
    outerSelected,
    setOuterSelected,
    innerSelected,
    setInnerSelected,
  ];
};
