import { styled, css } from 'styled-components';
import palette from '../../style/styleVariable';
import { ReactComponent as DetailDivisionSvg } from '../../assets/archivingDetailDivision.svg';
import {
  Body1Medium,
  Body1Regular,
  Body3Medium,
  Body3Regular,
  Body4Medium,
  Heading1Bold,
  Heading3Medium,
} from '../../style/typo';
import { useContext } from 'react';
import { ARCHIVINGDETAIL, MYCHIVINGDETAIL } from '../../constant';
import { DataLoaderContext } from '../router/ArchivingDetail';
import { formatDate } from '../../util/DateFomat';
import { MychivingDataLoaderContext } from '../../mychiving/router/MychivingDetail';
import { useParams } from 'react-router-dom';
import {
  MakingMycarBtn,
  PriceBold,
  PriceDiv,
  PriceText,
} from './AdditionalInfo';

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
  transform: ${({ $isArchiving }) =>
    $isArchiving ? 'translate(4%, -65%)' : 'translate(4%, -70%)'};
  z-index: 1;
  margin: 0 auto;
  width: 1350px;
  justify-content: flex-end;
`;

const DescriptiveReviewDiv = styled.div`
  width: 381px;
  height: 130px;
  color: ${palette.DarkGray};
  ${Body3Regular};
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  border: 2px solid ${palette.LightGray};
  overflow: hidden;
  white-space: normal;
  padding: 12px 17px 12px 17px;
`;

const OptReviewDiv = styled.div`
  width: 381px;
  height: 130px;
  border-radius: 8px;
  border: 2px solid ${palette.Blue500};
  background-color: ${palette.Neutral};
  padding: 12px 17px 12px 17px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const DescriptiveReviewSpan = styled.span`
  color: ${palette.DarkGray};
  overflow-y: auto;
  margin: 5px 2px 0 2px;
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

const OptionPositionDiv = styled.div`
  cursor: pointer;
  width: 44px;
  height: 44px;
  flex-shrink: 0;

  ${Body3Medium}
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 166.667% */
  letter-spacing: -1.2px;
  z-index: 2;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease;
  background-color: white;
  border: 4px solid
    ${({ $selected }) => ($selected ? 'white' : `${palette.Primary}`)};
  color: ${({ $selected }) => ($selected ? 'white' : `${palette.Primary}`)};
  background-color: ${({ $selected }) =>
    $selected ? `${palette.Primary}` : 'white'};
  ${({ $left, $top }) => css`
    top: ${$top}%;
    left: ${$left}%;
  `}

  &:hover {
    filter: brightness(0.85);
  }
`;

const ImgOptWrap = styled.div`
  width: 940px;
  height: 515px;
  position: relative;
`;

const EachTagDiv = styled.div`
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Body3Regular};
  border-radius: 8px;
  background-color: ${palette.LightSand};
  width: max-content;
  height: max-content;
  margin: 0 7px 7px 0;
`;

const EachTagSpan = styled.span``;
const CardText = styled.span`
  padding-top: 5px;
  ${Body1Medium}
  font-size: 18px;
  color: ${({ $isDetailReview }) =>
    $isDetailReview ? `${palette.DarkGray}` : `${palette.Blue500}`};
`;

const CardLineSvg = styled.div`
  width: 100%;
  height: 1.3px;
  background-color: ${({ $isDetailReview }) =>
    $isDetailReview ? `${palette.LightGray}` : `${palette.Blue500}`};
`;

const CardTagsDiv = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  z-index: 3;
  margin-top: 5px;
`;

function DetailBanner({ isArchiving, selectedIdx, setSelectedIdx }) {
  const archivingData = useContext(DataLoaderContext);
  const mychivingData = useContext(MychivingDataLoaderContext);
  const data = isArchiving ? archivingData : mychivingData;

  function toggleSelect(idx) {
    setSelectedIdx((prevIdx) => (prevIdx === idx ? null : idx));
  }

  const detailStatus = isArchiving ? ARCHIVINGDETAIL : MYCHIVINGDETAIL;
  const extraOptData = data[detailStatus.SELECTEDCAR.FILED.EXTRAOPTIONS];


  return (
    <AllDiv>
      <BannerDiv>
        <TextDiv>
          <TrimDiv>
            <TrimTitleDiv>
              <TrimTitleText>
                {data[detailStatus.SELECTEDCAR.FILED.NAME]}{' '}
                {data[detailStatus.SELECTEDCAR.FILED.TRIM].name}
              </TrimTitleText>
              <ReviewDate>
                {formatDate(data[detailStatus.SELECTEDCAR.FILED.DATE])}
              </ReviewDate>
              <ReviewGroup>
                {data[detailStatus.SELECTEDCAR.FILED.PURCHASE]
                  ? '구매'
                  : '시승'}
              </ReviewGroup>
            </TrimTitleDiv>
            <TrimDetailText>
              {data[detailStatus.SELECTEDCAR.FILED.ENGINE].name} /{' '}
              {data[detailStatus.SELECTEDCAR.FILED.DRIVE].name} /{' '}
              {data[detailStatus.SELECTEDCAR.FILED.BODY].name}
            </TrimDetailText>
          </TrimDiv>
          <ColorDiv>
            <ColorDetailDiv>
              <ColorTitleText>외장</ColorTitleText>
              <ColorContentText>
                {data[detailStatus.SELECTEDCAR.FILED.EXCOLOR].name}
              </ColorContentText>
            </ColorDetailDiv>
            <ColorDivisionDiv />
            <ColorDetailDiv>
              <ColorTitleText>내장</ColorTitleText>
              <ColorContentText>
                {data[detailStatus.SELECTEDCAR.FILED.INCOLOR].name}
              </ColorContentText>
            </ColorDetailDiv>
          </ColorDiv>
          <DetailDivisionSvg />

          {isArchiving ? (
            selectedIdx === null ? (
              <DescriptiveReviewDiv>
                <CardText $isDetailReview={true}>상세 후기</CardText>
                <CardLineSvg $isDetailReview={true} />
                <DescriptiveReviewSpan>
                  {data[detailStatus.SELECTEDCAR.FILED.COMMENT]}
                </DescriptiveReviewSpan>
              </DescriptiveReviewDiv>
            ) : (
              <OptReviewDiv>
                <CardText>{extraOptData[selectedIdx].name}</CardText>
                <CardLineSvg />
                <CardTagsDiv>
                  {extraOptData[selectedIdx].extraOptionTagInfoDTOS.map(
                    (item) => {
                      return (
                        <EachTagDiv>
                          <EachTagSpan key={item.id}>{item.name}</EachTagSpan>
                        </EachTagDiv>
                      );
                    },
                  )}
                </CardTagsDiv>
              </OptReviewDiv>
            )
          ) : (
            <PriceDiv>
              <PriceText>총 가격</PriceText>
              <PriceBold>
                {data[detailStatus.SELECTEDCAR.FILED.PRICE].toLocaleString()} 원
              </PriceBold>
              <MakingMycarBtn
                style={{
                  width: '150px',
                  height: '50px',
                  marginTop: '15px',
                  zIndex: '3',
                  backgroundColor: '#232323',
                }}
              >
                구매하기
              </MakingMycarBtn>
            </PriceDiv>
          )}
        </TextDiv>
        <ImgDiv $isArchiving={isArchiving}>
          <ImgOptWrap>
            <img
              alt="img"
              src={data[detailStatus.SELECTEDCAR.FILED.EXCOLOR].color_image}
            />
            {data[detailStatus.SELECTEDCAR.FILED.EXTRAOPTIONS] &&
              data[detailStatus.SELECTEDCAR.FILED.EXTRAOPTIONS].map(
                (item, idx) => {
                  return item.x_position !== -1 ? (
                    <OptionPositionDiv
                      onClick={() => toggleSelect(idx)}
                      key={idx + 1}
                      $left={item.x_position}
                      $top={item.y_position}
                      $selected={selectedIdx === idx}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </OptionPositionDiv>
                  ) : (
                    <></>
                  );
                },
              )}
          </ImgOptWrap>
        </ImgDiv>
      </BannerDiv>
    </AllDiv>
  );
}

export default DetailBanner;
