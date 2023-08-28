import { BASIC_SERVER_URL } from './constant';

async function fetchData({ path, method = 'GET' }) {
  const accessToken = localStorage.getItem('jwtToken');

  return fetch(path, {
    method,
    headers: {
      accept: 'application/json;charset=UTF-8',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
}

// API PATH 생성
export const MakePath = {
  base: BASIC_SERVER_URL,
  option: (option) => `${MakePath.base}/${option}`,
};
//내차만들기 페이지 API
export async function MyCarOptionAPI(option) {
  try {
    const data = await fetchData({
      path: MakePath.option(option),
    });
    return { data };
  } catch (error) {
    return { error };
  }
}
