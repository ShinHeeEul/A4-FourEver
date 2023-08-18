import { css, styled, keyframes } from 'styled-components';
import palette from '../../../style/styleVariable';
import { Link, useOutletContext } from 'react-router-dom';
import {
  CaptionRegular,
  Heading1Medium,
  Heading3Medium,
} from '../../../style/typo';

import { useUserCarState } from '../../hook/useUserCar';

const AllDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
`;
const BannerDiv = styled.div`
  height: 277px;
  width: 100%;
  margin-top: 30px;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  left: 50%;
  transform: translate(-90%, 0);
  margin-top: 60px;
  margin-left: 50px;
`;
const TitleSpan = styled.span`
  ${Heading1Medium};
  font-size: 64px;
  letter-spacing: -1.28px;
`;

const CompletedMsg = styled.span`
  ${Heading1Medium};
`;
const BgDiv = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-24%, -10%);
  z-index: 1;
`;

const CarImg = styled.img``;

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailText = styled.div`
  ${CaptionRegular}
  font-size: 16px;
`;
const BtnDiv = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 12px;
`;
const MychivingBtn = styled.button`
  ${Heading3Medium}
  font-weight: 400;
  font-size: 14px;
  border: none;
  width: 130px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.LightSand};
  border: 1px solid ${palette.LightGray};
  color: ${palette.DarkGray};
  cursor: pointer;
  &:hover {
    color: ${palette.LightSand};
    background-color: ${palette.DarkGray};
  }
`;

function Line() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="605"
      height="2"
      viewBox="0 0 605 2"
      fill="none"
    >
      <path d="M0 1H605" stroke="#BEBEBE" />
    </svg>
  );
}

function CompleteTopBanner() {
  const userCar = useUserCarState();

  return (
    <AllDiv>
      <BannerDiv>
        <TextDiv>
          <TitleSpan>PALISADE</TitleSpan>
          <Line />
          <CompletedMsg>나의 펠리세이드가 완성되었어요 !</CompletedMsg>
          <DetailDiv>
            <DetailText>완성된 차량은 마이카이빙에서 볼 수 있어요</DetailText>
            <BtnDiv>
              <Link to="/mychiving">
                <MychivingBtn>마이카이빙 바로가기</MychivingBtn>
              </Link>
              <Link to="/main">
                <MychivingBtn>홈 바로가기</MychivingBtn>
              </Link>
            </BtnDiv>
          </DetailDiv>
        </TextDiv>
        <BgDiv>
          <CarImg src={userCar.outerColor.rotation_image} />
        </BgDiv>
      </BannerDiv>
    </AllDiv>
  );
}

export default CompleteTopBanner;
