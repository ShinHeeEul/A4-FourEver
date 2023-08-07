import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { CaptionRegular } from '../../style/typo';

const BtnDiv = styled.div`
  width: 42px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 10.5px;
  background: #f6f3f2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor: pointer;
`;

const BtnText = styled.span`
  ${CaptionRegular}
  color: #BEBEBE;
  text-align: center;
`;

function OptChangeBtn() {
  return (
    <BtnDiv>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M1.75 10.5H10.75"
          stroke="#BEBEBE"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.75 6.67996V8.5H4.5793L9.75 3.32704L7.92376 1.5L2.75 6.67996Z"
          stroke="#BEBEBE"
          stroke-linejoin="round"
        />
      </svg>
      <BtnText>변경</BtnText>
    </BtnDiv>
  );
}

export default OptChangeBtn;
