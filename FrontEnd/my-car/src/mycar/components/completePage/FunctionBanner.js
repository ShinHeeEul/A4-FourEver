import { styled } from 'styled-components';
import palette from '../../../style/styleVariable';
import {
  Body3Medium,
  Body3Regular,
  Heading3Bold,
  Heading4Bold,
  Heading2Medium,
} from '../../../style/typo';
const BannerWrap = styled.div`
  margin-top: 400px;
  display: flex;
  flex-direction: column;
`;

const MsgText = styled.span`
  ${Heading2Medium}
`;

function Line() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1040"
      height="4"
      viewBox="0 0 1040 4"
      fill="none"
    >
      <path d="M0 2L1040 2.00009" stroke="#F3F2F5" stroke-width="4" />
    </svg>
  );
}

function FunctionBanner() {
  return (
    <BannerWrap>
      <Line />
      <MsgText>나의 팰리세이드는 이런 기능을 가지고 있어요</MsgText>
    </BannerWrap>
  );
}

export default FunctionBanner;
