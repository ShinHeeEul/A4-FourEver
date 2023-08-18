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

const Container = styled.div`
  width: calc(1280px - 240px);
  margin: 0 auto 50px;
  padding: 0 120px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const CardWrap = styled.div`
  width: calc(470px - 60px);
  height: 270px;
  border-radius: 8px;
  /* border: 1px solid var(--hyundai-sand, #e4dcd3); */
  border: 2px solid #e4dcd3;

  background: #fff;
  padding: 30px;
  &:nth-child(2n + 1) {
    margin-left: 30px;
  }
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border: 2px solid #aea6a0;
    background: #fafafa;
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
  background-color: ${palette.LightSand};
  height: 20px;
  padding: 2px 8px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 20px;
  h3 {
    ${Body3Medium}
    color: #3F3F3F;
    flex-shrink: 0;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

function OptReviewCard() {
  const { fromMycar } = useOutletContext();
  const { activeStates, reviewList } = useContext(OptionSelectValue);
  const navigate = useNavigate();
  const CardClick = ({ id }) => {
    navigate(`/archiving/${id}`, { state: { fromMycar } });
  };

  function optChipSort(selectOptions) {
    const filtered = selectOptions.filter((option) => activeStates[option.id]);
    const remaining = selectOptions.filter(
      (option) => !activeStates[option.id],
    );
    return [...filtered, ...remaining];
  }

  return (
    <Container>
      {reviewList[ARCHIVING.FILED.REVIEW] ? (
        reviewList[ARCHIVING.FILED.REVIEW].length > 0 ? (
          reviewList[ARCHIVING.FILED.REVIEW].map((review, index) => (
            <CardWrap
              onClick={() => CardClick({ id: review.car_review_id })}
              key={index}
            >
              <CardHeader>
                <TrimInfo>
                  <div>
                    <h1>펠리세이드 {review.trim_name}</h1>
                    <RestInfoChip>
                      {review.is_purchased ? '구매' : '시승'}
                    </RestInfoChip>
                  </div>
                  <span>
                    {review.engine_name} / {review.drive_name} /{' '}
                    {review.body_name}
                  </span>
                </TrimInfo>
                <RestInfoChip>{formatDate(review.created_at)}</RestInfoChip>
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
              <CategoryWrap>
                <h3>선택옵션</h3>
                <div>
                  {optChipSort(review.extraOptionNameDTOs)
                    .slice(0, 4)
                    .map((option, index) => (
                      <OptTag key={index} $isActive={activeStates[option.id]}>
                        {option.name}
                      </OptTag>
                    ))}
                </div>
              </CategoryWrap>
              <CategoryWrap>
                <h3>태그후기</h3>
                <div>
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
