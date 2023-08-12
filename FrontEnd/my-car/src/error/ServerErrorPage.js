import { styled } from 'styled-components';
import backgroundImage from './asset/backgroundImg.jpeg';
import { Body1Medium, Heading1Bold } from '../style/typo';
import whiteLogo from './asset/whiteLogo.png';
import { OutlineButton } from './NotFoundPage';
import { useNavigate } from 'react-router-dom';

const Logo = styled.img`
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 6;
  width: 155px;
  height: 22px;
`;

const ExplainWrap = styled.div``;
const TextWrap = styled.div``;

export const ErrorWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ $backImg }) => $backImg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  z-index: 5;
  ${TextWrap} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    height: 200px;
    gap: 30px;
    h1 {
      ${Heading1Bold}
      font-size: 100px;
      line-height: 100px;
    }
    span {
      ${Body1Medium}
      font-size: 20px;
      line-height: 30px;
    }
  }
  ${ExplainWrap} {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

function ServerErrorPage() {
  const navigate = useNavigate();
  const buttonClick = () => {
    navigate('/main');
  };
  return (
    <ErrorWrap $backImg={backgroundImage}>
      <Logo src={whiteLogo} />
      <TextWrap>
        <h1>500 Server Error</h1>
        <ExplainWrap>
          <span>일시적인 서버 문제로 요청을 처리할 수 없습니다</span>
          <span>잠시 후 다시 시도해주세요</span>
        </ExplainWrap>
      </TextWrap>
      <OutlineButton onClick={buttonClick}>메인으로 가기</OutlineButton>
    </ErrorWrap>
  );
}
export default ServerErrorPage;
