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

function ToMychiving() {
  return (
    <>
      <TextDiv>
        <TitleText>지난번에 직접 만들었던</TitleText>
        <TitleText>나만의 차를 언제든지 볼 수 있어요</TitleText>

        <DetailText>
          만들던 차량을 중간에 저장하지 않았어도 자동저장 기능으로 만들었던
          부분부터 다시 만들어 나만의 차를 완성해보세요
        </DetailText>
        <BtnDiv>
          <Link to="/mychiving">
            <ToPageBtn>마이카이빙 바로가기</ToPageBtn>
          </Link>
        </BtnDiv>
      </TextDiv>
    </>
  );
}

export default ToMychiving;
