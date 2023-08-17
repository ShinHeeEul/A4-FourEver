import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Heading1Bold } from '../style/typo';
import Loading from '../archiving/components/Loading';
import ServerErrorPage from '../error/ServerErrorPage';

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
  const navigate = useNavigate();
  useEffect(() => {
    fetch('', { method: 'POST', body: { code: code } })
      .then((res) => {
        //토큰 저장
        //   localStorage.setItem("accessToken", res.access_token)
        // navigate('/main');
      })
      .catch((e) => {
        setError(e);
      });
  }, [code, navigate]);

  if (error) return <ServerErrorPage />;

  return (
    <Container>
      <Loading text={'로그인 중입니다'} />
    </Container>
  );
}
export default AuthCode;
