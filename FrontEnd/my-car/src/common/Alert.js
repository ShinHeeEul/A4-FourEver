import styled from 'styled-components';
import palette from '../style/styleVariable';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Body1Regular, Body2Regular, Body3Regular } from '../style/typo';
import { UserCarPostRequest } from '../mycar/UserCarPostAPI';
import { archivingPath, myCarPagePath, mychivingPath } from '../constant';
export const AlertBgDiv = styled.div`
  position: absolute;
  top: ${({ $top }) => ($top ? `${$top}px` : 0)};
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  backdrop-filter: blur(6px);
  display: ${({ $showCommonAlert }) => ($showCommonAlert ? 'block' : 'none')};
`;

const AlertDiv = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  width: 300px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 18px;
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
  ${Body2Regular}
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const AlertMsg = styled.div`
  padding-top: 4px;
`;

const AlertMsgBold = styled.span`
  font-weight: 600;
`;

const AlertBtnDiv = styled.div`
  display: flex;
  gap: 6px;
  padding-top: 27px;
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

function Alert({
  showCommonAlert,
  setShowCommonAlert,
  isMainBtn,
  clickLinkBtn,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    const body = document.querySelector('body');

    if (showCommonAlert) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showCommonAlert]);

  const alertBg = useRef();
  const scrollTop = document.documentElement.scrollTop;
  const currentPath = useLocation().pathname.split('/')[1];
  const [state, setState] = useState({
    title: '',
    content: '',
    link: '',
  });

  // let title;
  // let content;
  // let link;

  // switch (currentPath) {
  //   case 'mycar':
  //     title = '마이카이빙에 저장되었습니다.';
  //     content = isMainBtn
  //       ? '메인으로 이동하시겠습니까?'
  //       : clickLinkBtn
  //       ? '마아카이빙으로 이동하시겠습니까?'
  //       : '아카이빙으로 이동하시겠습니까?';
  //     link = isMainBtn ? '/main' : clickLinkBtn ? mychivingPath : archivingPath;
  //     break;
  //   case 'archiving':
  //     title = isMainBtn
  //       ? '메인으로 이동하시겠습니까?'
  //       : clickLinkBtn
  //       ? '마아카이빙으로 이동하시겠습니까?'
  //       : '내차만들기로 이동하시겠습니까?';
  //     content = '';
  //     link = isMainBtn
  //       ? '/main'
  //       : clickLinkBtn
  //       ? mychivingPath
  //       : myCarPagePath[0];
  //     break;
  //   case 'mychiving':
  //     title = isMainBtn
  //       ? '메인으로 이동하시겠습니까?'
  //       : clickLinkBtn
  //       ? '아카이빙으로 이동하시겠습니까?'
  //       : '내차만들기로 이동하시겠습니까?';
  //     content = '';
  //     link = isMainBtn
  //       ? '/main'
  //       : clickLinkBtn
  //       ? archivingPath
  //       : myCarPagePath[0];
  //     break;
  //   default:
  // }

  useEffect(() => {
    if (currentPath === 'mycar') {
      setState({
        title: '마이카이빙에 저장되었습니다.',
        content: isMainBtn
          ? '메인으로 이동하시겠습니까?'
          : clickLinkBtn
          ? '아카이빙으로 이동하시겠습니까?'
          : '이동하시겠습니까?',
        link: isMainBtn
          ? '/main'
          : clickLinkBtn
          ? archivingPath
          : mychivingPath,
      });
    }
    if (currentPath === 'archiving') {
      setState({
        content: '',
        title: isMainBtn
          ? '메인으로 이동하시겠습니까?'
          : clickLinkBtn
          ? '내차만들기로 이동하시겠습니까?'
          : '마아카이빙으로 이동하시겠습니까?',
        link: isMainBtn
          ? '/main'
          : clickLinkBtn
          ? `/mycar/${myCarPagePath[0]}`
          : mychivingPath,
      });
    }
    if (currentPath === 'mychiving') {
      setState({
        content: '',
        title: isMainBtn
          ? '메인으로 이동하시겠습니까?'
          : clickLinkBtn
          ? '내차만들기로 이동하시겠습니까?'
          : '아카이빙으로 이동하시겠습니까?',
        link: isMainBtn
          ? '/main'
          : clickLinkBtn
          ? `/mycar/${myCarPagePath[0]}`
          : archivingPath,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickLinkBtn, currentPath]);

  const closeAlert = ({ cancel }) => {
    setShowCommonAlert(false);
    if (currentPath === 'mycar' && !cancel) {
      //임시저장
      UserCarPostRequest({ is_end: 0 });
    }
    if (!cancel)
      navigate(
        state.link,
        currentPath === 'mycar' && { state: { from: 'mycar' } },
      );
  };

  return (
    <AlertBgDiv
      $showCommonAlert={showCommonAlert}
      ref={alertBg}
      $top={scrollTop}
    >
      <AlertDiv>
        <AlertMsgDiv>
          <AlertMsg>{state.title}</AlertMsg>
          <AlertMsg>{state.content}</AlertMsg>
        </AlertMsgDiv>

        <AlertBtnDiv>
          <BtnCancel onClick={() => closeAlert({ cancel: true })}>
            <AlertMsgBold>취소</AlertMsgBold>
          </BtnCancel>

          <BtnConfirm onClick={() => closeAlert({})}>
            <AlertMsgBold>확인</AlertMsgBold>
          </BtnConfirm>
        </AlertBtnDiv>
      </AlertDiv>
    </AlertBgDiv>
  );
}

export default Alert;
