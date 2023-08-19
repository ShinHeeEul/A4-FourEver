import { styled } from 'styled-components';

import palette from '../../style/styleVariable';
import { Heading3Medium } from '../../style/typo';
import CardByMe from '../components/CardByMe';
import { useState } from 'react';
import DeleteAlert from '../components/DeleteAlert';

const Container = styled.div`
  width: 1040px;
  margin: 0 auto;
`;
const TitleHeader = styled.div`
  border-bottom: 4px solid ${palette.LightSand};
  h2 {
    ${Heading3Medium}
    padding: 8px 0;
  }
`;

function Mychiving() {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  return (
    <Container>
      <TitleHeader>
        <h2>내가 만든 차량 목록</h2>
      </TitleHeader>
      {showDeleteAlert && (
        <DeleteAlert setShowDeleteAlert={setShowDeleteAlert} />
      )}
      <CardByMe setShowDeleteAlert={setShowDeleteAlert} />

      <TitleHeader>
        <h2>피드에서 저장한 차량 목록</h2>
      </TitleHeader>
    </Container>
  );
}

export default Mychiving;
