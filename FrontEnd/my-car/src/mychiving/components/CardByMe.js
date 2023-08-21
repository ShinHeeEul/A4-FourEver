/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Regular, Body4Medium, Heading4Bold } from '../../style/typo';
import { ReactComponent as RemoveSvg } from '../../assets/removeIcon.svg';
import { useCallback, useContext, useEffect, useState } from 'react';
import { MychivingContext } from '../router/Mychiving';
import { formatDate } from '../../util/DateFomat';
import OptDetailModal from './OptDetailModal';
import DeleteAlert from './DeleteAlert';
import { useNavigate, useParams } from 'react-router-dom';
const Container = styled.div`
  height: 254px;
  margin: 30px 0;
  display: flex;
`;

const CardDiv = styled.div`
  height: 250px;
  width: 270px;
  border-radius: 8px;
  border: 2px solid ${palette.Primary};
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: aliceblue;
    filter: brightness(0.95);
  }
`;

const CardTopDiv = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
`;

const CardBottomDiv = styled.div`
  height: 50%;
  width: 100%;
  background-color: ${palette.LightSand};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const BottomContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const BottomTitle = styled.span`
  ${Heading4Bold}
`;
const BottomOption = styled.span`
  ${Body3Regular}
`;
const BottomDate = styled.span`
  ${Body4Medium}
  color : ${({ $is_end }) =>
    $is_end ? `${palette.Gold}` : 'rgb(216, 115, 97)'};
`;

const CardButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  position: absolute;
  top: 3%;
  right: 3%;
`;
const PlusSvg = styled(RemoveSvg)`
  transform: rotate(45deg);
  border-radius: 100%;
  cursor: pointer;
  background-color: white;
  &:hover {
    filter: brightness(0.9);
  }
`;
const EscSvg = styled(RemoveSvg)`
  cursor: pointer;
  background-color: white;
  border-radius: 100%;
  &:hover {
    filter: brightness(0.9);
  }
`;

function CardByMe({ myList, extraOptions, setUpdate }) {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showMoveAlert, setShowMoveAlert] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      {showDetailModal && (
        <OptDetailModal
          setShowDetailModal={setShowDetailModal}
          showDetailModal={showDetailModal}
          extraOptions={extraOptions}
          date={formatDate(myList.updated_at)}
        />
      )}
      {showDeleteAlert && (
        <DeleteAlert
          msg={`${myList.car_name} ${myList.trimNameDTO.name}을/삭제하시겠습니까?`}
          setShowDeleteAlert={setShowDeleteAlert}
          showDeleteAlert={showDeleteAlert}
          deleteId={myList.id}
          setUpdate={setUpdate}
        />
      )}
      <CardDiv
        onClick={(e) => {
          e.stopPropagation();
          myList.is_end && navigate(`/mychiving/${myList.id}`);
          !myList.is_end && setShowDetailModal(true);
        }}
      >
        <CardButtonDiv>
          {/* {myList.is_end === 0 && (
            <PlusSvg
              onClick={(e) => {
                e.stopPropagation();
                setShowDetailModal(true);
              }}
            />
          )} */}

          <EscSvg
            onClick={(e) => {
              e.stopPropagation();
              setShowDeleteAlert(true);
            }}
          />
        </CardButtonDiv>
        <CardTopDiv src={myList.image}></CardTopDiv>
        <CardBottomDiv>
          <BottomContentDiv>
            <BottomTitle>
              {myList.car_name} {myList.trimNameDTO.name}
            </BottomTitle>
            <BottomOption>
              {myList.engineNameDTO.name} / {myList.driveNameDTO.name} /{' '}
              {myList.bodyNameDTO.name}
            </BottomOption>
            <BottomDate $is_end={myList.is_end}>
              {formatDate(myList.updated_at)}
              {myList.is_end === 0 ? ' 임시저장' : ' 완료'}
            </BottomDate>
          </BottomContentDiv>
        </CardBottomDiv>
      </CardDiv>
    </Container>
  );
}

export default CardByMe;
