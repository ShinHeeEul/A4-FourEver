import { css, styled } from 'styled-components';
import TitlePriceTag from '../components/TitlePriceTag';
import { LeftWrap, RightWrap } from './Engine';
import { Container } from './Model';
import { useEffect, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';

import { navCategoryName } from '../../constant';
import DetailExplainCard from '../components/DetailExplainCard';
import OptionTabs from '../components/OptionTabs';
import OptionCard from '../components/OptionCard';
import BasicOptionModal from '../components/BasicOptionModal';
import palette from '../../style/styleVariable';
import { Body3Regular } from '../../style/typo';
import { MYCAR } from '../../constant';

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

const OptionImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: blue;
`;
const OptionLocateImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  transform: rotateY(180deg);
`;

const SelectedOptionImgWrap = styled.div`
  background-color: brown;
  transform-style: preserve-3d;

  transition: transform 0.5s ease;

  width: 479px;
  height: 304px;
  /* background-color: beige; */
  position: relative;
  border-radius: 4px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  ${({ $flipped }) =>
    $flipped &&
    css`
      transform: perspective(400px) rotateY(180deg);
    `}
`;

const ReturnTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const ViewLocationBtn = styled.button`
  border: 0;
  background-color: ${palette.Black};
  border-radius: 5px;
  color: ${palette.LightSand};
  width: 98px;
  height: 29px;
  position: absolute;
  top: 12px;
  right: 18px;
  ${Body3Regular}
  z-index: 1;
  cursor: pointer;
`;

const SelectOptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 1020px;
`;

function ReturnIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.2426 12.2426C11.1569 13.3284 9.65685 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C9.65685 2 11.1569 2.67157 12.2426 3.75736C12.7953 4.31003 14 5.66667 14 5.66667"
        stroke="#FAFAFA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2.66602V5.66602H11"
        stroke="#FAFAFA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SelectOption() {
  const { setUserCar, userCar, page, basicOptions, selectOptions } =
    useOutletContext();

  //선택 옵션 관련
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

  //이벤트 리스너
  const categoryClick = (index) => {
    setBasicIndex(index);
  };
  const optionClick = (index) => {
    setSelected(index);
    setExplainPage(0);
  };

  const addOption = (index) => {
    const price = optionList[index].price;
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

    const currentOptions = selectOptions.find(
      (option) => option.category === categoryName,
    );
    setOptionList(currentOptions.options);
    setSelected(0);
    setIsBasicTab(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <SelectOptionContainer>
      {optionList && (
        <>
          <TopContentsWrap>
            <LeftWrap style={{ position: 'relative' }}>
              <ViewLocationBtn onClick={() => setFlipped((prev) => !prev)}>
                {flipped ? (
                  <ReturnTextWrap>
                    <ReturnIcon />
                    <span>돌아가기</span>
                  </ReturnTextWrap>
                ) : (
                  '옵션 위치 보기'
                )}
              </ViewLocationBtn>
              <SelectedOptionImgWrap $flipped={flipped}>
                <OptionImgWrap>
                  <img
                    alt=""
                    src={
                      optionList[selected].subExtraOptionInfoDTOs[explainPage]
                        .image || optionList[selected].image
                    }
                  />
                </OptionImgWrap>
                <OptionLocateImgWrap>
                  <img
                    alt=""
                    src="https://s3-alpha-sig.figma.com/img/8393/0344/a45c56d116498f699d90049279310d50?Expires=1692576000&Signature=bz2eyfq~SFxnY~qyFccPifFVpuERyaS3aFV00a-5-Ft6CV7ksMY48q1Xy8UjvbDbE950sUtmt~cvZqxY2E9IEyTEOZAevw05TcJRnZp20snXxw8KYNWOlHlFpsgWE-3tKJHu6Xk2vynfUMCZqbUsQNh-RCl5anxbxz7z-Q52uoF3IbwCHQczQ5-DvBg5lVYUjzr5NzCbgVEuiDe57gncTCqPbdcTACMkF0nU4eyUeyv7GMSSiHrQsf88XqgDU7UdMMkmBYABqU-I3PZv57l-~2Ufj0WfFye~B2787NEF~BkTZD8wXsVswpVf6OcAJgHmCkmpvGKNG2wUPPvWuY~8Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                </OptionLocateImgWrap>
              </SelectedOptionImgWrap>
            </LeftWrap>
            <RightWrap>
              <TitlePriceTag
                isSmall={true}
                tagFiled={MYCAR.SELECTED.FILED.TAGS}
                selectedOption={optionList[selected]}
              />
              <DetailExplainCard
                selected={selected}
                selectedOption={optionList[selected]}
                explainPage={explainPage}
                setExplainPage={setExplainPage}
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
                !isBasicTab ? optionList : basicOptions[basicIndex].options
              }
              selected={selected}
              isBasicTab={isBasicTab}
              basicIndex={basicIndex}
              optionClick={optionClick}
              setModal={setModal}
              addOption={addOption}
              removeOption={removeOption}
            />
          </SelectOptionWrap>
          <BasicOptionModal
            modal={modal}
            setModal={setModal}
            option={basicOptions[basicIndex].options}
          />
        </>
      )}
    </SelectOptionContainer>
  );
}
export default SelectOption;
