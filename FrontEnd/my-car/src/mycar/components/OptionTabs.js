import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body4Medium, Heading4Bold } from '../../style/typo';
import { basicOptionInfo } from '../../constant';

const TabWrap = styled.div`
  display: flex;
  gap: 23px;
  border-bottom: 2px solid ${palette.LightSand};
  padding-bottom: 4px;
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

function OptionTabs({ isBasicTab, setIsBasicTab, basicIndex, categoryClick }) {
  const tabClick = (state) => {
    setIsBasicTab(state);
  };
  return (
    <>
      <TabWrap>
        <TabBtn $isActive={!isBasicTab} onClick={() => tabClick(false)}>
          선택 항목
        </TabBtn>
        <TabBtn $isActive={isBasicTab} onClick={() => tabClick(true)}>
          기본 포함 품목
        </TabBtn>
      </TabWrap>
      {isBasicTab && (
        <BasicSubCategoryWrap>
          {basicOptionInfo.map((option, index) => (
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
