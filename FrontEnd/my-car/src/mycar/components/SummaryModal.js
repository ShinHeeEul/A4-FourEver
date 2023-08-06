import styled from 'styled-components';
import palette from '../../style/styleVariable';
import {
  Heading4Medium,
  Heading4Bold,
  Body3Medium,
  Body3Regular,
} from '../../style/typo';

import {
  bodyTypeInfo,
  carCardInfo,
  engineInfo,
  innerColorInfo,
  outerColorInfo,
  wheelDriveInfo,
  selectOptionInfo,
} from '../../constant';

const ModalBgDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  backdrop-filter: blur(2px);
`;

const ModalDiv = styled.div`
  width: 476px;
  height: 633px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: -2px 0px 12px 0px rgba(78, 81, 94, 0.25);

  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  overflow-y: scroll;
`;

const TitleDiv = styled.div`
  height: 80px;
  display: flex;
  padding: 0 16px;
  justify-content: flex-end;
  gap: 152px;
  align-items: center;
`;
const TitleText = styled.span`
  ${Heading4Medium};
  color: ${palette.Black};
`;

const AllPriceDiv = styled.div`
  height: 42px;
  background: ${palette.Sand};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const OptionDiv = styled(AllPriceDiv)`
  background: ${palette.LightSand};
  justify-content: start;
  ${Body3Medium}
`;

const AllPriceText = styled.span`
  ${Heading4Bold}
`;

const AllOptionDiv = styled.div``;

const OptionTitleText = styled.div`
  ${Body3Medium}
`;

const OptionContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px;
  ${Body3Medium}
`;

const OptionDetailDiv = styled.div``;

const CloseBtn = styled.div`
  cursor: pointer;
`;

function closeModal(setShowSummaryModal) {
  setShowSummaryModal(false);
}

function SummaryModal({
  userCar,
  price,
  setShowSummaryModal,
  showSummaryModal,
}) {
  const trimPrice = price.trim.reduce((acc, current) => acc + current, 0);
  const optionPrice = price.option.reduce((acc, current) => acc + current, 0);
  if (showSummaryModal) {
    return (
      <ModalBgDiv>
        <ModalDiv>
          <TitleDiv>
            <TitleText>견적요약보기</TitleText>
            <CloseBtn onClick={() => closeModal(setShowSummaryModal)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.2987 5.7107C17.9087 5.3207 17.2787 5.3207 16.8887 5.7107L11.9987 10.5907L7.10875 5.7007C6.71875 5.3107 6.08875 5.3107 5.69875 5.7007C5.30875 6.0907 5.30875 6.7207 5.69875 7.1107L10.5887 12.0007L5.69875 16.8907C5.30875 17.2807 5.30875 17.9107 5.69875 18.3007C6.08875 18.6907 6.71875 18.6907 7.10875 18.3007L11.9987 13.4107L16.8887 18.3007C17.2787 18.6907 17.9087 18.6907 18.2987 18.3007C18.6887 17.9107 18.6887 17.2807 18.2987 16.8907L13.4087 12.0007L18.2987 7.1107C18.6787 6.7307 18.6787 6.0907 18.2987 5.7107Z"
                  fill="black"
                />
              </svg>
            </CloseBtn>
          </TitleDiv>
          <AllPriceDiv>
            <OptionTitleText>총 견적 금액</OptionTitleText>
            <AllPriceText>
              {(trimPrice + optionPrice)
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              원
            </AllPriceText>
          </AllPriceDiv>
          <AllOptionDiv>
            <OptionDiv>트림</OptionDiv>
            <OptionContentDiv>
              <OptionDetailDiv>
                모델 {carCardInfo[userCar.trim].name}
              </OptionDetailDiv>
              <OptionDetailDiv>
                {carCardInfo[userCar.trim].price} 원
              </OptionDetailDiv>
            </OptionContentDiv>
            {userCar.engine >= 0 && (
              <>
                <OptionContentDiv>
                  <OptionDetailDiv>
                    엔진 {engineInfo[userCar.engine].name}
                  </OptionDetailDiv>
                  <OptionDetailDiv>
                    {engineInfo[userCar.engine].price}원
                  </OptionDetailDiv>
                </OptionContentDiv>
              </>
            )}
            <OptionDetailDiv>
              {userCar.bodyType >= 0 && (
                <>
                  <OptionContentDiv>
                    <OptionDetailDiv>
                      바디타입 {bodyTypeInfo[userCar.bodyType].name}
                    </OptionDetailDiv>
                    <OptionDetailDiv>
                      {bodyTypeInfo[userCar.bodyType].price}원
                    </OptionDetailDiv>
                  </OptionContentDiv>
                </>
              )}
            </OptionDetailDiv>
            <OptionDetailDiv>
              {userCar.wheelDrive >= 0 && (
                <>
                  <OptionContentDiv>
                    <OptionDetailDiv>
                      구동방식 {wheelDriveInfo[userCar.wheelDrive].name}
                    </OptionDetailDiv>
                    <OptionDetailDiv>
                      {wheelDriveInfo[userCar.wheelDrive].price}원
                    </OptionDetailDiv>
                  </OptionContentDiv>
                </>
              )}
            </OptionDetailDiv>
            <OptionDiv>색상</OptionDiv>
            <OptionContentDiv>
              외장색상 / 내장색상{' '}
              <OptionDetailDiv>
                {outerColorInfo[userCar?.outerColor]?.name}/
                {innerColorInfo[userCar?.innerColor]?.name}
              </OptionDetailDiv>
            </OptionContentDiv>
            <OptionDiv>선택옵션 {userCar.selectedOptions.length}</OptionDiv>

            {userCar.selectedOptions.length >= 0 &&
              userCar.selectedOptions.map((elem) => {
                return (
                  <>
                    <OptionContentDiv>
                      <OptionDetailDiv>
                        {selectOptionInfo[elem].name}
                      </OptionDetailDiv>
                      <OptionDetailDiv>
                        {selectOptionInfo[elem].price}원
                      </OptionDetailDiv>
                    </OptionContentDiv>
                  </>
                );
              })}
          </AllOptionDiv>
        </ModalDiv>
      </ModalBgDiv>
    );
  }
}

export default SummaryModal;
