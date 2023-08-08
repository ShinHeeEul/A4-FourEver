import { styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Medium, Heading1Medium, Heading3Medium } from '../../style/typo';

const BgDiv = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const AddBtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const AddBtnTitle = styled.span`
  ${Heading3Medium}
  padding-bottom: 15px;
`;

const ConsultingBtn = styled.div`
  border: none;
  width: 355px;
  height: 52px;
  border-radius: 10px;
  background-color: ${palette.LightSand};
  display: flex;
  gap: 160px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProcessBtn = styled.button`
  border: none;
  display: flex;
  width: 230px;
  height: 52px;
  padding: 15px 27px;
  justify-content: center;
  align-items: center;
  margin: 0 10px 10px 0;
  border-radius: 10px;
  background-color: ${palette.LightSand};
  ${Body3Medium}
  cursor: pointer;
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;

const BtnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BtnText = styled.span`
  ${Body3Medium}
`;
const MainLineDiv = styled.div`
  padding: 0 0 15px 0;
`;
function Line() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1024"
      height="4"
      viewBox="0 0 1024 4"
      fill="none"
    >
      <path d="M0 2L1040 2.00009" stroke="#F3F2F5" stroke-width="4" />
    </svg>
  );
}

function MoveBtn() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        d="M1 0.999999L7 7L1 13"
        stroke="#232323"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function AddProcessBtn() {
  return (
    <BgDiv>
      <MainLineDiv>
        <Line />
      </MainLineDiv>

      <ContentWrap>
        <AddBtnDiv>
          <AddBtnTitle>딜러에게 가까운 출고일자 상담을 받아볼까요?</AddBtnTitle>
          <ConsultingBtn>
            <BtnText>출고일자 상담신청 바로가기</BtnText>
            <MoveBtn />
          </ConsultingBtn>
        </AddBtnDiv>
        <AddBtnDiv>
          <AddBtnTitle>구매를 위한 다른 절차가 필요하신가요?</AddBtnTitle>
          <BtnWrap>
            <ProcessBtn>구매상담 신청하기</ProcessBtn>
            <ProcessBtn>PDF 다운로드</ProcessBtn>
            <ProcessBtn>카탈로그 다운로드</ProcessBtn>
            <ProcessBtn>전시 차량 조회</ProcessBtn>
          </BtnWrap>
        </AddBtnDiv>
      </ContentWrap>
    </BgDiv>
  );
}

export default AddProcessBtn;
