import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Regular, CaptionRegular, Heading3Medium } from '../../style/typo';

const CardDiv = styled.div`
  width: 307px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid
    ${({ $isSelected }) =>
      $isSelected ? `${palette.Primary}` : `${palette.Sand}`};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  padding: 20px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? 'rgba(0, 44, 95, 0.1)' : `${palette.Neutral}`};

    & img {
      transform: scale(1.1);
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

const CardTitleOptDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitleDiv = styled.div`
  display: flex;
  gap: 6px;
  margin: 10px 2px;
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

const CardDivisionSvg = styled.div`
  width: 307px;
  height: 1.5px;
  background-color: #e4dcd3;
  margin-bottom: 5px;
`;

const CardText = styled.span`
  ${Heading3Medium}
`;

const CardTagDiv = styled.div`
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px;
  height: 80px;
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
  margin: 0 6px 6px 0;
`;

const PkgSubOptDiv = styled.div`
  opacity: ${({ $isSelected }) => ($isSelected ? '1' : '0')};
  height: ${({ $isSelected }) => ($isSelected ? '70px' : '0px')};
  overflow: hidden;
  margin: 0 8px 8px;
  transition: all 0.4s ease;
`;
const PkgSubOptText = styled.span`
  ${Heading3Medium}
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.32px;
  color: ${palette.Primary};
`;

function EachOptCard({ data, idx, isSelected, onClick }) {
  return (
    <CardDiv onClick={onClick} $isSelected={isSelected}>
      <CardImgDiv>
        <CardImg src={data.image}></CardImg>
      </CardImgDiv>

      <CardTitleOptDiv>
        <CardTitleDiv>
          <CardNumber>
            {idx.toString().length < 2 ? '0' + (idx + 1) : idx + 1}
          </CardNumber>
          <CardText>{data.name}</CardText>
        </CardTitleDiv>
        {data.subExtraOptionNameDTOs.length > 1 && (
          <PkgSubOptDiv $isSelected={isSelected}>
            {data.subExtraOptionNameDTOs.map((elem, idx) => {
              return (
                <span key={idx}>
                  <PkgSubOptText>
                    {elem.name}{' '}
                    {idx < data.subExtraOptionNameDTOs.length - 1 && `•`}{' '}
                  </PkgSubOptText>
                </span>
              );
            })}
          </PkgSubOptDiv>
        )}
      </CardTitleOptDiv>

      <CardDivisionSvg />
      <CardTagDiv>
        {data.extraOptionTagInfoDTOS.map((item) => {
          return <EachTagDiv key={item.id}>{item.name}</EachTagDiv>;
        })}
      </CardTagDiv>
    </CardDiv>
  );
}

export default EachOptCard;
