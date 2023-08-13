import { styled } from 'styled-components';
import palette from '../../../style/styleVariable';
import {
  Body1Regular,
  Heading1Medium,
  Heading2Medium,
  Heading4Medium,
} from '../../../style/typo';
import { useOutletContext } from 'react-router-dom';
import SelectedOption from './SelectedOption';
import AddProcessBtn from './AddProcessBtn';
import { useUserCarState } from '../../hook/useUserCar';

const BgDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1024px;
  align-items: center;
  gap: 15px;
  margin: 140px auto;
`;

const BannerDiv = styled.div`
  width: 1024px;
  height: 230px;
  border-radius: 8px;
  background-color: ${palette.LightSand};
`;

const FunctionTitle = styled.div`
  ${Heading2Medium}
  width: 100%;
  padding-bottom: 10px;
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

const ColorChip = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  flex-shrink: 0;
  margin-right: 12px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MainLineDiv = styled.div`
  padding: 0 0 15px 0;
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
  const userCar = useUserCarState();

  const trimPrice = userCar.price.reduce((acc, current) => acc + current, 0);
  const optPrice = userCar.optionPrice.reduce(
    (acc, current) => acc + current,
    0,
  );
  return (
    <BgDiv>
      <MainLineDiv>
        <Line />
      </MainLineDiv>

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
                {trimPrice
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
            <ColorChip>
              <img alt="exColor" src={userCar.outerColor.color_image} />
            </ColorChip>
            <FunctionText>{userCar.outerColor.name}</FunctionText>
          </ColorInfo>
          <ColorInfo>
            <ColorText>내장색상</ColorText>
            <ColorChip>
              <img alt="inColor" src={userCar.innerColor.color_image} />
            </ColorChip>
            <FunctionText>{userCar.innerColor.name}</FunctionText>
          </ColorInfo>
        </ColorDiv>
      </BannerDiv>
      <SelectedOption />
      <AddProcessBtn />
    </BgDiv>
  );
}

export default CompletedFunction;
