import { styled } from 'styled-components';
import TitlePriceTag from '../components/TitlePriceTag';
import { LeftWrap, RightWrap } from './Engine';
import { Container } from './Trim';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import { basicOptionInfo, selectOptionInfo } from '../../constant';
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
  const [selected, setSelected] = useState(0);
  const [isBasicTab, setIsBasicTab] = useState(false);
  const [basicIndex, setBasicIndex] = useState(0);
  const [modal, setModal] = useState({ show: false, optionId: 0 });

  const categoryClick = (index) => {
    setBasicIndex(index);
  };
  const optionClick = (index) => {
    setSelected(index);
  };

  const addOption = (index) => {
    const price = parseInt(selectOptionInfo[index].price.replace(/,/g, ''), 10);

    const OptionPrice = [...userCar.optionPrice];
    OptionPrice.push(price);
    const SelectOptions = [...userCar.selectedOptions];
    SelectOptions.push(index);

    setUserCar((prev) => ({
      ...prev,
      selectedOptions: SelectOptions,
      optionPrice: OptionPrice,
    }));
  };
  const removeOption = () => {};

  return (
    <SelectOptionContainer>
      <TopContentsWrap>
        <LeftWrap>
          <SelectedOptionImgWrap></SelectedOptionImgWrap>
        </LeftWrap>
        <RightWrap>
          <TitlePriceTag
            isSmall={true}
            selectedOption={selectOptionInfo[selected]}
          />
          <DetailExplainCard
            selected={selected}
            selectOptionInfo={selectOptionInfo}
          />
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
            !isBasicTab ? selectOptionInfo : basicOptionInfo[basicIndex].options
          }
          selected={selected}
          isBasicTab={isBasicTab}
          optionClick={optionClick}
          addOption={addOption}
          setModal={setModal}
        />
      </SelectOptionWrap>
      <BasicOptionModal
        modal={modal}
        setModal={setModal}
        option={basicOptionInfo[basicIndex].options}
      />
    </SelectOptionContainer>
  );
}
export default SelectOption;
