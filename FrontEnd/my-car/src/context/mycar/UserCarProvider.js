import { createContext, useEffect, useReducer, useState } from 'react';
import { UserCarReducer } from '../../store/MycarStore';

export const UserCarActionContext = createContext();
export const UserCarValueContext = createContext();
export const PageContext = createContext();

function UserCarProvider({ children, fromChivingState }) {
  const savedUserCar = localStorage.getItem('userCar');

  let initialUserCar = {};

  if (fromChivingState) {
    //아카이빙에서 넘어온 경우

    localStorage.setItem('myChiving_id', 0);

    //마이카이빙 임시저장에서 넘어온 경우
    // localStorage.getItem('myChiving_id', fromChivingState.id);

    const optionPrices = fromChivingState.extraOptionDTOs.map(
      (option) => option.price,
    );
    initialUserCar = {
      trim: fromChivingState.trimInfoDTO,
      engine: fromChivingState.engineInfoDTO,
      bodyType: fromChivingState.bodyInfoDTO,
      wheelDrive: fromChivingState.driveInfoDTO,
      outerColor: fromChivingState.exColorDTO,
      innerColor: fromChivingState.inColorDTO,
      selectedOptions: fromChivingState.extraOptionDTOs,
      price: [
        fromChivingState.trimInfoDTO.price,
        fromChivingState.engineInfoDTO.price,
        fromChivingState.bodyInfoDTO.price,
        fromChivingState.driveInfoDTO.price,
        fromChivingState.exColorDTO.price,
      ],
      optionPrice: optionPrices,
    };
    localStorage.setItem('userCar', JSON.stringify(initialUserCar));
  } else {
    initialUserCar = savedUserCar
      ? JSON.parse(savedUserCar)
      : {
          trim: {},
          engine: {},
          bodyType: {},
          wheelDrive: {},
          outerColor: {},
          innerColor: {},
          selectedOptions: [],
          price: [47720000],
          optionPrice: [],
        };
  }

  const [userCar, dispatch] = useReducer(UserCarReducer, initialUserCar);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const summaryModalAction = {
    closeModal: () => setShowSummaryModal(false),
    showModal: () => setShowSummaryModal(true),
  };

  useEffect(() => {
    localStorage.setItem('userCar', JSON.stringify(userCar));
  }, [userCar]);

  return (
    <UserCarActionContext.Provider value={{ dispatch, summaryModalAction }}>
      <UserCarValueContext.Provider value={{ userCar, showSummaryModal }}>
        {children}
      </UserCarValueContext.Provider>
    </UserCarActionContext.Provider>
  );
}

export default UserCarProvider;
