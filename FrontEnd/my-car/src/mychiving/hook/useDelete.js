import { BASIC_SERVER_URL } from '../../constant';

export async function useDeleteRequest(id, requestUrl) {
  const accessToken = localStorage.getItem('jwtToken');
  console.log(accessToken);
  const url = `${BASIC_SERVER_URL}${requestUrl}${id}`;
  // const url = `${BASIC_SERVER_URL}/mychiving/delete/${id}`;
  const options = {
    method: 'DELETE',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${accessToken}`,
    },
  };
  try {
    const res = await fetch(url, options);
    console.log(res);
    if (res.ok) {
      // 삭제 요청이 성공적으로 이루어진 경우
      console.log('ok');
    } else {
      // 삭제 요청이 실패한 경우
      console.log('else');
    }
  } catch (error) {
    // 네트워크 오류 등의 예외 처리
    throw new Error('Delete request failed: ' + error.message);
  }
}
