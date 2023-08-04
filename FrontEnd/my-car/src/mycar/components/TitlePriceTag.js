import { styled } from 'styled-components';
import { Body3Regular, Heading1Bold, Heading2Bold } from '../../style/typo';
import palette from '../../style/styleVariable';

const Container = styled.div`
  color: ${palette.Black};
  width: 620px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: flex-end;
`;
const Title = styled.h1`
  ${Heading1Bold};
`;
const Price = styled.h3`
  ${Heading2Bold}
`;
const TagWrap = styled.div`
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Tag = styled.div`
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #f6f3f2;
  ${Body3Regular}
`;

function DivisionStroke() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="620"
      height="4"
      viewBox="0 0 620 4"
      fill="none"
    >
      <path d="M0 2H620" stroke="#232323" strokeWidth="4" />
    </svg>
  );
}

function TitlePriceTag() {
  const tags = [
    '어린이👶',
    '이것만 있으면 나도 주차고수🚘',
    '편리해요😉',
    '대형견도 문제 없어요🐶',
    '가성비가 좋아요',
  ];
  return (
    <Container>
      <Header>
        <Title>문라이트 펄 블루</Title>
        <Price>+690,000 원</Price>
      </Header>
      <DivisionStroke />
      <TagWrap>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagWrap>
    </Container>
  );
}
export default TitlePriceTag;
