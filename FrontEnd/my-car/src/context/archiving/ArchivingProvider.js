import { createContext, useState } from 'react';

export const OptionSelectValue = createContext();
export const OptionSelectAction = createContext();

function ArchivingProvider({ children }) {
  const [activeStates, setActiveStates] = useState({}); //선택 옵션
  const [activeTab, setActiveTab] = useState(0); // 선택 탭(전체/시승/구매)

  const action = {
    select: ({ id }) => {
      setActiveStates((prevActiveStates) => ({
        ...prevActiveStates,
        [id]: !prevActiveStates[id],
      }));
    },
    tab: ({ index }) => {
      setActiveTab(index);
    },
  };

  return (
    <OptionSelectAction.Provider value={{ action }}>
      <OptionSelectValue.Provider value={{ activeStates, activeTab }}>
        {children}
      </OptionSelectValue.Provider>
    </OptionSelectAction.Provider>
  );
}

export default ArchivingProvider;
