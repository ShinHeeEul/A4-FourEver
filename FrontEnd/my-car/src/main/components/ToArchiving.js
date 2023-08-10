import React from 'react';
import styled from 'styled-components';
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
  ${Heading1Bold};
  font-size: 60px;
  padding-bottom: 40px;
  height: 40px;
  color: white;
`;

const DetailText = styled.span`
  ${Heading1Bold};
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

const ToArchivingContainer = styled.div`
  position: relative;
`;

function ToArchiving() {
  return (
    <ToArchivingContainer>
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
    </ToArchivingContainer>
  );
}

export default ToArchiving;
