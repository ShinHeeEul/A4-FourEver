import { BASIC_SERVER_URL } from './constant';

async function fetchData({ path, method = 'GET' }) {
  return fetch(path, { method }).then((res) => res.json());
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
    console.log(error);
    return { error };
  }
}
//아카이빙 API
export async function ArchivingAPI(option) {
  try {
    const data = await fetchData({
      path: MakePath.option(option),
      method: 'POST',
    });
    return { data };
  } catch (error) {
    return { error };
  }
}
