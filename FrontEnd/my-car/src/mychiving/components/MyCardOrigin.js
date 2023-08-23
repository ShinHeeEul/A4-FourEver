import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { ReactComponent as RemoveSvg } from '../../assets/removeIcon.svg';
import {
  Body2Medium,
  Body3Regular,
  Body4Regular,
  Heading4Bold,
} from '../../style/typo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OptDetailModal from './OptDetailModal';
import { formatDate } from '../../util/DateFomat';
import DeleteAlert from './DeleteAlert';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MyCardDiv = styled.div`
  width: 440px;
  height: 210px;
  border-radius: 8px;

  border: 2px solid ${palette.Sand};
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${palette.Neutral};
    filter: brightness(0.97);
  }
`;
const EscSvg = styled(RemoveSvg)`
  cursor: pointer;
  background-color: white;
  border-radius: 100%;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(0.9);
  }
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleText = styled.span`
  ${Heading4Bold}
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
`;
const ButtonText = styled.span`
  ${Body4Regular};
  color: ${({ $is_end }) => ($is_end ? `${palette.Gold}` : '#FA6253')};
  background-color: ${({ $is_end }) =>
    $is_end ? `${palette.LightSand}` : '#ffe9e7'};
  padding: 0 6px;
  border-radius: 8px;
`;

const BasicOptsDiv = styled.div`
  margin: 9px 0;
  ${Body3Regular}
  color: ${palette.DarkGray};
`;

const IsSelectedOpt = styled.span`
  color: ${({ $isSelected }) =>
    $isSelected ? 'black' : `${palette.MediumGray}`};
`;

const ExtraOptsDiv = styled.div`
  height: 147px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${palette.Sand};
    border-radius: 10px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: ${palette.LightSand};
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const EachOptDiv = styled.div`
  height: 130px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgDiv = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 8px;
  border: 1px solid ${palette.Sand};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 5px;
    filter: brightness(0.6);
  }
`;

const EmptyOptsDiv = styled.div`
  width: 100%;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
  ${Body2Medium}
  color: ${palette.MediumGray};
`;

const OptName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4px;
  text-align: center;
  color: white;
  border-radius: 4px;
  ${Body3Regular};
  font-size: 12px;
`;

function MyCardOrigin({ myList, extraOptions, setUpdate }) {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const navigate = useNavigate();

  return (
    <Container>
      {showDetailModal && (
        <OptDetailModal
          setShowDetailModal={setShowDetailModal}
          showDetailModal={showDetailModal}
          extraOptions={extraOptions}
          date={formatDate(myList.updated_at)}
          myList={myList}
        />
      )}
      {showDeleteAlert && (
        <DeleteAlert
          msg={`${myList.car_name} ${myList.trimNameDTO.name}을/삭제하시겠습니까?`}
          setShowDeleteAlert={setShowDeleteAlert}
          showDeleteAlert={showDeleteAlert}
          deleteId={myList.id}
          setUpdate={setUpdate}
          inArchiving={false}
        />
      )}
      <MyCardDiv
        onClick={(e) => {
          e.stopPropagation();
          myList.is_end && navigate(`/mychiving/${myList.id}`);
          !myList.is_end && setShowDetailModal(true);
        }}
      >
        <TitleDiv>
          <TitleText>
            {myList.car_name} {myList.trimNameDTO.name}
          </TitleText>
          <div>
            {' '}
            <ButtonDiv>
              <ButtonText $is_end={myList.is_end}>
                {formatDate(myList.updated_at)}
                {myList.is_end === 0 ? ' 임시저장' : ' 완료'}
              </ButtonText>
              <EscSvg
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDeleteAlert(true);
                }}
              />
            </ButtonDiv>
          </div>
        </TitleDiv>
        <BasicOptsDiv>
          <IsSelectedOpt $isSelected={myList.engineNameDTO.name}>
            {' '}
            {myList.engineNameDTO.name
              ? myList.engineNameDTO.name
              : '엔진 미선택 '}{' '}
          </IsSelectedOpt>
          |{' '}
          <IsSelectedOpt $isSelected={myList.driveNameDTO.name}>
            {' '}
            {myList.driveNameDTO.name
              ? myList.driveNameDTO.name
              : ' 구동방식 미선택 '}{' '}
          </IsSelectedOpt>
          |{' '}
          <IsSelectedOpt $isSelected={myList.bodyNameDTO.name}>
            {' '}
            {myList.bodyNameDTO.name
              ? myList.bodyNameDTO.name
              : ' 바디타입 미선택'}
          </IsSelectedOpt>
        </BasicOptsDiv>
        <ExtraOptsDiv>
          {extraOptions &&
            extraOptions.map((elem) => {
              return elem.name !== null ? (
                <EachOptDiv>
                  <ImgDiv>
                    <img alt={elem.id} src={elem.image} />
                    <OptName>{elem.name}</OptName>
                  </ImgDiv>
                </EachOptDiv>
              ) : (
                <EmptyOptsDiv>추가 옵션이 없습니다.</EmptyOptsDiv>
              );
            })}
        </ExtraOptsDiv>
      </MyCardDiv>
    </Container>
  );
}

export default MyCardOrigin;
