import styled from 'styled-components';
import palette from '../style/styleVariable';

const AlertBgDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  backdrop-filter: blur(2px);
`;

const AlertDiv = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  width: 343px;
  height: 186px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const AlertMsgDiv = styled.div`
  width: 234px;
  color: ${palette.Black};
  ${palette.Body3Regular}
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const AlertMsg = styled.div``;

const AlertBtnDiv = styled.div`
  display: flex;
  gap: 6px;
`;

const BtnCancel = styled.button`
  width: 126px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${palette.LightGray};
  text-align: center;
  ${palette.heading4Bold}
  border: 0;
  color: ${palette.DarkGray};
  cursor: pointer;
`;
const BtnConfirm = styled.button`
  width: 187px;
  height: 56px;
  flex-shrink: 0;
  border: 0;
  border-radius: 8px;
  background: ${palette.Primary};
  text-align: center;
  ${palette.heading4Bold}
  color: #fff;
  cursor: pointer;
`;

function closeAlert(setShowCommonAlert) {
  setShowCommonAlert(false);
}

function Alert({ showCommonAlert, setShowCommonAlert }) {
  if (showCommonAlert === true) {
    return (
      <AlertBgDiv>
        <AlertDiv>
          <AlertMsgDiv>
            <AlertMsg>내 차 만들기를 그만하시겠어요?</AlertMsg>
            <AlertMsg>
              만들던 차량은 아카이빙 내가 만든 차량 에 저장해둘게요
            </AlertMsg>
          </AlertMsgDiv>

          <AlertBtnDiv>
            <BtnCancel onClick={() => closeAlert(setShowCommonAlert)}>
              취소
            </BtnCancel>
            <BtnConfirm>내 차 만들기 종료</BtnConfirm>
          </AlertBtnDiv>
        </AlertDiv>
      </AlertBgDiv>
    );
  }
}

export default Alert;
