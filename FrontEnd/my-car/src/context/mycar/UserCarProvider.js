import { createContext, useEffect, useReducer, useState } from 'react';
import { UserCarReducer } from '../../store/MycarStore';

export const UserCarActionContext = createContext();
export const UserCarValueContext = createContext();
export const PageContext = createContext();

function UserCarProvider({ children }) {
  const savedUserCar = localStorage.getItem('userCar');
  const initialUserCar = savedUserCar
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
