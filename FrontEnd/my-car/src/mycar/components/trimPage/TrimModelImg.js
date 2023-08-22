import { keyframes, styled } from 'styled-components';
import { useUserCarState } from '../../hook/useUserCar';
import {
  Body3Medium,
  Body3Regular,
  Body4Regular,
  Heading1Bold,
  Heading1Medium,
  Heading3Bold,
  Heading3Medium,
} from '../../../style/typo';
import { useEffect, useState } from 'react';
import { PALISADE_URL } from '../../../constant';

const TitleWrap = styled.div``;
const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    height: 380px;
  }

  ${TitleWrap} {
    position: absolute;
    top: 10px;
    left: 120px;
    font-size: 40px;
    display: flex;
    align-items: flex-end;
    gap: 10px;

    h1 {
      ${Heading1Medium}
      font-size: 38px;
    }
    span {
      ${Heading3Bold}
      font-size: 19px;
    }
  }
  position: relative;
`;

const Button = styled.button`
  border: 0;

  ${Body3Regular}
  background-color: #F6F3F2;
  border: 1px solid #dcdcdc;
  color: #545454;

  width: 73px;
  height: 35px;
  font-size: 14px;
  border-radius: 3px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #484848;
    color: white;
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  top: 68px;
  left: 120px;
  display: flex;
  /* flex-direction: column; */
  gap: 8px;
`;

const ani1 = keyframes`
  0%{
    width: 17px;
    height: 17px;
    opacity: 1;
  }
  100%{
    width: 45px;
    height: 45px;
    opacity: 0.2;
  }
`;
const ani2 = keyframes`
  0%{
    width: 45px;
    height: 45px;
    opacity: 0.2;
  }
  100%{
    width: 17px;
    height: 17px;
    opacity: 1;
  }
`;

const Ballon = styled.div`
  /* display: none; */
  position: absolute;

  /* width: fit-content;
  height: 40px; */
  background: #484848;
  color: white;
  border-radius: 5px;

  /* &::after {
    border-top: 10px solid #484848;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 40px;
    left: 10px;
  } */
`;

const CircleWrap = styled.div`
  position: absolute;
  min-width: 300px;
  /* height: 50px; */
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  transition: all 0.3s ease-in-out;
  ${Ballon} {
    white-space: normal;
    top: 0;
    left: 0;
    color: white;
    border-radius: 5px;
    z-index: 1;
    display: none;
    position: absolute;

    height: 20px;
    background: #484848;
    color: white;
    border-radius: 8px;

    text-align: center;
    padding: 10px;
    ${Body4Regular}
  }

  &:hover {
    ${Ballon} {
      display: block;
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;

    cursor: pointer;

    background-color: white;
  }
  &::before {
    animation: ${ani1} 1.2s infinite;
  }
  &::after {
    animation: ${ani2} 1.2s infinite;
  }
`;

const MockLocation = [
  {
    id: 1,
    location: [
      { name: '20인치 알로이 휠', top: '65', left: '52' },
      { name: '서라운드 뷰 모니터', top: '38', left: '52' },
      { name: '클러스터 (12.3인치 컬러 LCD)', top: '34', left: '75' },
    ],
  },
  {
    id: 2,
    location: [
      { name: '12.3인치 네비게이션', top: '38', left: '53' },
      { name: '내비게이션 스마트 컨트롤', top: '34', left: '45' },
      { name: '베젤리스 인사이드 미러', top: '25', left: '43' },
    ],
  },
  {
    id: 3,
    location: [
      { name: '2열 수동식 도어 커튼', top: '36', left: '52' },
      { name: '스마트 자세제어', top: '44', left: '65' },
      { name: '전후석 통합 터치 컨트롤', top: '35', left: '62' },
    ],
  },
  {
    id: 4,
    location: [
      { name: 'KRELL 프리미엄 사운드', top: '58', left: '35' },
      { name: '캘리크래피 전용 디자인', top: '48', left: '62' },
      { name: '원격 스마트 주차보조', top: '90', left: '90' },
    ],
  },
];

function TrimModelImg({ src }) {
  const userCar = useUserCarState();
  const [location, setLocation] = useState({});
  // const [selectPoint, setSelectPoint] = useState();

  useEffect(() => {
    const id = userCar.trim.id;

    setLocation(MockLocation[id ? id - 1 : 0].location);
  }, [userCar]);

  const openExternalLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <ImgContainer>
      <TitleWrap>
        <h1>PALISADE</h1>
        <span> {userCar.trim.name}</span>
      </TitleWrap>

      <ButtonWrap>
        <Button onClick={() => openExternalLink(PALISADE_URL.catalogue)}>
          카탈로그
        </Button>
        <Button onClick={() => openExternalLink(PALISADE_URL.price)}>
          가격표
        </Button>
      </ButtonWrap>
      <div style={{ position: 'relative' }}>
        <CircleWrap $top={location[0]?.top} $left={location[0]?.left}>
          <Circle />
          <Ballon>{location[0]?.name}</Ballon>
        </CircleWrap>
        <CircleWrap $top={location[1]?.top} $left={location[1]?.left}>
          <Circle></Circle>
          <Ballon>{location[1]?.name}</Ballon>
        </CircleWrap>
        <CircleWrap $top={location[2]?.top} $left={location[2]?.left}>
          <Circle></Circle>
          <Ballon>{location[2]?.name}</Ballon>
        </CircleWrap>
        <img alt="trim-model" src={src} />
      </div>
    </ImgContainer>
  );
}
export default TrimModelImg;
