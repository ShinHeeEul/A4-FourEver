import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Regular, CaptionRegular, Heading3Medium } from '../../style/typo';
import { ReactComponent as CardDivisionSvg } from '../../assets/optionCardDivision.svg';
import { useState } from 'react';

const CardDiv = styled.div`
  width: 331px;
  height: 263px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid
    ${({ $isSelected }) =>
      $isSelected ? `${palette.Primary}` : `${palette.Sand}`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? 'rgba(0, 44, 95, 0.1)' : `${palette.Neutral}`};
  }

  background-color: ${({ $isSelected }) =>
    $isSelected ? 'aliceblue' : 'white'};
`;
const CardImgdiv = styled.div`
  width: 320px;
  height: 150px;
  background-color: lightgrey;
  margin: 5px auto;
`;

const CardTitleDiv = styled.div`
  display: flex;
  gap: 6px;
  margin: 8px 15px;
`;

const CardNumber = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background-color: ${palette.Neutral};
  border: 2px solid ${palette.Primary};
  color: ${palette.Primary};

  ${CaptionRegular}
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.6px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardText = styled.span`
  ${Heading3Medium}
`;

const CardTagDiv = styled.div`
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  height: 30px;
  gap: 8px;
  align-items: center;
  padding: 14px;
`;
const EachTagDiv = styled.div`
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Body3Regular};
  border-radius: 8px;
  background-color: ${palette.LightSand};
  width: max-content;
`;

function OptDetailCard({ data, idx, isSelected, onClick }) {
  return (
    <CardDiv onClick={onClick} $isSelected={isSelected}>
      <CardImgdiv></CardImgdiv>
      <CardTitleDiv>
        <CardNumber>
          {idx.toString().length < 2 ? '0' + (idx + 1) : idx + 1}
        </CardNumber>
        <CardText>{data.title}</CardText>
      </CardTitleDiv>
      <CardDivisionSvg style={{ margin: '0 auto' }} />
      <CardTagDiv>
        {data.tags.map((data) => {
          return <EachTagDiv>{data}</EachTagDiv>;
        })}
      </CardTagDiv>
    </CardDiv>
  );
}

export default OptDetailCard;
