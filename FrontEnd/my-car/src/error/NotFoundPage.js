import { styled } from 'styled-components';
import autoBg from './asset/autoBg.jpeg';
import whiteLogo from './asset/whiteLogo.png';
import { Body1Medium, Heading1Bold } from '../style/typo';
import { useNavigate } from 'react-router-dom';

const Logo = styled.img`
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 6;
  width: 155px;
  height: 22px;
`;

const easeInOutQuint = 'cubic-bezier(0.86, 0, 0.07, 1)';
const timing = '0.4s';

const OutlineButton = styled.button`
  border: 3px solid white;
  background-color: transparent;
  color: white;
  ${Body1Medium}
  padding: 15px 20px;
  cursor: pointer;

  appearance: none;
  background-color: transparent;
  background-color: #ffffff21;
  border: none;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3) inset;
  color: #fff;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 0;
    width: 2px;
    transition:
      height ${timing} ${easeInOutQuint},
      width ${timing} ${easeInOutQuint};
  }

  &::before {
    box-shadow: 2px 2px 0 rgba(255, 255, 255, 1) inset;
    bottom: 0;
    left: 0;
  }

  &::after {
    box-shadow: -2px -2px 0 rgba(255, 255, 255, 1) inset;
    top: 0;
    right: 0;
  }

  &:hover {
    &::before,
    &::after {
      height: 100%;
      width: 100%;
      transition:
        height ${timing} ${easeInOutQuint},
        width ${timing} ${timing} ${easeInOutQuint};
    }
  }
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
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  gap: 40px;
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
      font-size: 18px;
      line-height: 30px;
    }
  }
  ${ExplainWrap} {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

function NotFound() {
  const navigate = useNavigate();
  const buttonClick = () => {
    navigate('/main');
  };
  return (
    <ErrorWrap $backImg={autoBg}>
      <Logo src={whiteLogo} />
      <TextWrap>
        <h1>404 Not Found</h1>
        <ExplainWrap>
          <span>죄송합니다. 현재 페이지를 찾을 수 없습니다.</span>
          <span>
            존재하지 않는 주소로 입력하셨거나, 요청하신 페이지의 주소가 변경,
            삭제되어 찾을 수 없습니다.
          </span>
        </ExplainWrap>
      </TextWrap>
      <OutlineButton onClick={buttonClick}>메인으로 가기</OutlineButton>
    </ErrorWrap>
  );
}
export default NotFound;
