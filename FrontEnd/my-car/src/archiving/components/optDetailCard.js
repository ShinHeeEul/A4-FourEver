import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Regular, CaptionRegular, Heading3Medium } from '../../style/typo';
import { ReactComponent as CardDivisionSvg } from '../../assets/optionCardDivision.svg';
import { useContext, useState } from 'react';
import { DataLoaderContext } from '../router/ArchivingDetail';
import { ARCHIVINGDETAIL } from '../../constant';
const CardDiv = styled.div`
  width: 307px;
  height: 263px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid
    ${({ $isSelected }) =>
      $isSelected ? `${palette.Primary}` : `${palette.Sand}`};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 12px;
  cursor: pointer;
  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? 'rgba(0, 44, 95, 0.1)' : `${palette.Neutral}`};

    & img {
      transform: scale(1.2);
      transition: 0.5s ease;
    }
  }

  background-color: ${({ $isSelected }) =>
    $isSelected ? 'aliceblue' : 'white'};
`;

const CardImgDiv = styled.div`
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover {
    overflow: hidden;
  }
`;

const CardImg = styled.img`
  background-color: lightgrey;
  margin: 7px 12px;
  object-fit: cover;

  width: 100%;
  height: auto;
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
  overflow: auto;
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
  console.log(data);
  return (
    <CardDiv onClick={onClick} $isSelected={isSelected}>
      <CardImgDiv>
        <CardImg src={data.image}></CardImg>
      </CardImgDiv>

      <CardTitleDiv>
        <CardNumber>
          {idx.toString().length < 2 ? '0' + (idx + 1) : idx + 1}
        </CardNumber>
        <CardText>{data.name}</CardText>
      </CardTitleDiv>
      <CardDivisionSvg style={{ margin: '0 auto' }} />
      <CardTagDiv>
        {data.extraOptionTagInfoDTOS.map((item) => {
          return <EachTagDiv>{item.name}</EachTagDiv>;
        })}
      </CardTagDiv>
    </CardDiv>
  );
}

export default OptDetailCard;
