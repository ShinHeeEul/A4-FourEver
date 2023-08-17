import { css, styled, keyframes } from 'styled-components';
import palette from '../../style/styleVariable';
import { Heading1Bold, Heading3Medium } from '../../style/typo';
import { Link } from 'react-router-dom';

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 250px;
  left: 100px;
  z-index: 1;
`;

const TitleText = styled.span`
  ${Heading1Bold}
  font-size: 60px;
  padding-bottom: 40px;
  height: 40px;
  color: white;
`;

const DetailText = styled.span`
  ${Heading1Bold}
  font-size: 20px;
  height: 40px;
  color: ${palette.LightGray};
`;
const BtnDiv = styled.div`
  width: 200px;
  height: 50px;
`;
const ToPageBtn = styled.button`
  ${Heading3Medium};
  font-weight: 600;
  font-size: 16px;
  border: none;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.LightSand};
  border: 2px solid ${palette.DarkGray};
  color: ${palette.DarkGray};
  margin-top: 18px;
  cursor: pointer;
  &:hover {
    color: ${palette.LightSand};
    background-color: ${palette.DarkGray};
  }
`;

function ToMycar() {
  return (
    <>
      <TextDiv>
        <TitleText>내가 타고 싶은</TitleText>
        <TitleText>나만의 차를 만들어보세요</TitleText>
        <DetailText>
          현대닷컴의 내차만들기를 이용하여 온라인으로 쉽고 간편하게 나만의 차를
          만들 수 있어요
        </DetailText>
        <BtnDiv>
          <Link to="/mycar/trim/model">
            <ToPageBtn>내차만들기 바로가기</ToPageBtn>
          </Link>
        </BtnDiv>
      </TextDiv>
    </>
  );
}

export default ToMycar;
