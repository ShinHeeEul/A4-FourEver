import styled from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Medium, Heading4Medium } from '../../style/typo';
import { useContext, useEffect } from 'react';
import { MychivingContext } from '../router/Mychiving';

const ModalBgDiv = styled.div`
  position: absolute;
  top: 0;
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
  width: 330px;
  height: 330px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 0.5rem #a3a3a3);
`;
const BtnConfirm = styled.button`
  width: 105px;
  height: 40px;
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
  /* padding: 20px 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-items: center; */
`;
const ContentDiv = styled.div`
  height: calc(100% - 80px);
  width: 100%;
`;

const ContentTitle = styled.div`
  ${Body3Medium}
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
  width: 100%;
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
  img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const OptName = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  padding: 4px;
  background-color: ${palette.DarkGray};
  color: white;
  border-radius: 4px;
`;

function OptDetailModal({ setShowDetailModal, showDetailModal, extraOptions }) {
  const data = useContext(MychivingContext);
  useEffect(() => {
    const body = document.querySelector('body');

    if (showDetailModal) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [showDetailModal]);
  return (
    <ModalBgDiv>
      <ModalDiv>
        <TitleDiv>상세 보기</TitleDiv>
        <ContentDiv>
          <ContentTitle>선택 옵션 {extraOptions.length}</ContentTitle>
          <OptDiv>
            {extraOptions.map((elem) => {
              return (
                <EachOptDiv>
                  <ImgDiv>
                    <img alt={elem.id} src={elem.image} />
                    <OptName>{elem.name}</OptName>
                  </ImgDiv>
                </EachOptDiv>
              );
            })}
          </OptDiv>
        </ContentDiv>
        <BtnConfirm onClick={() => setShowDetailModal(false)}>
          <ModalMsgBold>확인</ModalMsgBold>
        </BtnConfirm>
      </ModalDiv>
    </ModalBgDiv>
  );
}

export default OptDetailModal;
