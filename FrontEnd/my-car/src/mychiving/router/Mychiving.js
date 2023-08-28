import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Heading2Medium, Heading3Medium } from '../../style/typo';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASIC_SERVER_URL } from '../../constant';
import CardByArchiving from '../components/CardByArchiving';
import MyCardOrigin from '../components/MyCardOrigin';
export const MychivingContext = createContext();
const Container = styled.div`
  width: 1028px;
  padding-top: 150px;
  margin: 0 auto;
`;

const Tabmenu = styled.ul`
  display: flex;
  ${Heading3Medium};
  align-items: center;
  margin: 40px 0 20px;
  border-bottom: 2px solid ${palette.LightSand};
  color: ${palette.LightGray};
  padding: 5px 0;
  gap: 30px;
  position: relative;

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
  &::after {
    content: '';
    width: ${({ $isByMe }) => ($isByMe ? '160px' : '243px')};
    border-radius: 10px;
    background-color: black;
    height: 5px;
    position: absolute;
    left: ${({ $isByMe }) => ($isByMe ? '0' : '190px')};
    bottom: -4px;
    transition: all 0.3s ease;
  }
`;

const Desc = styled.div``;
const EmptyMsgDiv = styled.div`
  width: 100%;
  padding: 70px 0;
  ${Heading2Medium}
  color:${palette.MediumGray};
  display: flex;
  justify-content: center;
  align-items: center;
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
    })
      .then((res) => res.json())
      .catch((e) => navigate('/'));
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
      <Tabmenu $isByMe={currentTab === 0}>
        {menuArr.map((elem, idx) => {
          return (
            <li
              style={{ cursor: 'pointer', marginLeft: '5px' }}
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
              width: '1028px',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '25px 0',
            }}
          >
            {state &&
              ([...state?.myChivingCompleteList, ...state?.myChivingTempList]
                .length === 0 ? (
                <EmptyMsgDiv>내가 만든 차량 목록이 없습니다.</EmptyMsgDiv>
              ) : (
                [
                  ...state?.myChivingCompleteList,
                  ...state?.myChivingTempList,
                ].map((elem) => {
                  return (
                    <MyCardOrigin
                      myList={elem}
                      extraOptions={elem.extraOptionDTOs}
                      setUpdate={setUpdate}
                    />
                  );
                })
              ))}
          </div>
        )}
        {currentTab === 1 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              padding: '25px 0',
            }}
          >
            {state &&
              ([...state?.carReviewList].length === 0 ? (
                <EmptyMsgDiv>
                  아카이빙에서 저장한 차량 목록이 없습니다.
                </EmptyMsgDiv>
              ) : (
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
                    />
                  );
                })
              ))}
          </div>
        )}
      </Desc>
    </Container>
  );
}

export default Mychiving;
