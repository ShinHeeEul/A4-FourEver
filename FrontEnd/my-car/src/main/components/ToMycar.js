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
  font-weight: 500;
  font-size: 20px;
  height: 40px;
  color: ${palette.LightGray};
`;
const BtnDiv = styled.div`
  width: 200px;
  height: 50px;
  margin-top: 18px;
`;

const ToPageBtn = styled.button`
  ${Heading3Medium};
  font-weight: 600;
  font-size: 16px;
  border: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid ${palette.LightSand};
  color: ${palette.LightSand};
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${palette.LightSand};
    color: ${palette.DarkGray};
  }
`;

const ToMycarContainer = styled.div`
  position: relative;
`;

function ToMycar() {
  return (
    <ToMycarContainer>
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
    </ToMycarContainer>
  );
}

export default ToMycar;
