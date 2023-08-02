import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Heading4Bold } from '../../style/typo';
import palette from '../../style/styleVariable';

const ButtonContainer = styled.div`
  display: flex;
  gap: 7px;
`;

const Button = styled.button`
  ${Heading4Bold}
  height: 50px;
  flex-shrink: 0;
  border-radius: 8px;
  text-align: center;
  border: 0;
  cursor: pointer;
`;

const NextButton = styled(Button)`
  width: 176px;
  background-color: ${palette.Primary};
  color: ${palette.Neutral};
`;
const PrevButton = styled(Button)`
  width: 121px;
  color: #002c5f;
  background: var(--hyundai-neutral, #fafafa);
`;

function Buttons() {
  const navigate = useNavigate();

  const prevClick = () => {
    navigate.back();
  };
  const nextClick = () => {
    // 페이지 상태 변경
    // 마지막 페이지가 아니라면
    // setPage((prev)=>prev+1);
    // 마지막 페이지라면
    // 차 만들기 완료 페이지로
  };

  // const isCompletePage = page === 13;

  return (
    <ButtonContainer>
      <PrevButton
        // isFirst={page === 0}
        // isCompletePage={isCompletePage}
        onClick={prevClick}
      >
        이전
      </PrevButton>
      <NextButton onClick={nextClick}>
        다음 단계로
        {/* {isCompletePage ? '이 차량 구매하기' : '다음 단계로'} */}
      </NextButton>
    </ButtonContainer>
  );
}
export default Buttons;
