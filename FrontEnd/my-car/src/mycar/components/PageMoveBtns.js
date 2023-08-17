import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Heading4Bold } from '../../style/typo';
import palette from '../../style/styleVariable';
import { myCarPagePath } from '../../constant';

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
  visibility: ${(props) =>
    props.$isFirst || props.$isCompletepage ? 'hidden' : 'visible'};
`;

function Buttons({ page, setPage }) {
  const navigate = useNavigate();
  const isCompletePage = page === 8;

  const prevClick = () => {
    navigate(`/mycar/${myCarPagePath[page - 1]}`);
    setPage((prevPage) => prevPage - 1);
  };
  const nextClick = () => {
    if (!isCompletePage) {
      navigate(`/mycar/${myCarPagePath[page + 1]}`);
      setPage((prevPage) => prevPage + 1);
    } else {
      navigate('/');
    }
  };

  return (
    <ButtonContainer>
      <PrevButton
        $isFirst={page === 0}
        $isCompletepage={isCompletePage}
        onClick={prevClick}
      >
        이전
      </PrevButton>
      <NextButton onClick={nextClick}>
        {isCompletePage ? '이 차량 구매하기' : '다음 단계로'}
      </NextButton>
    </ButtonContainer>
  );
}
export default Buttons;
