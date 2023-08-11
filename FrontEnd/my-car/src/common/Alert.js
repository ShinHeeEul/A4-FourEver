import styled from 'styled-components';
import palette from '../style/styleVariable';
import { Link } from 'react-router-dom';
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
  ${palette.Body3Regular}
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

const AlertBtnDiv = styled.div`
  display: flex;
  gap: 6px;
  padding-top: 20px;
`;

const BtnCancel = styled.button`
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

function closeAlert(setShowCommonAlert) {
  setShowCommonAlert(false);
}

function movePage(setShowCommonAlert) {
  setShowCommonAlert(false);
}

function Alert({ showCommonAlert, setShowCommonAlert, isMain, isAchiving }) {
  if (showCommonAlert === true) {
    return (
      <AlertBgDiv>
        <AlertDiv>
          <AlertMsgDiv>
            {/* <AlertMsg>내 차 만들기를 그만하시겠어요?</AlertMsg> */}
            {isMain && (
              <>
                <AlertMsg>마이카이빙에 저장되었습니다.</AlertMsg>
                <AlertMsg>
                  <AlertMsgBold>메인 페이지</AlertMsgBold>로 이동하시겠습니까?
                </AlertMsg>
              </>
            )}
            {isAchiving && (
              <>
                <AlertMsg>마이카이빙에 저장되었습니다.</AlertMsg>
                <AlertMsg>
                  <AlertMsgBold>아카이빙</AlertMsgBold>으로 이동하시겠습니까?
                </AlertMsg>
              </>
            )}
          </AlertMsgDiv>

          <AlertBtnDiv>
            <BtnCancel onClick={() => closeAlert(setShowCommonAlert)}>
              <AlertMsgBold>취소</AlertMsgBold>
            </BtnCancel>
            {isMain && (
              <Link to="/main">
                <BtnConfirm onClick={() => closeAlert(setShowCommonAlert)}>
                  <AlertMsgBold>확인</AlertMsgBold>
                </BtnConfirm>
              </Link>
            )}
            {isAchiving && (
              <Link to="/archiving">
                <BtnConfirm onClick={() => closeAlert(setShowCommonAlert)}>
                  <AlertMsgBold>확인</AlertMsgBold>
                </BtnConfirm>
              </Link>
            )}
          </AlertBtnDiv>
        </AlertDiv>
      </AlertBgDiv>
    );
  }
}

export default Alert;
