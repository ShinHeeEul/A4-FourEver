import { css, styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Medium } from '../../style/typo';

const CardsWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const Card = styled.div`
  width: 160px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 2px solid white;
  box-sizing: border-box;

  background-color: ${(props) =>
    props.$isActive ? 'rgba(0, 44, 95, 0.10)' : palette.LightSand};
  ${(props) =>
    props.$isActive &&
    css`
      border: 2px solid ${palette.Primary};
    `}

  cursor: pointer;
`;
const CardImg = styled.img`
  width: 160px;
  height: 93px;
`;

const CardDetailWrap = styled.div`
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${Body3Medium}
`;
const AddOrRemoveButton = styled.button`
  width: 100%;
  height: 30px;
  border: 2px solid #385da2;
  color: #385da2;
  background-color: ${palette.Neutral};
  border-radius: 8px;
  ${Body3Medium}
  cursor: pointer;
`;

function OptionCard({
  optionInfo,
  selected,
  optionClick,
  isBasicTab,
  addOption,
}) {
  return (
    <CardsWrap>
      {optionInfo.map((option, index) => (
        <Card
          $isActive={index === selected && !isBasicTab}
          key={index}
          onClick={() => {
            if (!isBasicTab) return optionClick(index);
          }}
        >
          <CardImg src={option.src} />
          <CardDetailWrap>
            <div>
              <h3>{option.name}</h3>
              {!isBasicTab ? (
                <h3>{option.price}</h3>
              ) : (
                <span style={{ color: `${palette.MediumGray}` }}>
                  기본 포함
                </span>
              )}
            </div>
            {!isBasicTab && (
              <AddOrRemoveButton onClick={() => addOption(index)}>
                추가하기
              </AddOrRemoveButton>
            )}
          </CardDetailWrap>
        </Card>
      ))}
    </CardsWrap>
  );
}
export default OptionCard;
