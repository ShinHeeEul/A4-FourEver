import styled from 'styled-components';
import palette from '../../style/styleVariable';
import {
  Body2Regular,
  Body3Medium,
  Body3Regular,
  Heading4Medium,
} from '../../style/typo';
import { useContext, useEffect } from 'react';
import { MychivingContext } from '../router/Mychiving';
import { AlertBtnDiv, BtnCancel } from './DeleteAlert';
import { BASIC_SERVER_URL, myCarPagePath } from '../../constant';
import { useNavigate } from 'react-router-dom';

const ModalBgDiv = styled.div`
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  backdrop-filter: blur(6px);
`;

const ModalDiv = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  padding: 30px;
  width: 430px;
  height: 430px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 0.3rem #a3a3a3);
`;
const BtnConfirm = styled.button`
  width: 126px;
  height: 50px;
  flex-shrink: 0;
  border: 0;
  border-radius: 8px;
  background: ${palette.Primary};

  border: 2px solid ${palette.Primary};
  text-align: center;
  ${palette.heading4Bold}
  color: white;
  cursor: pointer;
`;

const ModalMsgBold = styled.span`
  font-weight: 600;
`;

const TitleDiv = styled.div`
  ${Heading4Medium}
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentDiv = styled.div`
  height: calc(100% - 180px);
  width: 100%;
`;

const ContentTitle = styled.div`
  ${Body2Regular}
  margin: 10px 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

const OptDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  overflow-x: auto;
  overflow-y: hidden;
  height: 150px;
`;

const EachOptDiv = styled.div`
  height: 150px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImgDiv = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 8px;
  border: 1px solid black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 5px;
    filter: brightness(0.6);
  }
`;
const OptName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  width: 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4px;
  text-align: center;
  color: white;
  border-radius: 4px;
  ${Body3Regular}
  font-size: 12px;
`;
const AlertText = styled.div`
  ${Body2Regular}
`;

function OptDetailModal({
  setShowDetailModal,
  showDetailModal,
  extraOptions,
  date,
  myList,
}) {
  useEffect(() => {
    const body = document.querySelector('body');

    if (showDetailModal) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
    return () => body.classList.remove('no-scroll');
  }, [showDetailModal]);

  const scrollTop = document.documentElement.scrollTop;

  const navigate = useNavigate();
  const accessToken = localStorage.getItem('jwtToken');
  const myCarStart = async () => {
    const optionIds = myList.extraOptionDTOs.map((option) => option.id);
    const ToMycarFetch = () => {
      return fetch(`${BASIC_SERVER_URL}/reviews/to-mycar`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
          car_name: myList.car_name,
          trim_id: myList.trimNameDTO.id,
          engine_id: myList.engineNameDTO.id,
          body_id: myList.bodyNameDTO.id,
          drive_id: myList.driveNameDTO.id,
          in_color_id: myList.inColorIdDTO.id,
          ex_color_id: myList.exColorIdDTO.id,
          extra_option_ids: optionIds[0] === 0 ? [] : optionIds,
        }),
      }).then((res) => res.json());
    };
    try {
      const res = await ToMycarFetch();
      navigate(`/mycar/${myCarPagePath[0]}`, {
        state: { tempState: { data: res, id: myList.id } },
      });
    } catch (e) {
      console.error(e);
    }
  };
  const toMycar = () => {
    myCarStart();
    setShowDetailModal(false);
  };

  return (
    <ModalBgDiv $top={scrollTop}>
      <ModalDiv>
        <TitleDiv>상세 보기</TitleDiv>
        <ContentDiv>
          {extraOptions[0].name === null ? (
            <ContentTitle style={{ justifyContent: 'center', height: '200px' }}>
              선택된 옵션이 없습니다.
            </ContentTitle>
          ) : (
            <ContentTitle>선택옵션 {extraOptions.length}</ContentTitle>
          )}
          <OptDiv>
            {extraOptions.map((elem, index) => {
              return (
                elem.name !== null && (
                  <EachOptDiv key={index}>
                    <ImgDiv>
                      <img alt={elem.id} src={elem.image} />
                      <OptName>{elem.name}</OptName>
                    </ImgDiv>
                  </EachOptDiv>
                )
              );
            })}
          </OptDiv>
        </ContentDiv>
        <AlertText>{date}에 임시저장된 파일입니다.</AlertText>
        <AlertText>이 차량으로 계속해서 내 차 만들기를 하시겠어요?</AlertText>
        <AlertBtnDiv>
          <BtnCancel onClick={() => setShowDetailModal(false)}>
            <ModalMsgBold>취소</ModalMsgBold>
          </BtnCancel>
          <BtnConfirm onClick={toMycar}>
            {/* 내차만들기로 이동 API연결 */}
            <ModalMsgBold>확인</ModalMsgBold>
          </BtnConfirm>{' '}
        </AlertBtnDiv>
      </ModalDiv>
    </ModalBgDiv>
  );
}

export default OptDetailModal;
