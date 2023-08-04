import { styled } from 'styled-components';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { Container } from './Trim';

const EngineContainer = styled(Container)`
  flex-direction: row;
  gap: 40px;
`;

const OptionImgWrap = styled.div`
  width: 620px;
  height: 400px;
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
  const engine = [
    {
      name: '디젤 2.2',
      price: '1,480,000',
      explanation:
        '높은 토크로 파워풀한 드라이빙이 가능하며, 차급대비 연비 효율이 우수합니다.',
      maxOutput: '295/6,000PS/rpm',
      maxTalk: '36.2/5,200kgf-m/rpm',
    },
    {
      name: '가솔린 3.8',
      price: '1,480,000',
      explanation:
        '고마력의 우수한 가속 성능을 확보하여, 넉넉하고 안정감 있는 주행이 가능합니다엔진의 진동이 적어 편안하고 조용한 드라이빙 감성을 제공합니다.',
      maxOutput: '295/6,000PS/rpm',
      maxTalk: '36.2/5,200kgf-m/rpm',
    },
  ];
  return (
    <EngineContainer>
      <LeftWrap>
        <OptionImgWrap></OptionImgWrap>
        <TitlePriceTag />
      </LeftWrap>
      <RightWrap>
        <MandatoryCard option={engine[0]} />
        <MandatoryCard option={engine[1]} />
      </RightWrap>
    </EngineContainer>
  );
}
export default Engine;
