import { createContext, useEffect, useState } from 'react';
import { MakePath } from '../../api';
import { ARCHIVING } from '../../constant';
import useFetch from '../../archiving/hook/useFetch';

export const OptionSelectValue = createContext();
export const OptionSelectAction = createContext();

function ArchivingProvider({ children, setLoading }) {
  const [activeStates, setActiveStates] = useState({}); //선택 옵션
  const [activeTab, setActiveTab] = useState(0); // 선택 탭(전체/시승/구매)

  const [optionSelect, setOptionSelect] = useState({
    extraOptionIds: [],
  });

  const { data: reviewList, loading: reviewLoading } = useFetch({
    url: `${MakePath.option(ARCHIVING.URL.REVIEW)}${
      activeTab !== 0 ? (activeTab === 1 ? '/1' : '/0') : ''
    }`,
    config: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(optionSelect),
    },
    optionSelect,
    activeTab,
  });

  const { data: optionList, loading: optionLoading } = useFetch({
    url: MakePath.option(ARCHIVING.URL.OPTIONS),
    config: { method: 'GET' },
  });

  useEffect(() => {
    setLoading(true);

    if (!reviewLoading && !optionLoading) {
      setLoading(false);
    }
  }, [reviewLoading, optionLoading, setLoading]);

  const action = {
    select: ({ id }) => {
      setActiveStates((prevActiveStates) => ({
        ...prevActiveStates,
        [id]: !prevActiveStates[id],
      }));
      let newSelectList = [...optionSelect.extraOptionIds];
      const alreadyExist = newSelectList.some(
        (selectedId) => selectedId === id,
      );
      if (!alreadyExist) {
        newSelectList.push(id);
      } else {
        newSelectList = newSelectList.filter(
          (newSelectList) => newSelectList !== id,
        );
      }
      setOptionSelect({ extraOptionIds: newSelectList });
    },
    tab: ({ index }) => {
      setActiveTab(index);
    },
  };

  return (
    <OptionSelectAction.Provider value={{ action }}>
      <OptionSelectValue.Provider
        value={{ activeStates, activeTab, optionList, reviewList }}
      >
        {children}
      </OptionSelectValue.Provider>
    </OptionSelectAction.Provider>
  );
}

export default ArchivingProvider;
