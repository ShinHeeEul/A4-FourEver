import { createContext, useEffect, useState } from 'react';
import { MakePath } from '../../api';
import { ARCHIVING } from '../../constant';
import useFetch from '../../archiving/hook/useFetch';

export const OptionSelectValue = createContext();
export const OptionSelectAction = createContext();
export const ModalContext = createContext();

function ArchivingProvider({ children, setLoading, fromMycar }) {
  const [firstBoarding, setFirstBoarding] = useState(true);

  const accessToken = localStorage.getItem('jwtToken');

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
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(optionSelect),
    },
    optionSelect,
    activeTab,
  });

  const [optionList, setOptionList] = useState();
  const [optionLoading, setOptionLoading] = useState(true);
  const fetchData = async () => {
    // setController(new AbortController());
    try {
      const response = await fetch(MakePath.option(ARCHIVING.URL.OPTIONS), {
        method: 'GET',
      });
      const jsonData = await response.json();

      setOptionList(jsonData);
      setOptionLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // const { data: optionList, loading: optionLoading } = useFetch({
  //   url: MakePath.option(ARCHIVING.URL.OPTIONS),
  //   config: { method: 'GET' },
  // });
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true);

    if (!reviewLoading && !optionLoading) {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewLoading, optionLoading]);

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

  useEffect(() => {
    const userCar = JSON.parse(localStorage.getItem('userCar'));
    if (fromMycar !== null && fromMycar?.fromMycar !== null && userCar) {
      const ids = userCar.selectedOptions.map((option) => option.id);
      setLoading(true);
      ids.forEach((id) => {
        setActiveStates((prevActiveStates) => ({
          ...prevActiveStates,
          [id]: !prevActiveStates[id],
        }));
      });
      let newSelectList = [...optionSelect.extraOptionIds];
      newSelectList = [...newSelectList, ...ids];
      setOptionSelect({ extraOptionIds: newSelectList });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OptionSelectAction.Provider value={{ action }}>
      <OptionSelectValue.Provider
        value={{
          activeStates,
          activeTab,
          optionList,
          reviewList,
        }}
      >
        <ModalContext.Provider value={{ firstBoarding, setFirstBoarding }}>
          {children}
        </ModalContext.Provider>
      </OptionSelectValue.Provider>
    </OptionSelectAction.Provider>
  );
}

export default ArchivingProvider;
