import { css, styled } from 'styled-components';
import palette from '../../../style/styleVariable';
import { Body3Regular } from '../../../style/typo';
import { ExplainNumber } from './DetailExplainCard';
import { useSelectAction, useSelectValue } from '../../hook/useUserCar';

const OptionImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const OptionLocateImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  transform: rotateY(180deg);
`;

const SelectedOptionImgWrap = styled.div`
  transform-style: preserve-3d;

  transition: transform 0.5s ease;

  width: 479px;
  height: 304px;
  position: relative;
  border-radius: 4px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  ${({ $flipped }) =>
    $flipped &&
    css`
      transform: perspective(400px) rotateY(180deg);
    `}
`;

const ReturnTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const ViewLocationBtn = styled.button`
  border: 0;
  background-color: ${palette.Black};
  border-radius: 5px;
  color: ${palette.LightSand};
  width: 98px;
  height: 29px;
  position: absolute;
  top: 12px;
  right: 18px;
  ${Body3Regular}
  z-index: 1;
  cursor: pointer;
`;

const LocateSpot = styled(ExplainNumber)`
  position: absolute;
  ${({ $x_position, $y_position }) => css`
    top: ${$y_position}%;
    left: ${$x_position}%;
  `}
`;

function OptionImage() {
  const { selected, optionList, flipped, explainPage } = useSelectValue();
  const { setFlipped } = useSelectAction();

  return (
    <>
      {optionList[selected].x_position !== -1 && (
        <ViewLocationBtn onClick={() => setFlipped((prev) => !prev)}>
          {flipped ? (
            <ReturnTextWrap>
              <ReturnIcon />
              <span>돌아가기</span>
            </ReturnTextWrap>
          ) : (
            '옵션 위치 보기'
          )}
        </ViewLocationBtn>
      )}

      <SelectedOptionImgWrap $flipped={flipped}>
        <OptionImgWrap>
          <img
            alt="optionImage"
            src={
              optionList[selected].subExtraOptionInfoDTOs[explainPage].image ||
              optionList[selected].image
            }
          />
        </OptionImgWrap>
        <OptionLocateImgWrap>
          <img
            alt="locateImage"
            src="http://hyundaimycar.store/rotation/abyss/1.png"
          />
          <LocateSpot
            $x_position={optionList[selected].x_position}
            $y_position={optionList[selected].y_position}
          />
        </OptionLocateImgWrap>
      </SelectedOptionImgWrap>
    </>
  );
}
export default OptionImage;

function ReturnIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.2426 12.2426C11.1569 13.3284 9.65685 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C9.65685 2 11.1569 2.67157 12.2426 3.75736C12.7953 4.31003 14 5.66667 14 5.66667"
        stroke="#FAFAFA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2.66602V5.66602H11"
        stroke="#FAFAFA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
