import styled from 'styled-components';
import Buttons from './PageMoveBtns';
import {
  Body2Medium,
  Body3Medium,
  Body3Regular,
  Body4Regular,
  Heading1Bold,
  Heading4Bold,
} from '../../style/typo';
import palette from '../../style/styleVariable';

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
  width: 160px;
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

function SummaryModal({ userCar, page, setPage }) {
  // const [options] = useState({
  //   trim: 'Le Blanc',
  //   engine: '가솔린 2.2',
  //   bodyType: '7인승',
  //   wheelDrive: '2WD',
  //   exteriorColor: '문라이트 블루펄',
  //   builtInColor: '퀄팅 천연 (블랙)',
  //   selectedOptions: [
  //     '2열 통풍 시트 ~! ',
  //     '안녕하세요',
  //     '집에 가고싶다......',
  //     '넘치게 ',
  //     '해볼게요',
  //     '넘치게 ',
  //     '해볼게요',
  //   ],
  // });

  return (
    <Container>
      <OptionInfoWrap>
        <TrimWrap>
          <OptionCategory>트림</OptionCategory>
          <SelectTrimModelText>{userCar.trim}</SelectTrimModelText>
          <div style={{ display: 'flex' }}>
            {userCar.engine && (
              <SelectTrimOptionsText>{userCar.engine}</SelectTrimOptionsText>
            )}
            {userCar.bodyType && (
              <>
                <SelectTrimOptionsText>/</SelectTrimOptionsText>
                <SelectTrimOptionsText>
                  {userCar.bodyType}
                </SelectTrimOptionsText>
              </>
            )}
            {userCar.wheelDrive && (
              <>
                <SelectTrimOptionsText>/</SelectTrimOptionsText>
                <SelectTrimOptionsText>
                  {userCar.wheelDrive}
                </SelectTrimOptionsText>
              </>
            )}
          </div>
        </TrimWrap>

        <DivisionStroke />

        <ColorWrap>
          <OptionCategory>선택 색상</OptionCategory>
          <ColorComponents category="외장" color={userCar.exteriorColor} />
          <ColorComponents category="내장" color={userCar.builtInColor} />
        </ColorWrap>

        <DivisionStroke />

        <SelectedOptionWrap>
          <SelectedOptionTitleWrap>
            <OptionCategory>선택 옵션</OptionCategory>
            <OptionCategory style={{ cursor: 'pointer' }}>
              견적 요약 보기
            </OptionCategory>
          </SelectedOptionTitleWrap>
          <SelectedOptionsTagsWrap>
            {userCar.selectedOptions &&
              userCar.selectedOptions.slice(0, 3).map((option) => (
                <SelectOptionTag key={option}>
                  <SelectOptionText>{option}</SelectOptionText>
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
            <PriceNumber>47,720,000</PriceNumber>
            <PriceOne>원</PriceOne>
          </PriceTextWrap>
        </PriceWrap>
      </OptionInfoWrap>

      <Buttons page={page} setPage={setPage} />
    </Container>
  );
}
export default SummaryModal;
