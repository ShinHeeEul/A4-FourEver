import { styled } from 'styled-components';
import { Body2Medium, Body2Regular, Heading2Bold } from '../../style/typo';
import palette from '../../style/styleVariable';

export const Container = styled.div`
  width: 1280px;
  margin: 20px auto;
`;

const HeaderWrap = styled.div`
  border-bottom: 1px solid ${palette.LightGray};
  gap: 20px;
  display: flex;
  align-items: flex-end;
  h1 {
    ${Heading2Bold}
  }

  padding: 15px 0;
  margin: 0 150px;
`;

const TabWrap = styled.div`
  display: flex;

  span {
    cursor: pointer;
    ${Body2Regular}
    padding: 0 10px;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`;

function OptReviewHeader() {
  return (
    <Container>
      <HeaderWrap>
        <h1>사용후기</h1>
        <TabWrap>
          <span>전체</span>
          <span>구매</span>
          <span>시승</span>
        </TabWrap>
      </HeaderWrap>
    </Container>
  );
}
export default OptReviewHeader;
