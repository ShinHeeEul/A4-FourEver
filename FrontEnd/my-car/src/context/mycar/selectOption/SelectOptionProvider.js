import { createContext, useState } from 'react';
import { useUserCarAction } from '../../../mycar/hook/useUserCar';
import { USER_CAR_ACTIONS } from '../../../constant';

export const OptionActionContext = createContext();
export const OptionValueContext = createContext();

function SelectOptionProvider({ children }) {
  const dispatch = useUserCarAction();

  const [optionList, setOptionList] = useState();
  const [selected, setSelected] = useState(0);

  const [explainPage, setExplainPage] = useState(0);

  //기본 옵션 관련
  const [basicIndex, setBasicIndex] = useState(0);
  const [isBasicTab, setIsBasicTab] = useState(false);

  //위치보기
  const [flipped, setFlipped] = useState(false);

  //모달
  const [modal, setModal] = useState({ show: false, optionId: 0 });
  const action = {
    setOptions: (option) => setOptionList(option),
    select: (index) => setSelected(index),
    setPage: (page) => setExplainPage(page),
    setBasicIndex: (index) => setBasicIndex(index),
    changeTab: (state) => setIsBasicTab(state),
    setFlipped: (state) => setFlipped(state),
    setModal: ({ show, optionId }) =>
      setModal((prev) => {
        const updatedModal = { ...prev };
        if (show !== undefined) {
          updatedModal.show = show;
        }
        if (optionId !== undefined) {
          updatedModal.optionId = optionId;
        }

        return updatedModal;
      }),
    addOption: ({ index }) => {
      dispatch({
        type: USER_CAR_ACTIONS.ADD_SELECT,
        select: optionList[index],
      });
    },
    removeOption: ({ index }) => {
      dispatch({
        type: USER_CAR_ACTIONS.REMOVE_SELECT,
        select: optionList[index],
      });
    },
  };

  return (
    <OptionActionContext.Provider value={action}>
      <OptionValueContext.Provider
        value={{
          optionList,
          selected,
          explainPage,
          basicIndex,
          isBasicTab,
          flipped,
          modal,
        }}
      >
        {children}
      </OptionValueContext.Provider>
    </OptionActionContext.Provider>
  );
}

export default SelectOptionProvider;
