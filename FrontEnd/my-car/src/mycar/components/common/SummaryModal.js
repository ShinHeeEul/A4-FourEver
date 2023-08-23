import styled from 'styled-components';
import palette from '../../../style/styleVariable';
import {
  Heading4Medium,
  Heading4Bold,
  Body3Medium,
  Body3Regular,
} from '../../../style/typo';
import { useUserCarState } from '../../hook/useUserCar';
import { useContext } from 'react';
import {
  UserCarActionContext,
  UserCarValueContext,
} from '../../../context/mycar/UserCarProvider';

const ModalBgDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  backdrop-filter: blur(6px);
`;

const ModalDiv = styled.div`
  width: 476px;
  height: 633px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: -2px 0px 12px 0px rgba(78, 81, 94, 0.25);
  padding-bottom: 15px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  /* overflow-y: scroll; */
  /* &::-webkit-scrollbar {
    width: 10px;
  } */
`;

const TitleDiv = styled.div`
  height: 80px;
  display: flex;
  padding: 0 16px;
  justify-content: flex-end;
  gap: 152px;
  align-items: center;
  position: sticky;
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

const AllOptionDiv = styled.div`
  overflow: auto;
  height: calc(100% - 122px);
  &::-webkit-scrollbar {
    display: none;
  }
`;

const OptionTitleText = styled.div`
  ${Body3Medium}
`;

const OptionContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px;
  ${Body3Medium}
  color: ${palette.DarkGray};
`;

const OptionDetailDiv = styled.div`
  color: ${palette.DarkGray};
`;

const CloseBtn = styled.div`
  cursor: pointer;
`;

function SummaryModal() {
  const userCar = useUserCarState();
  const { summaryModalAction } = useContext(UserCarActionContext);
  const { showSummaryModal } = useContext(UserCarValueContext);

  const trimPrice = userCar.price.reduce((acc, current) => acc + current, 0);
  const optionPrice = userCar.optionPrice.reduce(
    (acc, current) => acc + current,
    0,
  );
  function closeModal() {
    summaryModalAction.closeModal();
  }

  if (showSummaryModal) {
    return (
      <ModalBgDiv>
        <ModalDiv>
          <TitleDiv>
            <TitleText>견적 요약 보기</TitleText>
            <CloseBtn onClick={closeModal}>
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
              {(trimPrice + optionPrice).toLocaleString()} 원
            </AllPriceText>
          </AllPriceDiv>
          <AllOptionDiv>
            <OptionDiv>트림</OptionDiv>
            <OptionContentDiv>
              <OptionDetailDiv>모델 {userCar.trim.name}</OptionDetailDiv>
              <OptionDetailDiv>
                {userCar.trim.price ? userCar.trim.price.toLocaleString() : '0'}{' '}
                원
              </OptionDetailDiv>
            </OptionContentDiv>
            {userCar.engine && (
              <>
                <OptionContentDiv>
                  <OptionDetailDiv>엔진 {userCar.engine.name}</OptionDetailDiv>
                  <OptionDetailDiv>
                    {userCar.engine?.price
                      ? userCar.engine.price.toLocaleString()
                      : 0}{' '}
                    원
                  </OptionDetailDiv>
                </OptionContentDiv>
              </>
            )}
            <OptionDetailDiv>
              {userCar.bodyType && (
                <>
                  <OptionContentDiv>
                    <OptionDetailDiv>
                      바디타입 {userCar.bodyType.name}
                    </OptionDetailDiv>
                    <OptionDetailDiv>
                      {userCar.bodyType?.price
                        ? userCar.bodyType.price.toLocaleString()
                        : 0}{' '}
                      원
                    </OptionDetailDiv>
                  </OptionContentDiv>
                </>
              )}
            </OptionDetailDiv>
            <OptionDetailDiv>
              {userCar.wheelDrive && (
                <>
                  <OptionContentDiv>
                    <OptionDetailDiv>
                      구동방식 {userCar.wheelDrive.name}
                    </OptionDetailDiv>
                    <OptionDetailDiv>
                      {userCar.wheelDrive?.price
                        ? userCar.wheelDrive.price.toLocaleString()
                        : 0}{' '}
                      원
                    </OptionDetailDiv>
                  </OptionContentDiv>
                </>
              )}
            </OptionDetailDiv>
            <OptionDiv> 외장색상 | 내장색상</OptionDiv>
            <OptionContentDiv>
              {userCar.outerColor?.name &&
                `${userCar.outerColor.name} | ${userCar.innerColor.name}`}
              {/* {userCar.outerColor.name}/{userCar.innerColor.name} */}
              <OptionDetailDiv>
                {userCar.outerColor?.price
                  ? userCar.outerColor.price.toLocaleString()
                  : 0}{' '}
                원
              </OptionDetailDiv>
            </OptionContentDiv>
            <OptionDiv>선택옵션 {userCar.selectedOptions.length}</OptionDiv>

            {userCar.selectedOptions.length >= 0 &&
              userCar.selectedOptions.map((elem) => {
                return (
                  <>
                    <OptionContentDiv>
                      <OptionDetailDiv>{elem.name}</OptionDetailDiv>
                      <OptionDetailDiv>
                        {elem.price.toLocaleString()} 원
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
