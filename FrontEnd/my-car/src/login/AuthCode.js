import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Heading1Bold } from '../style/typo';
import Loading from '../archiving/components/Loading';
import ServerErrorPage from '../error/ServerErrorPage';
import { BASIC_SERVER_URL } from '../constant';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Heading1Bold}
`;

function AuthCode() {
  const [error, setError] = useState(false);
  const code = new URL(window.location.href).searchParams.get('code');
  const [accessToken, setAccessToken] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `${BASIC_SERVER_URL}/user/login?code=${code}&state=${process.env.REACT_APP_STATE}`,
      {
        headers: { 'Content-type': 'application/json' },
        method: 'GET',
      },
    )
      .then((res) => res.json())
      .then((json) => setAccessToken(json.jwtToken))
      .catch((e) => {
        setError(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, navigate]);

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('jwtToken', accessToken);
      navigate('/main');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  if (error) return <ServerErrorPage />;

  return (
    <Container>
      <Loading text={'로그인 중입니다'} />
    </Container>
  );
}
export default AuthCode;
