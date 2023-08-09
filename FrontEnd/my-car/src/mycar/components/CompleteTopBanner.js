import { css, styled, keyframes } from 'styled-components';
import palette from '../../style/styleVariable';
import {
  CaptionRegular,
  Heading1Medium,
  Heading3Medium,
} from '../../style/typo';
import carImg from './image-91.png';

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

const MychivingBtn = styled.button`
  ${Heading3Medium}
  font-weight: 40;
  font-size: 14px;
  border: none;
  width: 130px;
  height: 34px;
  /* border-radius: 8px; */
  /* margin-left: 260px; */
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.LightSand};
  /* border: 1px solid ${palette.DarkGray}; */
  color: ${palette.DarkGray};
  cursor: pointer;
  &:hover {
    color: ${palette.LightSand};
    background-color: ${palette.DarkGray};
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0px;
    background: ${palette.LightGray};
    transition: 400ms ease all;
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 130px;
    transition: 800ms ease all;
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
  return (
    <AllDiv>
      <BannerDiv>
        <TextDiv>
          <TitleSpan>PALISADE</TitleSpan>
          <Line />
          <CompletedMsg>나의 펠리세이드가 완성되었어요 !</CompletedMsg>
          <DetailDiv>
            <DetailText>완성된 차량은 마이카이빙에서 볼 수 있어요</DetailText>
            <>
              <MychivingBtn>마이카이빙 바로가기</MychivingBtn>
              <MychivingBtn>홈 바로가기</MychivingBtn>
            </>
          </DetailDiv>
        </TextDiv>
        <BgDiv>
          <CarImg src={carImg} />
        </BgDiv>
      </BannerDiv>
    </AllDiv>
  );
}

export default CompleteTopBanner;
