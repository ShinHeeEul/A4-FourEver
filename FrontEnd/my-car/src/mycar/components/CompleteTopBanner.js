import { css, styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { CaptionRegular, Heading1Medium } from '../../style/typo';
import carImg from './image-91.png';

const AllDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
  /* position: fixed;
  top: 70px; */
`;
const BannerDiv = styled.div`
  height: 277px;
  width: 100%;
  margin-top: 30px;
  /* background-color: ${palette.LightSand}; */
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

const DetailDiv = styled.div``;
const DetailText = styled.div`
  ${CaptionRegular}
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
            <DetailText>마이카이빙 바로가기</DetailText>
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
