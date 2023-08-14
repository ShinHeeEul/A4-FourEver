import { useOutletContext } from 'react-router-dom';
import { styled } from 'styled-components';
import TrimCard from '../components/trimPage/TrimCard';
import { MYCAR } from '../../constant';
import TrimModelImg from '../components/trimPage/TrimModelImg';
import { useContext, useEffect } from 'react';
import { HeaderActionContext } from '../../Root';

export const Container = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  margin: 27px auto;
  flex-direction: column;
`;

function Model() {
  const { trimOptions } = useOutletContext();
  const { setIsAccess } = useContext(HeaderActionContext);

  useEffect(() => {
    setIsAccess(false);
  }, []);
  return (
    <Container>
      <TrimModelImg src={trimOptions[MYCAR.TRIM.FILED.MODEL][0].image} />
      <TrimCard options={trimOptions[MYCAR.TRIM.FILED.MODEL]} />
    </Container>
  );
}
export default Model;
