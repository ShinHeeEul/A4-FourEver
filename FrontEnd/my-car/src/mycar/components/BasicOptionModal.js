import { css, styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body4Regular, Heading4Bold, Heading4Medium } from '../../style/typo';

const HtmlWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;
  filter: blur(2px);
  ${(props) =>
    props.$showModal &&
    css`
      display: block;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 99;
      backdrop-filter: blur(2px);
    `}
`;

const ModalContainer = styled.div`
  width: 800px;
  height: 510px;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  padding-bottom: 20px;
  display: ${(props) => (props.$showModal ? 'block' : 'none')};
  z-index: 900;
`;
const ModalHeader = styled.header`
  height: 80px;
  border-bottom: 1px solid ${palette.LightGray};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Heading4Medium}
  color: ${palette.Black};
`;

const ContentImg = styled.img``;
const ConfirmButton = styled.button``;

const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  width: 668px;
  margin: 0 auto;
  ${ContentImg} {
    width: 100%;
    height: 263px;
    border-radius: 8px;
  }
  span {
    ${Body4Regular}
    margin-top: 24px;
  }
  ${ConfirmButton} {
    margin-top: 33px;
    width: 176px;
    height: 50px;
    border-radius: 8px;
    background-color: ${palette.Primary};
    color: ${palette.LightSand};
    ${Heading4Bold}
    cursor: pointer;
  }
`;

function BasicOptionModal({ modal, setModal, option }) {
  return (
    <>
      <HtmlWrap $showModal={modal.show}></HtmlWrap>
      <ModalContainer $showModal={modal.show}>
        <ModalHeader>{option[modal.optionId]?.name}</ModalHeader>
        <ContentWrap>
          <ContentImg />
          <span>{option[modal.optionId].explain}</span>
          <ConfirmButton
            onClick={() => setModal((prev) => ({ ...prev, show: false }))}
          >
            확인
          </ConfirmButton>
        </ContentWrap>
      </ModalContainer>
    </>
  );
}
export default BasicOptionModal;
