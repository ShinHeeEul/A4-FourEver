import { styled } from 'styled-components';
import {
  Body3Medium,
  Body3Regular,
  Body4Medium,
  Heading3Bold,
} from '../../style/typo';
import palette from '../../style/styleVariable';
import { OptTag } from './OptSelectionBar';
import { Tag } from '../../common/Tag';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useContext } from 'react';
import { OptionSelectValue } from '../../context/archiving/ArchivingProvider';
import { ARCHIVING } from '../../constant';
import { formatDate } from '../../util/DateFomat';
import NoItem from './NoItem';

import ServerErrorPage from '../../error/ServerErrorPage';

const Container = styled.div`
  width: calc(1280px - 240px);
  margin: 25px auto;
  padding: 0 120px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;

const CardWrap = styled.div`
  width: calc(470px - 60px);
  height: 145px;
  border-radius: 8px;
  border: 2px solid #e4dcd3;
  background: #fff;
  padding: 26px;

  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border: 2px solid #aea6a0;
    background: #f0f0f0;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const TrimInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${palette.Black};
  div {
    display: flex;
    gap: 10px;
    h1 {
      ${Heading3Bold}
    }
  }
  span {
    ${Body3Regular}
  }
`;

const RestInfoChip = styled.div`
  color: ${palette.Gold};
  height: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Body4Medium}
`;

const ColorWrap = styled.div`
  display: flex;
  margin-bottom: 15px;
  div {
    display: flex;
    gap: 15px;
    h3 {
      ${Body3Medium}
      color: #3F3F3F;
    }
    span {
      ${Body3Regular}
      color: #8B8B8B;
    }
    &:first-child {
      padding-right: 10px;
      border-right: 1px solid ${palette.MediumGray};
    }
    &:last-child {
      padding-left: 10px;
    }
  }
`;

const CategoryWrap = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;

  h3 {
    ${Body3Medium}
    color: #3F3F3F;
    flex-shrink: 0;
    padding-top: 4px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    height: ${({ $isTags }) => ($isTags ? '22px' : '70px')};
    overflow-y: hidden;
    button {
      height: 30px;
    }
  }
`;

function OptReviewCard() {
  const { fromMycar } = useOutletContext();
  const { activeStates, reviewList } = useContext(OptionSelectValue);
  const navigate = useNavigate();
  const CardClick = ({ id }) => {
    navigate(`/archiving/${id}`, { state: { fromMycar } });
  };

  if (!reviewList) return <ServerErrorPage />;

  return (
    <Container>
      {reviewList[ARCHIVING.FILED.REVIEW] ? (
        reviewList[ARCHIVING.FILED.REVIEW].length > 0 ? (
          reviewList[ARCHIVING.FILED.REVIEW].map((review, index) => (
            <CardWrap onClick={() => CardClick({ id: review.id })} key={index}>
              <CardHeader>
                <TrimInfo>
                  <div>
                    <h1>팰리세이드 {review.trim_name}</h1>
                  </div>
                  <span>
                    {review.engine_name} / {review.drive_name} /{' '}
                    {review.body_name}
                  </span>
                </TrimInfo>
                <div>
                  <RestInfoChip>{formatDate(review.created_at)}</RestInfoChip>
                  <RestInfoChip>
                    {review.is_purchased ? '구매' : '시승'}
                  </RestInfoChip>
                </div>
              </CardHeader>
              <ColorWrap>
                <div>
                  <h3>외장색상</h3>
                  <span>{review.exterior_color_name}</span>
                </div>
                <div>
                  <h3>내장색상</h3>
                  <span>{review.interior_color_name}</span>
                </div>
              </ColorWrap>
              <CategoryWrap $isTags={true}>
                <h3>태그후기</h3>
                <div style={{ height: '30px' }}>
                  {review.totalTagInfoDTOs.slice(0, 3).map((tag, index) => (
                    <Tag key={index}>{tag.name}</Tag>
                  ))}
                </div>
              </CategoryWrap>
            </CardWrap>
          ))
        ) : (
          <NoItem text={ARCHIVING.NO_ITEM.NO_REVIEW} />
        )
      ) : (
        <NoItem text={ARCHIVING.NO_ITEM.NO_SELECT} />
      )}
    </Container>
  );
}
export default OptReviewCard;
