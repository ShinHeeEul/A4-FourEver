import styled from 'styled-components';
import palette from '../../style/styleVariable';
import { useContext, useEffect } from 'react';
import { useDeleteRequest } from '../hook/useDelete';
import { MychivingContext } from '../router/Mychiving';
import { Body3Regular } from '../../style/typo';
const AlertBgDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  backdrop-filter: blur(6px);
`;

const AlertDiv = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  width: 300px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 0.5rem #a3a3a3);
`;

const AlertMsgDiv = styled.div`
  width: 234px;
  color: ${palette.Black};
  ${Body3Regular}
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const AlertMsg = styled.div`
  padding-top: 10px;
`;

const AlertMsgBold = styled.span`
  font-weight: 600;
`;

export const AlertBtnDiv = styled.div`
  display: flex;
  gap: 6px;
  padding-top: 20px;
`;

export const BtnCancel = styled.button`
  width: 126px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 8px;
  background: transparent;
  text-align: center;
  ${palette.heading4Bold}
  border: 2px solid ${palette.DarkGray};
  color: ${palette.DarkGray};
  cursor: pointer;
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

function DeleteAlert({
  msg,
  setShowDeleteAlert,
  showDeleteAlert,
  deleteId,
  setUpdate,
}) {
  const data = useContext(MychivingContext);
  useEffect(() => {
    const body = document.querySelector('body');

    if (showDeleteAlert) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [showDeleteAlert]);

  async function DeleteRequest(id, requestUrl) {
    await useDeleteRequest(id, requestUrl);

    setUpdate((prev) => !prev);
    setShowDeleteAlert(false);
  }

  return (
    <AlertBgDiv>
      <AlertDiv>
        <AlertMsgDiv>
          {msg.split('/').map((elem) => {
            return <AlertMsg>{elem}</AlertMsg>;
          })}
        </AlertMsgDiv>
        <AlertBtnDiv>
          <BtnCancel onClick={() => setShowDeleteAlert(false)}>
            <AlertMsgBold>취소</AlertMsgBold>
          </BtnCancel>
          <BtnConfirm
            onClick={() => DeleteRequest(deleteId, '/mychiving/delete/')}
          >
            <AlertMsgBold>확인</AlertMsgBold>
          </BtnConfirm>
        </AlertBtnDiv>
      </AlertDiv>
    </AlertBgDiv>
  );
}

export default DeleteAlert;
