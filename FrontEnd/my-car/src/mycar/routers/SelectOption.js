import { styled } from 'styled-components';
import TitlePriceTag from '../components/TitlePriceTag';
import { LeftWrap, RightWrap } from './Engine';
import { Container } from './Trim';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Body3Medium,
  Body3Regular,
  Body4Medium,
  Body4Regular,
  Heading4Bold,
  Heading4Medium,
} from '../../style/typo';
import palette from '../../style/styleVariable';
import { basicOptionInfo, selectOptionInfo } from '../../constant';

const SelectOptionContainer = styled(Container)`
  align-items: center;
  gap: 50px;
`;
const TopContentsWrap = styled(Container)`
  flex-direction: row;
  gap: 40px;
  margin: 0;
  width: 1020px;
  justify-content: space-between;
`;

const ExplainHeaderWrap = styled.div``;
const ExplainHeaderTitle = styled.div``;
const ExplainHeaderPage = styled.span``;
const ExplainDetail = styled.div`
  ${Body3Regular}
`;
const ExplainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: calc(507px - 68px);
  height: calc(152px - 48px);
  padding: 24px 34px;

  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid ${palette.Primary};
  background: rgba(0, 44, 95, 0.1);
  ${ExplainHeaderWrap} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid ${palette.Primary};
    ${ExplainHeaderTitle} {
      display: flex;
      align-items: center;
      gap: 8px;
      ${ExplainHeaderPage} {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: ${palette.Primary};
        color: ${palette.LightSand};
        ${Body4Regular}
        text-align: center;
      }
      span {
        ${Heading4Medium}
      }
    }
  }
  ${ExplainDetail} {
  }
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

const CardsWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const Card = styled.div`
  width: 160px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${palette.LightSand};
  cursor: pointer;
`;
const CardImg = styled.img`
  width: 160px;
  height: 93px;
`;

const CardDetailWrap = styled.div`
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${Body3Medium}
`;
const AddOrRemoveButton = styled.button`
  width: 100%;
  height: 30px;
  border: 2px solid #385da2;
  color: #385da2;
  background-color: ${palette.Neutral};
  border-radius: 8px;
  ${Body3Medium}
  cursor: pointer;
`;

////
const BasicCardImg = styled(Card)`
  width: 100px;
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

function SelectOption() {
  const { setUserCar, userCar, page } = useOutletContext();
  const [selected, setSelected] = useState(0);
  const [isBasicTab, setIsBasicTab] = useState(false);
  const [basicIndex, setBasicIndex] = useState(0);
  const [explainPage, setExplainPage] = useState(0);

  const tabClick = (state) => {
    setIsBasicTab(state);
  };
  const categoryClick = (index) => {
    setBasicIndex(index);
  };
  const optionClick = (index) => {
    setSelected(index);
  };
  const addOption = () => {};

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
          <ExplainWrap>
            <ExplainHeaderWrap>
              <ExplainHeaderTitle>
                <ExplainHeaderPage>{explainPage + 1}</ExplainHeaderPage>
                <span>
                  {selectOptionInfo[selected].explain[explainPage].main}
                </span>
              </ExplainHeaderTitle>
              <div>1/6</div>
            </ExplainHeaderWrap>
            <ExplainDetail>
              {selectOptionInfo[selected].explain[explainPage].detail}
            </ExplainDetail>
          </ExplainWrap>
        </RightWrap>
      </TopContentsWrap>
      <SelectOptionWrap>
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

        <CardsWrap>
          {!isBasicTab
            ? selectOptionInfo.map((option, index) => (
                <Card key={index} onClick={() => optionClick(index)}>
                  <CardImg src={option.src} />
                  <CardDetailWrap>
                    <div>
                      <h3>{option.name}</h3>
                      <h3>{option.price}</h3>
                    </div>
                    <AddOrRemoveButton>추가하기</AddOrRemoveButton>
                  </CardDetailWrap>
                </Card>
              ))
            : basicOptionInfo[basicIndex].options.map((option, index) => (
                <Card key={index}>
                  <CardImg src={option.src} />
                  <CardDetailWrap>
                    <div>
                      <h3>{option.name}</h3>
                      <span style={{ color: `${palette.MediumGray}` }}>
                        기본 포함
                      </span>
                    </div>
                  </CardDetailWrap>
                </Card>
              ))}
        </CardsWrap>
      </SelectOptionWrap>
    </SelectOptionContainer>
  );
}
export default SelectOption;
