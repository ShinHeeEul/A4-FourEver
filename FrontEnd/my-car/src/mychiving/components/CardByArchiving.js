import styled from 'styled-components';
import palette from '../../style/styleVariable';
import {
  Body3Medium,
  Body3Regular,
  Body4Medium,
  Body4Regular,
  Heading3Bold,
  Heading4Bold,
} from '../../style/typo';
import { formatDate } from '../../util/DateFomat';
import { Tag } from '../../common/Tag';
import { ReactComponent as RemoveSvg } from '../../assets/removeIcon.svg';
import { useState } from 'react';
import DeleteAlert from './DeleteAlert';
const Container = styled.div`
  /* margin: 25px auto; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const CardWrap = styled.div`
  width: 440px;
  height: 187px;
  border-radius: 8px;
  border: 2px solid #e4dcd3;
  background: #fff;
  padding: 30px;

  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border: 2px solid #aea6a0;
    background: #f0f0f0;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TrimInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${palette.Black};
  div {
    display: flex;
    gap: 10px;
    h1 {
      /* ${Heading3Bold} */
      ${Heading4Bold}
    }
  }
  span {
    ${Body3Regular}
  }
`;
const RestInfoChip = styled.div`
  color: ${palette.Gold};
  height: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Body4Regular}
`;

const ColorWrap = styled.div`
  display: flex;
  margin-bottom: 15px;
  div {
    display: flex;
    gap: 15px;
    h3 {
      ${Body3Medium}
      color: #3F3F3F;
    }
    span {
      ${Body3Regular}
      color: #8B8B8B;
    }
    &:first-child {
      padding-right: 10px;
      border-right: 1px solid ${palette.MediumGray};
    }
    &:last-child {
      padding-left: 10px;
    }
  }
`;

const CategoryWrap = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;

  h3 {
    ${Body3Medium}
    color: #3F3F3F;
    flex-shrink: 0;
    padding-top: 4px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    height: ${({ $isTags }) => ($isTags ? '22px' : '70px')};
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${palette.Sand};
      border-radius: 8px;
      background-clip: padding-box;
      border: 3px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: ${palette.LightSand};
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
    button {
      height: 30px;
    }
  }
`;

const DeleteSvg = styled(RemoveSvg)`
  margin-left: 5px;
  cursor: pointer;
  background-color: white;
  border-radius: 100%;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(0.9);
  }
`;

function CardByArchiving({ savedCar, onClick, setUpdate }) {
  const [deleteArchivingCard, setDeleteArchivingCard] = useState(false);

  return (
    <Container onClick={onClick}>
      {deleteArchivingCard && (
        <DeleteAlert
          msg={`${savedCar.car_name} ${savedCar.trim_name}을/삭제하시겠습니까?`}
          setShowDeleteAlert={setDeleteArchivingCard}
          showDeleteAlert={deleteArchivingCard}
          deleteId={savedCar.id}
          setUpdate={setUpdate}
          inArchiving={true}
        />
      )}
      <CardWrap>
        <CardHeader>
          <TrimInfo>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1>
                {savedCar.car_name} {savedCar.trim_name}
              </h1>
              <div>
                <span>
                  {savedCar.engine_name} / {savedCar.drive_name} /{' '}
                  {savedCar.body_name}
                </span>
              </div>
            </div>
          </TrimInfo>
          <div>
            <RestInfoChip>
              <span
                style={{
                  padding: '0 6px',
                  borderRadius: '8px',
                  backgroundColor: `${palette.LightSand}`,
                }}
              >
                {formatDate(savedCar.created_at)}
                {savedCar.is_purchased ? ' 구매 ' : ' 시승 '}
              </span>

              <DeleteSvg
                onClick={(e) => {
                  e.stopPropagation();
                  setDeleteArchivingCard(true);
                }}
              />
            </RestInfoChip>
          </div>
        </CardHeader>
        <ColorWrap>
          <div>
            <h3>외장색상</h3>
            <span>{savedCar.exterior_color_name}</span>
          </div>
          <div>
            <h3>내장색상</h3>
            <span>{savedCar.interior_color_name}</span>
          </div>
        </ColorWrap>
        <CategoryWrap $isTags={true}>
          <h3>선택옵션</h3>
          <div style={{ height: '70px' }}>
            {savedCar.extraOptionNameDTOs.map((opt, index) => {
              return <Tag key={index}>{opt.name}</Tag>;
            })}
          </div>
        </CategoryWrap>
      </CardWrap>
    </Container>
  );
}

export default CardByArchiving;
