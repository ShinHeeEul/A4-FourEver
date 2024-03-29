import { styled } from 'styled-components';
import { Heading1Bold, Heading2Bold } from '../../../style/typo';
import palette from '../../../style/styleVariable';
import { Tag } from '../../../common/Tag';

const Container = styled.div`
  color: ${palette.Black};
  width: ${(props) => (props.$isSmall ? '500px' : '700px')};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: flex-end;
  padding-bottom: 5px;
  border-bottom: 5px solid black;
`;
const Title = styled.h1`
  ${Heading1Bold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 170px);
  flex-grow: 1;
`;
const Price = styled.h3`
  ${Heading2Bold}
  width: 170px;
  text-align: right;
`;
const TagWrap = styled.div`
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

function TitlePriceTag({ selectedOption, tagFiled, isSmall = false }) {
  return (
    <Container $isSmall={isSmall}>
      <Header>
        <Title>{selectedOption.name}</Title>
        <Price>+{selectedOption?.price?.toLocaleString() || 0} 원</Price>
      </Header>
      {selectedOption[tagFiled] && (
        <TagWrap>
          {selectedOption[tagFiled].slice(0, 5).map((tag, index) => (
            <Tag key={index}>{tag.name}</Tag>
          ))}
        </TagWrap>
      )}
    </Container>
  );
}
export default TitlePriceTag;
