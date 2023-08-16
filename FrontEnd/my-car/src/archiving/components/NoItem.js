import { styled } from 'styled-components';
import { Body1Regular, Body2Medium } from '../../style/typo';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Body1Regular}
  width: 100%;
  height: 50vh;
  position: relative;
  flex-direction: column;
  gap: 40px;
`;

function NoItem({ text }) {
  return <Container>{text}</Container>;
}

export default NoItem;
