import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import PalisadeImg from '../../assets/palisadeImg.png';
import { ReactComponent as DetailDivisionSvg } from '../../assets/archivingDetailDivision.svg';
import {
  Body1Regular,
  Body3Medium,
  Body3Regular,
  Body4Medium,
  Heading1Bold,
} from '../../style/typo';
import { useContext } from 'react';
import { ARCHIVINGDETAIL } from '../../constant';
import { DataLoaderContext } from '../router/ArchivingDetail';
const AllDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BannerDiv = styled.div`
  height: 334px;
  width: 100%;
  background-color: ${palette.LightSand};
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 1040px;
  margin: 0 auto;
  padding-top: 30px;
`;

const TrimDiv = styled.div``;
const ReviewDate = styled.div`
  ${Body4Medium}
  background-color: ${palette.Sand};
  color: ${palette.Gold};
  width: 90px;
  height: 22px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReviewGroup = styled.div`
  ${Body4Medium}
  background-color: ${palette.Sand};
  color: ${palette.Gold};
  width: 35px;
  height: 22px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TrimTitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const TrimTitleText = styled.span`
  ${Heading1Bold}
`;
const TrimDetailText = styled.span`
  ${Body1Regular}
`;

const ColorDiv = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const ColorDetailDiv = styled.div``;
const ColorDivisionDiv = styled.div`
  background-color: #8b8b8b;
  width: 1px;
  height: 16px;
`;
const ColorTitleText = styled.span`
  ${Body3Medium};
  padding-right: 12px;
`;
const ColorContentText = styled.span`
  ${Body3Regular}
  color: #8B8B8B;
`;

const ImgDiv = styled.div`
  display: flex;
  transform: translate(0%, -65%);
  z-index: 1;
  margin: 0 auto;
  width: 1350px;
  justify-content: flex-end;
`;

const DescriptiveReviewDiv = styled.div`
  width: 381px;
  color: ${palette.DarkGray};
  ${Body3Regular};
  background-color: ${palette.Neutral};
  height: 100px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${palette.LightGray};
  overflow: hidden;
  white-space: normal;
  padding: 12px 17px 12px 17px;
`;
const DescriptiveReviewSpan = styled.span`
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: ${palette.Sand};
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

function DetailBanner() {
  const data = useContext(DataLoaderContext);

  return (
    <AllDiv>
      <BannerDiv>
        <TextDiv>
          <TrimDiv>
            <TrimTitleDiv>
              <TrimTitleText>
                펠리세이드 {data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.TRIM]}
              </TrimTitleText>
              <ReviewDate>23년 7월 19일</ReviewDate>
              <ReviewGroup>시승</ReviewGroup>
            </TrimTitleDiv>
            <TrimDetailText>
              {data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.ENGINE]} /{' '}
              {data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.DRIVE]} /{' '}
              {data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.BODY]}
            </TrimDetailText>
          </TrimDiv>
          <ColorDiv>
            <ColorDetailDiv>
              <ColorTitleText>외장</ColorTitleText>
              <ColorContentText>
                {data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.INCOLOR]}
              </ColorContentText>
            </ColorDetailDiv>
            <ColorDivisionDiv />
            <ColorDetailDiv>
              <ColorTitleText>내장</ColorTitleText>
              <ColorContentText>
                {data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.EXCOLOR]}
              </ColorContentText>
            </ColorDetailDiv>
          </ColorDiv>
          <DetailDivisionSvg />
          <DescriptiveReviewDiv>
            <DescriptiveReviewSpan>
              {data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.COMMENT]}
            </DescriptiveReviewSpan>
          </DescriptiveReviewDiv>
        </TextDiv>
        <ImgDiv>
          <img alt="img" src={PalisadeImg}></img>
        </ImgDiv>
      </BannerDiv>
    </AllDiv>
  );
}

export default DetailBanner;
