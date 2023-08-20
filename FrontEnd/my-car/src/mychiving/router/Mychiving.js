import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Heading3Medium } from '../../style/typo';
import CardByMe from '../components/CardByMe';
import { createContext, useEffect, useState } from 'react';
import DeleteAlert from '../components/DeleteAlert';
import OptDetailModal from '../components/OptDetailModal';
import { useLoaderData, useLocation } from 'react-router-dom';
import { BASIC_SERVER_URL } from '../../constant';
export const MychivingContext = createContext();
const Container = styled.div`
  width: 1040px;
  margin: 0 auto;
`;
const TitleHeader = styled.div`
  border-bottom: 4px solid ${palette.LightSand};
  h2 {
    ${Heading3Medium}
    padding: 8px 0;
  }
`;

function Mychiving() {
  async function fetchData() {
    const accessToken = localStorage.getItem('jwtToken');
    return fetch(`${BASIC_SERVER_URL}/user/feeds`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => res.json());
  }
  const [state, setState] = useState();
  const [update, setUpdate] = useState(false);
  async function getData() {
    try {
      const data = await fetchData();
      setState(data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  const [isJustDeleted, setIsJustDeleted] = useState(false);

  return (
    <Container>
      <TitleHeader>
        <h2>내가 만든 차량 목록</h2>
      </TitleHeader>

      <div style={{ display: 'flex', width: '1040px', overflow: 'auto' }}>
        {state &&
          [...state?.myChivingCompleteList, ...state?.myChivingTempList].map(
            (elem) => {
              console.log(elem);
              return (
                <CardByMe
                  myList={elem}
                  extraOptions={elem.extraOptionDTOs}
                  setIsJustDeleted={setIsJustDeleted}
                  isJustDeleted={isJustDeleted}
                  setUpdate={setUpdate}
                />
              );
            },
          )}
      </div>

      <TitleHeader>
        <h2>피드에서 저장한 차량 목록</h2>
      </TitleHeader>
    </Container>
  );
}

export default Mychiving;
