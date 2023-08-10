import { css, styled, keyframes } from 'styled-components';
import palette from '../../style/styleVariable';
import { Heading1Bold, Heading3Medium } from '../../style/typo';
import { Link } from 'react-router-dom';

const BgDiv = styled.div`
  background-color: ${palette.Sand};
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100% - 60px);
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 250px;
  left: 100px;
`;

const TitleText = styled.span`
  ${Heading1Bold}
  font-size: 60px;
  padding-bottom: 40px;
  height: 40px;
`;

const DetailText = styled.span`
  ${Heading1Bold}
  font-size: 20px;
  height: 40px;
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

function ToArchiving() {
  return (
    <BgDiv>
      <TextDiv>
        <TitleText>다른 사람들이 만든</TitleText>
        <TitleText>다양한 스펙의 차를 확인해보세요</TitleText>
        <DetailText>
          차량과 옵션에 대한 실제 후기가 궁금하신가요? 아카이빙에서 사람들의
          실사용 후기를 확인해보세요
        </DetailText>
        <BtnDiv>
          <Link to="/archiving">
            <ToPageBtn>아카이빙 바로가기</ToPageBtn>
          </Link>
        </BtnDiv>
      </TextDiv>
    </BgDiv>
  );
}

export default ToArchiving;
