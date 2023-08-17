import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import {
  Body1Medium,
  Body1Regular,
  Body3Medium,
  Body3Regular,
  Heading1Bold,
  Heading4Bold,
} from '../../style/typo';
import { ReactComponent as SaveLogoSvg } from '../../assets/saveLogo.svg';
import { useContext } from 'react';
import { DataLoaderContext } from '../router/ArchivingDetail';
import { ARCHIVINGDETAIL } from '../../constant';
const AllDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const PriceDiv = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 1040px;
`;
const PriceText = styled.span`
  ${Body1Regular}
`;
const PriceBold = styled.span`
  ${Heading1Bold}
`;
const AdditionalInfoDiv = styled.div`
  display: flex;
  width: 1040px;
  justify-content: space-between;
  gap: 89px;
  padding-top: 54px;
`;

const TagReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 546px;
`;
const TagReviewTitle = styled.span`
  ${Body3Medium}
  color: #3F3F3F;
  padding-bottom: 9px;
`;

const TagReviewsDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  max-height: 74px;
  overflow: hidden;
`;

const EachTagReviewDiv = styled.div`
  display: inline-flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 0.5px solid ${palette.LightGray};
  color: ${palette.DarkGray};
  background-color: ${palette.LightSand};
  ${Body3Regular}
  width: max-content;
  height: 22px;
`;

const WithThisCarDiv = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  height: fit-content;
`;
const SaveCarDiv = styled.div`
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  background-color: ${palette.Sand};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MakingMycarBtn = styled.div`
  width: 343px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;
  background-color: ${palette.Primary};
  ${Heading4Bold}
  font-weight: 400;
  color: ${palette.LightSand};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SelectedOptTitle = styled.div`
  ${Body1Medium}
  padding-top: 100px;
  font-size: 24px;
  font-weight: 500;
  color: black;
`;

function AdditionalInfo() {
  const data = useContext(DataLoaderContext);
  console.log(data);
  return (
    <AllDiv>
      <PriceDiv>
        <PriceText>총 가격</PriceText>
        <PriceBold>
          {data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.PRICE].toLocaleString()} 원
        </PriceBold>
      </PriceDiv>
      <AdditionalInfoDiv>
        <TagReviewDiv>
          <TagReviewTitle>차량 사용 후기</TagReviewTitle>
          <TagReviewsDiv>
            {data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.TOTALTAGS] &&
              data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.TOTALTAGS].map((item) => {
                return <EachTagReviewDiv>{item.name}</EachTagReviewDiv>;
              })}
          </TagReviewsDiv>
          <SelectedOptTitle>
            선택 옵션{' '}
            {data[ARCHIVINGDETAIL.SELECTEDCAR.FILED.EXTRAOPTIONS].length}
          </SelectedOptTitle>
        </TagReviewDiv>
        <WithThisCarDiv>
          <SaveCarDiv>
            <SaveLogoSvg style={{ cursor: 'pointer' }} />
          </SaveCarDiv>
          <MakingMycarBtn>이 차량으로 내 차 만들기 시작</MakingMycarBtn>
        </WithThisCarDiv>
      </AdditionalInfoDiv>
    </AllDiv>
  );
}

export default AdditionalInfo;
