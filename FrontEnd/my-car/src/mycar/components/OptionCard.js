import { css, styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Medium, Body4Regular } from '../../style/typo';

const DimmedOverlay = styled.div`
  width: calc(100% - 20px);
  padding: 0 10px 0 15px;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ul {
    ${Body4Regular}
    margin-top: 15px;
    color: ${palette.Neutral};
    font-size: 12px;
    width: 80%;
    height: 80%;
    /* overflow: auto; */
    li {
      list-style: disc;
      margin-bottom: 5px;
      list-style-position: inside;
      text-indent: -15px;
    }
  }
`;

const CardsWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const Card = styled.div`
  position: relative;
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

  ${(props) =>
    !props.$isBasicTab &&
    css`
      &:hover{
        ${DimmedOverlay}{
          opacity: 1;
        }}
      }
      }
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
  z-index: 0;
`;

function OptionCard({
  optionInfo,
  selected,
  optionClick,
  isBasicTab,
  addOption,
  setModal,
}) {
  return (
    <CardsWrap>
      {optionInfo.map((option, index) => (
        <Card
          $isActive={index === selected && !isBasicTab}
          $isBasicTab={isBasicTab}
          key={index}
          onClick={() => {
            if (!isBasicTab) return optionClick(index);
            else {
              setModal(() => ({ show: true, optionId: index }));
            }
          }}
        >
          <DimmedOverlay>
            <ul>
              {option?.explain &&
                option.explain.map((explain) => <li>{explain.main}</li>)}
            </ul>
          </DimmedOverlay>
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
