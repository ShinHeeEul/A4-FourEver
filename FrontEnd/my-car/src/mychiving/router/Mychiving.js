import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Heading3Medium } from '../../style/typo';
import CardByMe from '../components/CardByMe';
import { createContext, useState } from 'react';
import DeleteAlert from '../components/DeleteAlert';
import OptDetailModal from '../components/OptDetailModal';
import { useLoaderData } from 'react-router-dom';
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
  const { data } = useLoaderData();
  console.log(data);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const mychivingList = [
    ...data.myChivingTempList,
    ...data.myChivingCompleteList,
  ];
  //mychivingList 시간순 정렬
  return (
    <MychivingContext.Provider value={data}>
      <Container>
        {showDeleteAlert && (
          <DeleteAlert
            setShowDeleteAlert={setShowDeleteAlert}
            showDeleteAlert={showDeleteAlert}
          />
        )}

        <TitleHeader>
          <h2>내가 만든 차량 목록</h2>
        </TitleHeader>
        {mychivingList &&
          mychivingList.map((elem) => {
            console.log(elem.extraOptionDTOs);
            return (
              <>
                {showDetailModal && (
                  <OptDetailModal
                    setShowDetailModal={setShowDetailModal}
                    showDetailModal={showDetailModal}
                    extraOptions={elem.extraOptionDTOs}
                  />
                )}
                <CardByMe
                  myList={elem}
                  setShowDeleteAlert={setShowDeleteAlert}
                  setShowDetailModal={setShowDetailModal}
                />
              </>
            );
          })}

        <TitleHeader>
          <h2>피드에서 저장한 차량 목록</h2>
        </TitleHeader>
      </Container>
    </MychivingContext.Provider>
  );
}

export default Mychiving;
