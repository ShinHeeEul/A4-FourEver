import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Regular } from '../../style/typo';

const Container = styled.div`
  background-color: ${palette.Neutral};
  height: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagWrap = styled.div`
  width: calc(1280px - 284px);
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 0 142px;
  justify-content: center;
`;

export const OptTag = styled.button`
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  border: 0.5px solid var(--light-gray, #dcdcdc);
  color: ${palette.DarkGray};
  ${Body3Regular}
  cursor: pointer;
  padding: 4px 12px;
`;

function OptSelectionBar() {
  return (
    <Container>
      <TagWrap>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
        <OptTag>컴포트 || 패키지</OptTag>
      </TagWrap>
    </Container>
  );
}
export default OptSelectionBar;
