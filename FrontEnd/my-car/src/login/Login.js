import { useEffect, useLayoutEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import palette from '../style/styleVariable';
import {
  Body2Medium,
  Body2Regular,
  Body3Medium,
  Body3Regular,
  Body4Regular,
  Heading1Medium,
} from '../style/typo';
import ServerErrorPage, { Logo } from '../error/ServerErrorPage';
import blueLogo from './assets/hyundaiBlueLogo.png';
import { useNavigate } from 'react-router-dom';
import { BASIC_SERVER_URL } from '../constant';
import whiteLogo from '../error/asset/whiteLogo.png';

const Bluelogo = styled(Logo)`
  height: 35px;
  top: 16px;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-image: url(https://talent.hyundai.com/static/images/main/main-visual-01.jpg); */
  background-size: cover;
  background-color: ${palette.Sand};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  padding: 60px 20px;
  box-sizing: border-box;
  position: relative;
  width: 470px;
  margin: auto;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border-radius: 15px;
`;

const TitleH1 = styled.h1`
  width: 350px;
  font-size: 37px;
  font-family: 'yg-jalnan';
  text-align: center;
  margin-bottom: 20px;
  /* color: #ffe84e; */
  color: ${palette.Black};
  ${Heading1Medium}
  font-size: 30px;
`;

const TitleSpan = styled.span`
  /* width: 240px; */
  font-size: 15px;
  text-align: center;
  margin-bottom: 13px;
  line-height: 22px;
  font-weight: 600;
  ${Body3Regular}
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 77%;
  margin-top: 30px;
`;

const LoginInput = styled.input`
  ${Body3Regular}
  height: 50px;
  padding: 0 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid white;
  box-shadow: rgb(123, 129, 133, 0.2) 0px 4px 16px;
  &:focus {
    outline: 1px solid ${palette.Primary};
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SubmitBtn = styled.button`
  height: 50px;
  padding: 0 15px;
  border-radius: 10px;
  background-color: ${palette.Blue800};
  border: none;
  font-weight: 700;
  color: ${palette.Neutral};
  ${Body2Medium}
  cursor: pointer;
  margin-top: ${({ $margin }) => ($margin ? '0px' : '30px')};
`;

const ErrorDiv = styled.div`
  height: 30px;
  padding: 15px 0;
  margin: 5px 0;
  p {
    ${Body3Medium}

    color: #fa3d3d;
    display: inline-block;
  }
`;

const OrDiv = styled.div`
  position: relative;
  width: 60%;
  height: 50px;
  margin-top: 20px;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 2px;
    background-color: #8989894a;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: inline-block;
    background-color: white;
    padding: 0 10px;
    ${Body4Regular}
    color:gray
  }
`;
const HyundaiLogin = styled(SubmitBtn)`
  width: 300px;
  background-color: ${palette.Primary};
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  img {
    width: 100px;
  }
`;

function Login() {
  const accessToken = localStorage.getItem('jwtToken');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const hyundaiLogin = () => {
    window.location.href = `https://prd.kr-ccapi.hyundai.com/api/v1/user/oauth2/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=code&state=${process.env.REACT_APP_STATE}`;
  };

  async function onValid({ email, password }) {
    try {
      const res = await fetch(`${BASIC_SERVER_URL}/user/self-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .catch((e) => console.error(e));

      if (res?.code === 10012) {
        console.log('로그인 실패');
        setError('serverError', { message: '비밀번호가 일치하지 않습니다' });
      } else {
        localStorage.setItem('jwtToken', res.jwtToken);
        navigate('/main');
      }
    } catch {
      setError('serverError', { message: '서버에러' });
    }
  }
  if (accessToken) {
  }

  useEffect(() => {
    if (accessToken) {
      navigate('/main');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  if (errors.setError) return <ServerErrorPage />;

  return (
    <Background>
      <Bluelogo src={blueLogo} />
      <Container>
        <TitleH1>로그인 / 회원가입</TitleH1>
        <TitleSpan>
          현대자동차 내 차 만들기 홈페이지에 오신 것을 환영합니다
        </TitleSpan>
        <LoginForm onSubmit={handleSubmit(onValid)}>
          <LoginInput
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
            type="text"
            placeholder={'이메일'}
            autoComplete="off"
          />
          <LoginInput
            {...register('password', {
              required: '비밀번호를 입력하세요',
            })}
            type="password"
            placeholder={'비밀번호'}
          />
          {Object.keys(errors).length > 0 && (
            <ErrorDiv>
              {errors.email?.message ? (
                <p>{errors.email?.message}</p>
              ) : errors.password ? (
                <p>{errors.password.message}</p>
              ) : errors.serverError ? (
                <p>{errors.serverError.message}</p>
              ) : null}
            </ErrorDiv>
          )}

          <SubmitBtn type="submit" $margin={Object.keys(errors).length > 0}>
            로그인
          </SubmitBtn>
        </LoginForm>

        <OrDiv>
          <span>또는</span>
        </OrDiv>
        <HyundaiLogin as="div" onClick={hyundaiLogin}>
          <img alt="logo" src={whiteLogo} />
          로그인
        </HyundaiLogin>
      </Container>
    </Background>
  );
}
export default Login;
