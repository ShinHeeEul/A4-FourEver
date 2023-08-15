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
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const CardClick = ({ id }) => {
    navigate(`/archiving/${id}`);
  };

  return (
    <Container>
      {Array.from({ length: 9 }, (_, index) => (
        <CardWrap onClick={() => CardClick({ id: index + 1 })} key={index}>
          <CardHeader>
            <TrimInfo>
              <div>
                <h1>펠리세이드 Le Blanc</h1>
                <RestInfoChip>시승</RestInfoChip>
                {/* <RestInfoChip>23년 7월 19일</RestInfoChip> */}
              </div>
              <span>디젤 2.2 / 4WD / 7인승</span>
            </TrimInfo>
            <RestInfoChip>23년 7월 19일</RestInfoChip>
          </CardHeader>
          <ColorWrap>
            <div>
              <h3>외장색상</h3>
              <span>문라이트 블루펄</span>
            </div>
            <div>
              <h3>내장색상</h3>
              <span>퀄팅 천연(블랙)</span>
            </div>
          </ColorWrap>
          <CategoryWrap>
            <h3>선택옵션</h3>
            <div>
              <OptTag>컴포트 || 패키지</OptTag>
              <OptTag>듀얼 와이드 선루프</OptTag>
              <OptTag>20인치 블랙톤 전면 가공휠</OptTag>
              {/* <OptTag>현대 스마트 센스</OptTag>
            <OptTag>현대 스마트 센스</OptTag> */}
            </div>
          </CategoryWrap>
          <CategoryWrap>
            <h3>태그후기</h3>
            <div>
              <Tag>편리해요😉</Tag>
              <Tag>이것만 있으면 나도 주차고수🚘</Tag>
              <Tag>대형견도 문제 없어요🐶</Tag>
              {/* <Tag>편리해요😉</Tag> */}
            </div>
          </CategoryWrap>
        </CardWrap>
      ))}
    </Container>
  );
}
export default OptReviewCard;
