import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Heading3Medium } from '../../style/typo';
import CardByMe from '../components/CardByMe';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASIC_SERVER_URL } from '../../constant';
import CardByArchiving from '../components/CardByArchiving';
export const MychivingContext = createContext();
const Container = styled.div`
  width: 960px;
  padding-top: 150px;

  margin: 0 auto;
`;

const Tabmenu = styled.ul`
  display: flex;
  ${Heading3Medium};
  align-items: center;
  margin: 40px 0 20px;
  border-bottom: 3px solid ${palette.LightSand};
  color: ${palette.Sand};

  gap: 20px;
  .submenu {
    display: flex;
    height: 30px;
    width: max-content;
    ${Heading3Medium};
    transition: all 0.3s ease;
  }

  .focused {
    color: black;
    width: max-content;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

const TitleHeader = styled.div`
  h2 {
    ${Heading3Medium}
    padding: 8px 0;
  }
`;

function Mychiving() {
  const navigate = useNavigate();
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

  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    {
      name: '내가 만든 차량 목록',
    },
    {
      name: '아카이빙에서 저장한 차량 목록',
    },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <Container>
      <Tabmenu>
        {menuArr.map((elem, idx) => {
          return (
            <li
              style={{ cursor: 'pointer' }}
              className={idx === currentTab ? 'submenu focused' : 'submenu'}
              onClick={() => selectMenuHandler(idx)}
            >
              {elem.name}
            </li>
          );
        })}
      </Tabmenu>
      <Desc>
        {currentTab === 0 && (
          <div
            style={{
              display: 'flex',
              width: '960px',
              overflow: 'auto',
            }}
          >
            {state &&
              [
                ...state?.myChivingCompleteList,
                ...state?.myChivingTempList,
              ].map((elem) => {
                return (
                  <CardByMe
                    myList={elem}
                    extraOptions={elem.extraOptionDTOs}
                    setUpdate={setUpdate}
                  />
                );
              })}
          </div>
        )}
        {currentTab === 1 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '27px',
              padding: '25px 0',
            }}
          >
            {state &&
              [...state?.carReviewList].map((elem) => {
                return (
                  <CardByArchiving
                    onClick={(e) => {
                      if (e.target.tagName === 'DIV') {
                        navigate(`/archiving/${elem.id}`);
                      } else if (e.target.tagName === 'BUTTON') {
                        console.log('button입니다');
                      }
                    }}
                    savedCar={elem}
                    setUpdate={setUpdate}
                  ></CardByArchiving>
                );
              })}
          </div>
        )}
      </Desc>
    </Container>
  );
}

export default Mychiving;
