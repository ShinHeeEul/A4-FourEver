import { useEffect } from 'react';

function Login() {
  useEffect(() => {
    window.location.href = `https://prd.kr-ccapi.hyundai.com/api/v1/user/oauth2/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=code&state=${process.env.REACT_APP_STATE}`;
  }, []);
  return <div></div>;
}
export default Login;
