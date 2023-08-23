import { createContext, useEffect, useReducer, useState } from 'react';
import { UserCarReducer } from '../../store/MycarStore';

export const UserCarActionContext = createContext();
export const UserCarValueContext = createContext();
export const PageContext = createContext();

function UserCarProvider({ children, fromChivingState }) {
  const savedUserCar = localStorage.getItem('userCar');

  let initialUserCar = {};

  if (fromChivingState) {
    //마이카이빙 임시저장에서 넘어온 경우
    if (fromChivingState?.id) {
      localStorage.setItem('myChiving_id', fromChivingState.id);
    } else {
      //아카이빙에서 넘어온 경우
      localStorage.setItem('myChiving_id', 0);
    }

    const optionPrices =
      fromChivingState.data.extraOptionDTOs === ('null' || null)
        ? []
        : fromChivingState.data.extraOptionDTOs.map((option) => option.price);
    initialUserCar = {
      trim: fromChivingState.data.trimInfoDTO || {},
      engine: fromChivingState.data.engineInfoDTO || {},
      bodyType: fromChivingState.data.bodyInfoDTO || {},
      wheelDrive: fromChivingState.data.driveInfoDTO || {},
      outerColor: fromChivingState.data.exColorDTO || {},
      innerColor: fromChivingState.data.inColorDTO || {},
      selectedOptions: fromChivingState.data.extraOptionDTOs || [],
      price: [
        fromChivingState.data.trimInfoDTO?.price,
        fromChivingState.data.engineInfoDTO?.price || 0,
        fromChivingState.data.bodyInfoDTO?.price || 0,
        fromChivingState.data.driveInfoDTO?.price || 0,
        fromChivingState.data.exColorDTO?.price || 0,
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
