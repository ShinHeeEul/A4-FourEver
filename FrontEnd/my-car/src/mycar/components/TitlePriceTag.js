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

function TitlePriceTag({ selectedOption }) {
  return (
    <Container>
      <Header>
        <Title>{selectedOption.name}</Title>
        <Price>+{selectedOption.price} 원</Price>
      </Header>
      <DivisionStroke />
      {selectedOption.tags && (
        <TagWrap>
          {selectedOption.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagWrap>
      )}
    </Container>
  );
}
export default TitlePriceTag;
