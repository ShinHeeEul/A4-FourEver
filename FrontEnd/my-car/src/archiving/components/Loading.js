import { keyframes, styled } from 'styled-components';
import { Container } from './NoItem';
import palette from '../../style/styleVariable';
import { Body2Regular, Body3Regular } from '../../style/typo';

function CarIMG() {
  return (
    <svg
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="82"
      height="36"
      viewBox="0 0 82 36"
      fill="none"
    >
      <path
        d="M2.2731 30.2121C3.17841 31.1174 10.0689 30.8408 13.2123 30.9666H73.5666C75.8299 30.9666 78.3195 29.9858 79.2248 29.0805C81.1109 27.1944 81.2671 26.0249 80.7337 22.2906C80.3565 19.6501 79.2248 16.2552 76.9615 14.7464C74.6982 13.2375 70.9261 13.2375 70.9261 13.2375C70.9261 13.2375 63.3818 1.29236 56.2147 1.16662C49.0477 1.04089 34.3363 0.864852 32.8275 1.16662C30.9414 1.54384 20.0022 12.4831 18.1161 13.6147C16.23 14.7463 6.42246 15.1236 4.9136 15.878C3.40474 16.6324 1.51867 20.4046 1.14146 21.5362C0.764241 22.6678 1.14146 29.0805 2.2731 30.2121Z"
        fill="#F6F3F2"
        stroke="#232323"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="20.003"
        cy="27.5716"
        rx="7.16707"
        ry="7.16707"
        fill="#232323"
        stroke="#232323"
        stroke-width="2"
      />
      <ellipse
        cx="64.5147"
        cy="27.5716"
        rx="7.16707"
        ry="7.16707"
        fill="#232323"
        stroke="#232323"
        stroke-width="2"
      />
      <path
        d="M6.04558 20.6501C6.59787 20.6501 7.04558 20.2024 7.04558 19.6501C7.04558 19.0979 6.59787 18.6501 6.04558 18.6501V20.6501ZM2.27344 20.6501H6.04558V18.6501H2.27344V20.6501Z"
        fill="#232323"
      />
      <path
        d="M25.8945 13.0709H63.616"
        stroke="#232323"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path d="M44.1445 12.8604V1.16675" stroke="#232323" stroke-width="2" />
    </svg>
  );
}

const LoadingWrap = styled.div`
  position: relative;
  h2 {
    ${Body2Regular}
  }
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  width: 140px;
  height: 140px;
  border: 8px solid #f6f3f2;
  border-top-color: ${palette.Primary};
  /* border-bottom-color: ${palette.Primary}; */
  border-radius: 50%;
  animation: ${rotateAnimation} 1.5s linear infinite;

  position: relative;
`;

function Loading() {
  return (
    <Container>
      <LoadingWrap>
        <Circle />
        <CarIMG />
      </LoadingWrap>
      <h2>후기를 불러오는 중입니다</h2>
    </Container>
  );
}
export default Loading;
