import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import {
  Body1Regular,
  Heading1Medium,
  Heading2Medium,
  Heading4Medium,
} from '../../style/typo';
import { useOutletContext } from 'react-router-dom';

const BgDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1024px;
  align-items: center;
  gap: 15px;
  margin: 400px auto;
`;

const BannerDiv = styled.div`
  width: 1040px;
  height: 230px;
  border-radius: 8px;
  background-color: ${palette.LightSand};
`;

const FunctionTitle = styled.div`
  ${Heading2Medium}
  width: 100%;
`;

const FunctionText = styled.span`
  ${Body1Regular}
`;

const FunctionTextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const FunctionDetailDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 65px 16px 65px;
`;

const SeperateDiv = styled.div``;
const LineDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColorDiv = styled.div`
  display: flex;
  padding-left: 65px;
  padding-top: 20px;
`;

const ColorText = styled.span`
  ${Heading4Medium}
  margin-right: 13px;
`;

const ColorInfo = styled.div`
  display: flex;
  padding-top: 20px;
  padding-right: 40px;
`;

const OuterColorChip = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  flex-shrink: 0;
  background-color: #002c5f;
  margin-right: 12px;
`;

const InnerColorChip = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  flex-shrink: 0;
  background-color: #191f32;
  margin-right: 12px;
`;

function Line() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1040"
      height="4"
      viewBox="0 0 1040 4"
      fill="none"
    >
      <path d="M0 2L1040 2.00009" stroke="#F3F2F5" stroke-width="4" />
    </svg>
  );
}

function BannerLine() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="910"
      height="4"
      viewBox="0 0 910 4"
      fill="none"
    >
      <path d="M0 1.88086L910 1.88078" stroke="#E4DCD3" stroke-width="3" />
    </svg>
  );
}

function CompletedFunction() {
  const { userCar } = useOutletContext();
  const trimPrice = userCar.price.reduce((acc, current) => acc + current, 0);
  const optPrice = userCar.optionPrice.reduce(
    (acc, current) => acc + current,
    0,
  );
  return (
    <BgDiv>
      <Line />
      <FunctionTitle>
        <div>나의 펠리세이드는 이런 기능을 가지고 있어요</div>
      </FunctionTitle>
      <BannerDiv>
        <SeperateDiv>
          <FunctionDetailDiv>
            <FunctionTextDiv>
              <FunctionTitle>{userCar.trim.name}</FunctionTitle>
              <FunctionText>
                {userCar.engine.name} / {userCar.bodyType.name} /{' '}
                {userCar.wheelDrive.name}
              </FunctionText>
            </FunctionTextDiv>
            <FunctionTextDiv>
              <FunctionTitle>
                {(trimPrice + optPrice)
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
                원
              </FunctionTitle>
            </FunctionTextDiv>
          </FunctionDetailDiv>
        </SeperateDiv>
        <LineDiv>
          <BannerLine />
        </LineDiv>
        <ColorDiv>
          <ColorInfo>
            <ColorText>외장색상</ColorText>
            <OuterColorChip />
            <FunctionText>{userCar.outerColor.name}</FunctionText>
          </ColorInfo>
          <ColorInfo>
            <ColorText>내장색상</ColorText>
            <InnerColorChip />
            <FunctionText>{userCar.innerColor.name}</FunctionText>
          </ColorInfo>
        </ColorDiv>
      </BannerDiv>
    </BgDiv>
  );
}

export default CompletedFunction;
