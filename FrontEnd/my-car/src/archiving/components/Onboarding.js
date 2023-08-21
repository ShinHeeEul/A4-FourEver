import { css, keyframes, styled } from 'styled-components';

import onboardingImg from '../../assets/onboardingImg.png';
import archivingLogo from '../../assets/archivingLogo.png';
import {
  Body2Regular,
  Body3Medium,
  Body3Regular,
  Body4Regular,
  Heading3Medium,
  Heading4Bold,
} from '../../style/typo';
import palette from '../../style/styleVariable';
import { useState } from 'react';
import { Tag } from '../../common/Tag';

const Dim = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0 0 0 / 49%);
  z-index: 10;
  backdrop-filter: blur(6px);
`;

const ModalContainer = styled.div`
  width: 800px;
  height: 510px;
  border-radius: 8px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  overflow: hidden;
`;

const View1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  h2 {
    ${Heading3Medium}
    font-size: 23px;
  }
  span {
    ${Body2Regular}
  }
  img {
    width: 290.001px;
    height: 220.678px;
    margin-top: 40px;
  }
`;

const View2 = styled(View1)`
  div {
    gap: 4px;
  }
  img {
    margin: 0;
  }
`;

const View3 = styled(View2)`
  padding-top: 15px;
  img {
    width: 120px;
    height: 120px;
    margin: 30px 0 15px;
  }
`;

const Header = styled.div`
  width: 100%;
  color: ${palette.MediumGray};
  text-align: center;
  ${Body3Regular};

  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }

  ${({ $page }) =>
    $page === 2
      ? css`
          .skip {
            visibility: hidden;
          }
        `
      : css`
          .skip {
            visibility: visible;
          }
        `}

  span {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const infiniteAnimation1 = keyframes`  
    0% {
        transform: translateX(0%);
    }
    50% {
        transform: translateX(-100%);
    }
    50.1% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
`;
const infiniteAnimation2 = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-200%);
    }
`;

const TagWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 88%;
  display: flex;
  flex-direction: row !important;
  justify-content: unset !important;

  & .original,
  & .clone {
    display: flex;
    flex-direction: row !important;
    gap: 10px !important;
    /* margin: 0 10px; */
    padding: 0 5px;
  }
  & .original {
    animation: 25s linear infinite ${infiniteAnimation1};
  }
  & .clone {
    animation: 25s linear infinite ${infiniteAnimation2};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 10%; /* 컨테이너의 반쪽 크기만큼 설정 */
    height: 100%;
    top: 0;
    z-index: 1;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgb(255 255 255)
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left,
      rgb(255 255 255),
      rgba(255, 255, 255, 0)
    );
  }
`;
const CarCardWrap = styled.div`
  display: flex;
  flex-direction: row !important;
  gap: 30px !important;
  width: 90%;
  flex-grow: 1;
  align-items: baseline !important;
  margin-top: 15px;
`;

const EachCardWrap = styled.div`
  position: relative;
  width: 195px;

  img {
    object-fit: cover;
    width: 166px;
    height: 133.707px;
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
  .text-wrap {
    margin-top: 113px;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 41px;
    left: 0;
    z-index: -1;
  }
  h2 {
    ${Body3Medium}
    width: 80%;
    text-align: left;
  }
  span {
    ${Body4Regular}
    width: 80%;
    text-align: left;
    &:nth-child(2) {
      margin-top: -4px;
    }
    &:nth-child(3) {
      text-align: right;
      font-weight: 500;
      padding-bottom: 4px;
      border-bottom: 1px solid #54545452;
    }
  }
  .color-container {
    width: 90%;
    gap: 0 !important;
    margin-top: 5px;
  }
  .color-wrap {
    display: flex;
    width: 85%;

    gap: 10px;
    flex-direction: row !important;
    justify-content: flex-start !important;
    align-items: center;
    img {
      width: 10px;
      height: 10px;
      position: static;
      border-radius: 100%;
      transform: none;
    }
    span {
      border: 0;
      width: auto;
      padding: 0;
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

const ViewWrap = styled.div`
  display: flex;
  transition: all 0.8s;
  transform: ${({ $page }) => $page !== undefined && `translateX(${$page}px)`};
  flex-grow: 1;
`;

const MycarBtn = styled.div`
  width: 283.989px;
  height: 46.097px;
  background-color: ${palette.Primary};
  color: white;
  border-radius: 6.585px;
  ${Heading4Bold}
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const DotWrap = styled.div`
  display: flex;
  gap: 7px;
`;
const FooterDot = styled.div`
  transition: width 0.7s;
  display: flex;
  justify-content: center;
  ${({ $isActive }) =>
    $isActive
      ? css`
          width: 20px;
          height: 10px;
          border-radius: 10px;
          background-color: #545454;
        `
      : css`
          width: 10px;
          height: 10px;
          border-radius: 100%;
          background-color: #dcdcdc;
        `}
`;

const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px !important;
  flex-grow: 0.2;
  margin-top: 30px;
`;

function Onboarding({ setModalShow, data }) {
  const [page, setPage] = useState(0);

  const pageMove = () => {
    setPage((prev) => prev + 1);
  };

  const skip = () => {
    localStorage.setItem('onboardingOff', true);
    setModalShow(false);
  };

  return (
    <Dim>
      <ModalContainer>
        <Header $page={page}>
          <span className="skip" onClick={skip}>
            다시 보지 않을래요
          </span>
          {page !== 2 ? (
            <div>
              <span onClick={pageMove}>다음</span>
              <NextSvg />
            </div>
          ) : (
            <span onClick={() => setModalShow(false)}>닫기</span>
          )}
        </Header>
        <ViewWrap $page={(1 - page) * 800}>
          <View1>
            <div>
              <h2>이 옵션 나한테 진짜 필요한건가? </h2>
              <span>고민이 될때, </span>
            </div>
            <img src={onboardingImg} alt="onboarding" />
          </View1>
          <View2>
            <TopWrap>
              <div>
                <h2>다른 이용자의 차량을 불러와서</h2>
                <h2>내 차 만들기를 완성해봐요!</h2>
              </div>

              <TagWrap>
                <div style={{ flexShrink: '0' }} className="original">
                  {data.totalTags.map((tag) => (
                    <Tag style={{ flexShrink: '0' }}>{tag}</Tag>
                  ))}
                </div>
                <div style={{ flexShrink: '0' }} className="clone">
                  {data.totalTags.map((tag) => (
                    <Tag style={{ flexShrink: '0' }}>{tag}</Tag>
                  ))}
                </div>
              </TagWrap>
            </TopWrap>
            <CarCardWrap>
              {data.carReviewSimpleDTOS.map((car) => (
                <EachCardWrap>
                  <CarCard />
                  <img alt="car" src={car.exColorInfoDTO.rotation_image} />
                  <div className="text-wrap">
                    <h2>
                      {car.car_name} {car.trim_name}
                    </h2>
                    <span>
                      {car.engine_name}/{car.body_name}/{car.drive_name}{' '}
                    </span>
                    <span>{car.price.toLocaleString()} 원</span>
                    <div className="color-container">
                      <div className="color-wrap">
                        <span>외장</span>
                        <img alt="color" src={car.exColorInfoDTO.color_image} />
                        <span>{car.exColorInfoDTO.name}</span>
                      </div>
                      <div className="color-wrap">
                        <span>내장</span>
                        <img alt="color" src={car.inColorInfoDTO.color_image} />
                        <span>{car.inColorInfoDTO.name}</span>
                      </div>
                    </div>
                  </div>
                </EachCardWrap>
              ))}
            </CarCardWrap>
          </View2>
          <View3>
            <div>
              <h2>내가 궁금했던 옵션 후기,</h2>
              <h2>모두 여기</h2>
            </div>

            <img src={archivingLogo} alt="onboarding" />
            <MycarBtn>이 차량으로 내 차 만들기</MycarBtn>
          </View3>
        </ViewWrap>

        <Footer>
          <DotWrap>
            {Array.from({ length: 3 }, (_, index) => (
              <FooterDot $isActive={index === page} />
            ))}
          </DotWrap>
        </Footer>
      </ModalContainer>
    </Dim>
  );
}

function NextSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_948_12686)">
        <path
          d="M8.5 6L14.5 12L8.5 18"
          stroke="#BEBEBE"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_948_12686">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(24 24) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function CarCard() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="195"
      height="220"
      viewBox="0 0 195 187"
      fill="none"
    >
      <mask id="path-1-inside-1_948_13155" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 5.05812C0 2.55493 2.02924 0.525696 4.53243 0.525696H189.795C192.299 0.525696 194.328 2.55493 194.328 5.05812V135.638C194.328 136.984 193.499 138.163 192.423 138.972C189.777 140.96 188.04 144.312 188.04 148.113C188.04 151.914 189.777 155.266 192.423 157.254C193.499 158.063 194.328 159.242 194.328 160.588V181.823C194.328 184.326 192.299 186.355 189.795 186.355H4.53243C2.02924 186.355 0 184.326 0 181.823V160.588C0 159.242 0.828423 158.062 1.90432 157.254C4.54985 155.266 6.28736 151.914 6.28736 148.113C6.28736 144.312 4.54985 140.96 1.90432 138.972C0.828421 138.164 0 136.984 0 135.638V5.05812Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.05812C0 2.55493 2.02924 0.525696 4.53243 0.525696H189.795C192.299 0.525696 194.328 2.55493 194.328 5.05812V135.638C194.328 136.984 193.499 138.163 192.423 138.972C189.777 140.96 188.04 144.312 188.04 148.113C188.04 151.914 189.777 155.266 192.423 157.254C193.499 158.063 194.328 159.242 194.328 160.588V181.823C194.328 184.326 192.299 186.355 189.795 186.355H4.53243C2.02924 186.355 0 184.326 0 181.823V160.588C0 159.242 0.828423 158.062 1.90432 157.254C4.54985 155.266 6.28736 151.914 6.28736 148.113C6.28736 144.312 4.54985 140.96 1.90432 138.972C0.828421 138.164 0 136.984 0 135.638V5.05812Z"
        fill="#F6F3F2"
      />
      <path
        d="M1.90432 138.972L2.24467 138.519L1.90432 138.972ZM1.90432 157.254L1.56398 156.801L1.90432 157.254ZM192.423 157.254L192.764 156.801L192.423 157.254ZM192.423 138.972L192.764 139.425L192.423 138.972ZM4.53243 -0.0408576C1.71634 -0.0408576 -0.566553 2.24203 -0.566553 5.05812H0.566553C0.566553 2.86783 2.34213 1.09225 4.53243 1.09225V-0.0408576ZM189.795 -0.0408576H4.53243V1.09225H189.795V-0.0408576ZM194.894 5.05812C194.894 2.24203 192.611 -0.0408576 189.795 -0.0408576V1.09225C191.986 1.09225 193.761 2.86783 193.761 5.05812H194.894ZM194.894 135.638V5.05812H193.761V135.638H194.894ZM188.606 148.113C188.606 144.484 190.265 141.302 192.764 139.425L192.083 138.519C189.29 140.617 187.473 144.14 187.473 148.113H188.606ZM192.764 156.801C190.265 154.924 188.606 151.742 188.606 148.113H187.473C187.473 152.085 189.29 155.608 192.083 157.707L192.764 156.801ZM194.894 181.823V160.588H193.761V181.823H194.894ZM189.795 186.922C192.611 186.922 194.894 184.639 194.894 181.823H193.761C193.761 184.013 191.986 185.789 189.795 185.789V186.922ZM4.53243 186.922H189.795V185.789H4.53243V186.922ZM-0.566553 181.823C-0.566553 184.639 1.71635 186.922 4.53243 186.922V185.789C2.34214 185.789 0.566553 184.013 0.566553 181.823H-0.566553ZM-0.566553 160.588V181.823H0.566553V160.588H-0.566553ZM5.72081 148.113C5.72081 151.742 4.06196 154.924 1.56398 156.801L2.24467 157.707C5.03773 155.608 6.85392 152.085 6.85392 148.113H5.72081ZM1.56398 139.425C4.06196 141.302 5.72081 144.484 5.72081 148.113H6.85392C6.85392 144.141 5.03773 140.618 2.24467 138.519L1.56398 139.425ZM-0.566553 5.05812V135.638H0.566553V5.05812H-0.566553ZM2.24467 138.519C1.25193 137.773 0.566553 136.743 0.566553 135.638H-0.566553C-0.566553 137.225 0.404916 138.554 1.56398 139.425L2.24467 138.519ZM0.566553 160.588C0.566553 159.483 1.25193 158.453 2.24467 157.707L1.56398 156.801C0.404918 157.672 -0.566553 159.001 -0.566553 160.588H0.566553ZM192.083 157.707C193.076 158.453 193.761 159.483 193.761 160.588H194.894C194.894 159.001 193.923 157.672 192.764 156.801L192.083 157.707ZM193.761 135.638C193.761 136.743 193.076 137.773 192.083 138.519L192.764 139.425C193.923 138.554 194.894 137.225 194.894 135.638H193.761Z"
        fill="#E4DCD3"
        mask="url(#path-1-inside-1_948_13155)"
      />
    </svg>
  );
}

export default Onboarding;
