import styled from 'styled-components';

import {
  Body2Medium,
  Body3Medium,
  Body3Regular,
  Body4Regular,
  Heading1Bold,
  Heading4Bold,
} from '../../style/typo';
import palette from '../../style/styleVariable';
import {
  bodyTypeInfo,
  carCardInfo,
  engineInfo,
  innerColorInfo,
  outerColorInfo,
  wheelDriveInfo,
  selectOptionInfo,
} from '../../constant';
import Buttons from './PageMoveBtns';
import SummaryModal from './SummaryModal';
import useState from 'react';

const Container = styled.div`
  height: calc(108px - 24px);
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 180px);

  border-radius: 16px 16px 0px 0px;
  border-top: 1.196px solid var(--light-gray, #dcdcdc);
  background: var(--hyundai-sand, #e4dcd3);
  box-shadow: -2px 0px 12px 0px rgba(217, 216, 215, 0.2);

  display: flex;
  align-items: center;
  padding: 12px 90px 12px;
  justify-content: space-between;
`;
const OptionInfoWrap = styled.div`
  display: flex;
`;
const PriceText = styled.span`
  ${Heading1Bold}
`;
const PriceOne = styled(PriceText)`
  ${Body2Medium}
  margin-bottom: 3px;
`;
const PriceNumber = styled(PriceText)`
  color: ${palette.Black};
`;
const PriceTextWrap = styled.div`
  display: flex;
  align-items: end;
  gap: 3px;
`;

const SelectedOptionTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OptionCategory = styled.h2`
  ${Body3Medium}
  color: ${palette.DarkGray};
  margin-bottom: 6px;
`;

const ColorSelectedImg = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: black;
`;
const ColorSelectedInfoEachWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ColorOptionCategory = styled.h3`
  ${Body3Medium}
  color: ${palette.Black};
`;
const ColorSelectedEachInfo = styled(ColorOptionCategory)`
  ${Body3Regular}
`;
const ColorOptionWrap = styled.div`
  display: flex;
  gap: 12px;
  /* align-items: center; */
`;

const OptionEachWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

const SelectTrimModelText = styled.span`
  ${Heading4Bold}
  color: ${palette.Black};
`;

const SelectTrimOptionsText = styled.span`
  ${Body3Regular}
  color: ${palette.Black};
`;
const SelectOptionText = styled.span`
  overflow: hidden;
  color: #f6f3f2;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${Body4Regular}
`;
const SelectOptionTag = styled.div`
  max-width: calc(85px - 8px);
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${palette.Black};
`;
const SelectedOptionsTagsWrap = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
`;

const TrimWrap = styled(OptionEachWrap)`
  width: 145px;
  margin-right: 8px;
`;
const ColorWrap = styled(OptionEachWrap)`
  width: 200px;
  margin: 0 18px 0 22px;
`;
const SelectedOptionWrap = styled(OptionEachWrap)`
  width: 340px;
  margin: 0 18px 0 22px;
  gap: 15px;
`;
const PriceWrap = styled(OptionEachWrap)`
  margin: 0 0 0 22px;
  gap: 10px;
`;

function DivisionStroke() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="70"
      viewBox="0 0 2 70"
      fill="none"
    >
      <path d="M0.999997 70L1 0" stroke="#BEBEBE" />
    </svg>
  );
}
function ColorComponents({ category, color }) {
  return (
    <ColorOptionWrap>
      <ColorOptionCategory>{category}</ColorOptionCategory>
      <ColorSelectedInfoEachWrap>
        <ColorSelectedImg />
        <ColorSelectedEachInfo>{color}</ColorSelectedEachInfo>
      </ColorSelectedInfoEachWrap>
    </ColorOptionWrap>
  );
}

function showModal(setShowSummaryModal) {
  setShowSummaryModal(true);
}

function Footer({
  userCar,
  page,
  setPage,
  price,
  showSummaryModal,
  setShowSummaryModal,
}) {
  const trimPrice = price.trim.reduce((acc, current) => acc + current, 0);
  const optionPrice = price.option.reduce((acc, current) => acc + current, 0);

  return (
    <Container>
      <OptionInfoWrap>
        <TrimWrap>
          <OptionCategory>트림</OptionCategory>
          <SelectTrimModelText>
            {carCardInfo[userCar.trim].name}
          </SelectTrimModelText>
          <div style={{ display: 'flex' }}>
            {userCar.engine >= 0 && (
              <SelectTrimOptionsText>
                {engineInfo[userCar.engine].name}
              </SelectTrimOptionsText>
            )}
            {userCar.bodyType >= 0 && (
              <>
                <SelectTrimOptionsText>/</SelectTrimOptionsText>
                <SelectTrimOptionsText>
                  {bodyTypeInfo[userCar.bodyType].name}
                </SelectTrimOptionsText>
              </>
            )}
            {userCar.wheelDrive >= 0 && (
              <>
                <SelectTrimOptionsText>/</SelectTrimOptionsText>
                <SelectTrimOptionsText>
                  {wheelDriveInfo[userCar.wheelDrive].name}
                </SelectTrimOptionsText>
              </>
            )}
          </div>
        </TrimWrap>

        <DivisionStroke />

        <ColorWrap>
          <OptionCategory>선택 색상</OptionCategory>
          <ColorComponents
            category="외장"
            color={outerColorInfo[userCar?.outerColor]?.name}
          />
          <ColorComponents
            category="내장"
            color={innerColorInfo[userCar?.innerColor]?.name}
          />
        </ColorWrap>

        <DivisionStroke />

        <SelectedOptionWrap>
          <SelectedOptionTitleWrap>
            <OptionCategory>선택 옵션</OptionCategory>
            <OptionCategory
              style={{ cursor: 'pointer' }}
              onClick={() => showModal(setShowSummaryModal)}
            >
              {showSummaryModal && (
                <SummaryModal
                  userCar={userCar}
                  price={{ trim: userCar.price, option: userCar.optionPrice }}
                  setShowSummaryModal={setShowSummaryModal}
                />
              )}
              견적 요약 보기
            </OptionCategory>
          </SelectedOptionTitleWrap>
          <SelectedOptionsTagsWrap>
            {userCar.selectedOptions &&
              userCar?.selectedOptions.slice(0, 3).map((option) => (
                <SelectOptionTag key={option}>
                  <SelectOptionText>{option.name}</SelectOptionText>
                </SelectOptionTag>
              ))}
            {userCar.selectedOptions && userCar.selectedOptions.length > 3 && (
              <SelectOptionTag>
                <SelectOptionText>+</SelectOptionText>
                <SelectOptionText>
                  {userCar.selectedOptions.length - 3}
                </SelectOptionText>
              </SelectOptionTag>
            )}
          </SelectedOptionsTagsWrap>
        </SelectedOptionWrap>
        <DivisionStroke />
        <PriceWrap>
          <OptionCategory>예상 가격</OptionCategory>
          <PriceTextWrap>
            <PriceNumber>
              {(trimPrice + optionPrice).toLocaleString()}
            </PriceNumber>
            <PriceOne>원</PriceOne>
          </PriceTextWrap>
        </PriceWrap>
      </OptionInfoWrap>

      <Buttons page={page} setPage={setPage} />
    </Container>
  );
}
export default Footer;
