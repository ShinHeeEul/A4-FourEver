import { styled } from 'styled-components';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { Container } from './Trim';

const EngineContainer = styled(Container)`
  flex-direction: row;
`;

const OptionImg = styled.div`
  width: 620px;
  height: 380px;
  flex-shrink: 0;
  background-color: black;
`;

const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const RightWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

function Engine() {
  return (
    <EngineContainer>
      <LeftWrap>
        <OptionImg />
        <TitlePriceTag />
      </LeftWrap>
      <RightWrap>
        <MandatoryCard />
        <MandatoryCard />
      </RightWrap>
    </EngineContainer>
  );
}
export default Engine;
