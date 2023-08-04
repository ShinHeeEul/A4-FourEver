import { styled } from 'styled-components';
import TrimCard from '../components/TrimCard';
import { useLoaderData } from 'react-router-dom';

export const Container = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 50px auto;
  flex-direction: column;
`;

function Trim() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <Container>
      <div style={{ height: '355px' }} />
      <TrimCard />
    </Container>
  );
}
export default Trim;
