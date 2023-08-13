import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import TitlePriceTag from '../components/common/TitlePriceTag';
import { LeftWrap, RightWrap } from './Engine';
import { Container } from './Model';

import { navCategoryName } from '../../constant';
import DetailExplainCard from '../components/selectOptionPage/DetailExplainCard';
import OptionTabs from '../components/selectOptionPage/OptionTabs';
import OptionCard from '../components/selectOptionPage/OptionCard';
import BasicOptionModal from '../components/selectOptionPage/BasicOptionModal';
import { MYCAR } from '../../constant';
import { useSelectAction, useSelectValue } from '../hook/useUserCar';
import OptionImage from '../components/selectOptionPage/OptionImage';

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

const SelectOptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 1020px;
`;

function SelectOption() {
  const { page, basicOptions, selectOptions } = useOutletContext();

  const { selected, isBasicTab, basicIndex, optionList } = useSelectValue();
  const { setOptions, select, changeTab, setPage, setFlipped } =
    useSelectAction();

  //선택 옵션 -> 악세서리 -> 퍼포먼스 페이지에 따른 optionList 셋팅
  const location = useLocation().pathname;
  const pathnameList = location.split('/').slice(2);
  const [titlePathName, subPathName] = pathnameList;

  useEffect(() => {
    const categoryName = navCategoryName[titlePathName].value[subPathName];

    const currentOptions = selectOptions.find(
      (option) => option.category === categoryName,
    );
    setOptions(currentOptions.options);
    select(0);
    setPage(0);
    setFlipped(false);
    changeTab(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setFlipped(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <SelectOptionContainer>
      {optionList && (
        <>
          <TopContentsWrap>
            <LeftWrap style={{ position: 'relative' }}>
              <OptionImage />
            </LeftWrap>
            <RightWrap>
              <TitlePriceTag
                isSmall={true}
                tagFiled={MYCAR.SELECTED.FILED.TAGS}
                selectedOption={optionList[selected]}
              />
              <DetailExplainCard />
            </RightWrap>
          </TopContentsWrap>
          <SelectOptionWrap>
            <OptionTabs />
            <OptionCard
              optionInfo={
                !isBasicTab ? optionList : basicOptions[basicIndex].options
              }
            />
          </SelectOptionWrap>
          <BasicOptionModal option={basicOptions[basicIndex].options} />
        </>
      )}
    </SelectOptionContainer>
  );
}
export default SelectOption;
