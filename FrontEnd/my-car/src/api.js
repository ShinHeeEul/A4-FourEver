import { BASIC_SERVER_URL } from './constant';

async function fetchData({ path }) {
  return fetch(path)
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

//내차만들기 페이지 API PATH 생성
const MyCarApiPath = {
  base: `${BASIC_SERVER_URL}/cars/1`,
  option: (option) => `${MyCarApiPath.base}/${option}`,
};
//내차만들기 페이지 API
async function MyCarOptionAPI(option) {
  const data = await fetchData({
    path: MyCarApiPath.option(option),
  });
  return { data };
}
export default MyCarOptionAPI;
