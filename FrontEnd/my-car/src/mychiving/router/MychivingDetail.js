import { createContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
export const DataLoaderContext = createContext();

const Container = styled.div`
  width: 100%;
  min-width: 1350px;
  padding-top: 150px;
`;
function MychivingDetail() {
  const { id } = useParams();
  const { data } = useLoaderData();
  console.log(id);
  console.log(data);
  return (
    <DataLoaderContext.Provider value={data}>
      <Container>dkfs</Container>
    </DataLoaderContext.Provider>
  );
}

export default MychivingDetail;
