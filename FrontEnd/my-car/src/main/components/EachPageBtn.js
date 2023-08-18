import styled from 'styled-components';
// import palette from '../style/styleVariable';

const Btn = styled.button`
  background-color: pink;
  width: 130px;
  height: 40px;
  border: none;
`;

function EachPageBtn() {
  return <Btn>내차만들기 버튼</Btn>;
}

export default EachPageBtn;
