import { styled } from 'styled-components';
import palette from '../../../style/styleVariable';
import { Body4Medium, Heading4Bold } from '../../../style/typo';
import { useOutletContext } from 'react-router-dom';
import { useSelectAction, useSelectValue } from '../../hook/useUserCar';

const TabWrap = styled.div`
  display: flex;
  gap: 23px;
  border-bottom: 2px solid ${palette.LightSand};
  padding-bottom: 4px;
  position: relative;
  &::after {
    content: '';
    width: ${({ $isBasicTab }) => ($isBasicTab ? '100px' : '70px')};
    border-radius: 10px;
    background-color: black;
    height: 6px;
    position: absolute;
    left: ${({ $isBasicTab }) => ($isBasicTab ? '110px' : '5px')};
    bottom: -5px;
    transition: all 0.4s ease-in-out;
  }
`;
const TabBtn = styled.button`
  border: 0;
  background-color: transparent;
  ${Heading4Bold}
  cursor: pointer;
  color: ${(props) => (props.$isActive ? palette.Black : palette.MediumGray)};
`;

const CategoryTab = styled.span`
  cursor: pointer;
  color: ${(props) => (props.$isActive ? palette.Black : palette.MediumGray)};
`;
const BasicSubCategoryWrap = styled.div`
  ${CategoryTab} {
    padding: 0 10px;
    margin: 14px 0;
    ${Body4Medium}
    font-size: 14px;

    &:first-child {
      padding-left: 5px;
    }
  }
`;

function OptionTabs() {
  const { basicOptions } = useOutletContext();
  const { changeTab, setBasicIndex } = useSelectAction();
  const { isBasicTab, basicIndex } = useSelectValue();

  const tabClick = (state) => {
    changeTab(state);
  };
  const categoryClick = (index) => {
    setBasicIndex(index);
  };
  return (
    <>
      <TabWrap $isBasicTab={isBasicTab}>
        <TabBtn $isActive={!isBasicTab} onClick={() => tabClick(false)}>
          선택 항목
        </TabBtn>
        <TabBtn $isActive={isBasicTab} onClick={() => tabClick(true)}>
          기본 포함 품목
        </TabBtn>
      </TabWrap>
      {isBasicTab && (
        <BasicSubCategoryWrap>
          {basicOptions.map((option, index) => (
            <CategoryTab
              $isActive={index === basicIndex}
              onClick={() => categoryClick(index)}
              key={index}
            >
              {option.category}
            </CategoryTab>
          ))}
        </BasicSubCategoryWrap>
      )}
    </>
  );
}
export default OptionTabs;
