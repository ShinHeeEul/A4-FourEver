import { css, styled } from 'styled-components';
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
import { useContext, useEffect, useState } from 'react';
import { DataLoaderContext } from '../router/ArchivingDetail';
import {
  ARCHIVINGDETAIL,
  BASIC_SERVER_URL,
  MYCHIVINGDETAIL,
  myCarPagePath,
  mychivingPath,
} from '../../constant';
import { MychivingDataLoaderContext } from '../../mychiving/router/MychivingDetail';

import { useNavigate } from 'react-router-dom';

const AllDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const PriceDiv = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 1040px;
`;
export const PriceText = styled.span`
  ${Body1Regular}
`;
export const PriceBold = styled.span`
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
  z-index: 1;
`;
export const MakingMycarBtn = styled.div`
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
  z-index: 1;
`;

export const SelectedOptTitle = styled.div`
  ${Body1Medium}
  padding-top: 100px;
  font-size: 24px;
  font-weight: 500;
  color: black;
`;

const SaveBtn = styled(SaveLogoSvg)`
  ${({ $isSave }) =>
    $isSave
      ? css`
          fill: ${palette.Black};
          path {
            stroke: transparent;
          }
        `
      : css``}
`;

function AdditionalInfo() {
  const data = useContext(DataLoaderContext);
  const detailStatus = ARCHIVINGDETAIL;
  const accessToken = localStorage.getItem('jwtToken');
  const [saveState, setSaveState] = useState(data?.is_save || false);

  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  function saveStateChangeFetch() {
    fetch(`${BASIC_SERVER_URL}/users/feeds/${data.id}?userId=1`, {
      method: !saveState ? 'POST' : 'DELETE',
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(() => {
        setSaveState((prev) => !prev);
      })
      .catch((e) => console.error(e));
  }

  const saveBtnClick = () => {
    saveStateChangeFetch();
  };

  const myCarStart = async () => {
    const optionIds = data.extraOptionForCarReviewDTOs.map(
      (option) => option.id,
    );
    const ToMycarFetch = () => {
      setLoading(true);
      return fetch(`${BASIC_SERVER_URL}/reviews/to-mycar`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
          car_name: data.car_name,
          trim_id: data.trimNameDTO.id,
          engine_id: data.engineNameDTO.id,
          body_id: data.bodyNameDTO.id,
          drive_id: data.driveNameDTO.id,
          in_color_id: data.inColorDTO.id,
          ex_color_id: data.exColorDTO.id,
          extra_option_ids: optionIds,
        }),
      }).then((res) => res.json());
    };
    try {
      const res = await ToMycarFetch();
      setLoading(false);
      navigate(`/mycar/${myCarPagePath[0]}`, {
        state: { reviewState: { data: res } },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AllDiv>
      <PriceDiv>
        <PriceText>총 가격</PriceText>
        <PriceBold>
          {data[detailStatus.SELECTEDCAR.FILED.PRICE].toLocaleString()} 원
        </PriceBold>
      </PriceDiv>
      <AdditionalInfoDiv>
        <TagReviewDiv>
          {
            <>
              <TagReviewTitle>차량 사용 후기</TagReviewTitle>
              <TagReviewsDiv>
                {data[detailStatus.SELECTEDCAR.FILED.TOTALTAGS] &&
                  data[detailStatus.SELECTEDCAR.FILED.TOTALTAGS].map(
                    (item, index) => (
                      <EachTagReviewDiv key={index}>
                        {item.name}
                      </EachTagReviewDiv>
                    ),
                  )}
              </TagReviewsDiv>
            </>
          }

          <SelectedOptTitle>
            선택 옵션 {data[detailStatus.SELECTEDCAR.FILED.EXTRAOPTIONS].length}
          </SelectedOptTitle>
        </TagReviewDiv>
        <WithThisCarDiv>
          <SaveCarDiv onClick={saveBtnClick} style={{ cursor: 'pointer' }}>
            <SaveBtn $isSave={saveState} />
          </SaveCarDiv>
          <MakingMycarBtn onClick={myCarStart}>
            이 차량으로 내 차 만들기 시작
          </MakingMycarBtn>
        </WithThisCarDiv>
      </AdditionalInfoDiv>
    </AllDiv>
  );
}

export default AdditionalInfo;
