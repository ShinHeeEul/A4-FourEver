import { css, styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { CaptionRegular, Heading1Medium } from '../../style/typo';
import carImg from './image-91.png';

const CarImg = styled.img`
  z-index: 2;
`;
const AllDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
const BannerDiv = styled.div`
  height: 277px;
  background-color: pink;
  width: 1280px;
  position: absolute;
`;
const BgDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 400px;
  position: absolute;
`;

function Line() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="605"
      height="2"
      viewBox="0 0 605 2"
      fill="none"
    >
      <path d="M0 1H605" stroke="#BEBEBE" />
    </svg>
  );
}

function CompleteTopBanner() {
  return (
    <AllDiv>
      <BannerDiv></BannerDiv>
      <BgDiv>
        <CarImg src={carImg} />
      </BgDiv>
    </AllDiv>
  );
}

export default CompleteTopBanner;
