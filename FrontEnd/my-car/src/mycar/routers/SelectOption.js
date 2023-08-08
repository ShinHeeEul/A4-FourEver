import { styled } from 'styled-components';
import TitlePriceTag from '../components/TitlePriceTag';
import { LeftWrap, RightWrap } from './Engine';
import { Container } from './Trim';
import { useEffect, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';

import {
  basicOptionInfo,
  navCategoryName,
  selectOptionInfo,
} from '../../constant';
import DetailExplainCard from '../components/DetailExplainCard';
import OptionTabs from '../components/OptionTabs';
import OptionCard from '../components/OptionCard';
import BasicOptionModal from '../components/BasicOptionModal';

const SelectOptionContainer = styled(Container)`
  align-items: center;
  gap: 50px;
  position: relative;
`;
const TopContentsWrap = styled(Container)`
  flex-direction: row;
  gap: 40px;
  margin: 0;
  width: 1020px;
  justify-content: space-between;
`;

const SelectedOptionImgWrap = styled.div`
  width: 479px;
  height: 304px;
  flex-shrink: 0;
  background-color: black;
`;
const SelectOptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 1020px;
`;

function SelectOption() {
  const { setUserCar, userCar, page } = useOutletContext();

  //선택 옵션 관련
  const [optionList, setOptionList] = useState();
  const [selected, setSelected] = useState(0);

  //기본 옵션 관련
  const [basicIndex, setBasicIndex] = useState(0);
  const [isBasicTab, setIsBasicTab] = useState(false);

  //모달
  const [modal, setModal] = useState({ show: false, optionId: 0 });

  //이벤트 리스너
  const categoryClick = (index) => {
    setBasicIndex(index);
  };
  const optionClick = (index) => {
    setSelected(index);
  };

  const addOption = (index) => {
    const price = parseInt(optionList[index].price.replace(/,/g, ''), 10);
    const OptionPrice = [...userCar.optionPrice];
    OptionPrice.push(price);
    const SelectOptions = [...userCar.selectedOptions];
    SelectOptions.push(optionList[index]);

    setUserCar((prev) => ({
      ...prev,
      selectedOptions: SelectOptions,
      optionPrice: OptionPrice,
    }));
  };
  const removeOption = (index) => {
    const optionPrice = [...userCar.optionPrice];
    const prevOption = [...userCar.selectedOptions];

    const indexToRemove = prevOption.findIndex(
      (option) => option.id === optionList[index].id,
    );
    optionPrice.splice(indexToRemove, 1);

    const newOption = prevOption.filter(
      (option) => option.id !== optionList[index].id,
    );

    setUserCar((prev) => ({
      ...prev,
      selectedOptions: newOption,
      optionPrice: optionPrice,
    }));
  };

  //선택 옵션 -> 악세서리 -> 퍼포먼스 페이지에 따른 optionList 셋팅
  const location = useLocation().pathname;
  const pathnameList = location.split('/').slice(2);
  const [titlePathName, subPathName] = pathnameList;

  useEffect(() => {
    const categoryName = navCategoryName[titlePathName].value[subPathName];
    const currentOptions = selectOptionInfo.filter(
      (option) => option.category === categoryName,
    );
    setOptionList(currentOptions);
    setSelected(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <SelectOptionContainer>
      {optionList && (
        <>
          <TopContentsWrap>
            <LeftWrap>
              <SelectedOptionImgWrap></SelectedOptionImgWrap>
            </LeftWrap>
            <RightWrap>
              <TitlePriceTag
                isSmall={true}
                selectedOption={optionList[selected]}
              />
              <DetailExplainCard selectedOption={optionList[selected]} />
            </RightWrap>
          </TopContentsWrap>
          <SelectOptionWrap>
            <OptionTabs
              isBasicTab={isBasicTab}
              setIsBasicTab={setIsBasicTab}
              basicIndex={basicIndex}
              categoryClick={categoryClick}
            />
            <OptionCard
              optionInfo={
                !isBasicTab ? optionList : basicOptionInfo[basicIndex].options
              }
              selected={selected}
              isBasicTab={isBasicTab}
              optionClick={optionClick}
              setModal={setModal}
              addOption={addOption}
              removeOption={removeOption}
            />
          </SelectOptionWrap>
          <BasicOptionModal
            modal={modal}
            setModal={setModal}
            option={basicOptionInfo[basicIndex].options}
          />
        </>
      )}
    </SelectOptionContainer>
  );
}
export default SelectOption;
