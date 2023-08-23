import styled from 'styled-components';
import palette from '../style/styleVariable';
import { Body4Medium } from '../style/typo';
import { headerPageName } from '../constant';
import { useLocation } from 'react-router-dom';
import { ReactComponent as HyundaiLogo } from '../../src/assets/hyundaiLogo.svg';
import { ReactComponent as HyundaiLeftDiv } from '../../src/assets/leftDivisionBar.svg';
import { ReactComponent as ArchivingLogo } from '../../src/assets/archivingLogo.svg';
const HeaderDiv = styled.div`
  width: calc(100% - 180px);
  height: 60px;
  background-color: ${palette.Sand};
  ${{ Body4Medium }};
  justify-content: space-between;
  align-items: center;
  padding: 0 90px 0 90px;
  position: fixed;
  top: 0;
  z-index: 4;
  display: ${({ $isLoginPage }) => ($isLoginPage ? 'none' : 'flex')};
`;

const HeaderElements = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 10px;
`;

const ToCarivingBtn = styled.button`
  border-radius: 18px;
  background: ${palette.Black};
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
  height: 35px;
  flex-shrink: 0;
  cursor: pointer;
`;

const ToCarivingBtnText = styled.span`
  color: ${palette.Sand};
  text-align: right;
  ${Body4Medium};
  margin-top: 2px;
`;

const HeaderPageText = styled.span`
  ${Body4Medium};
  color: ${palette.Black};
`;

const HyundaiLogoDiv = styled.div`
  margin-top: 3px;
  cursor: pointer;
`;

function Header({
  setShowCommonAlert,
  setIsMainBtn,
  setClickLinkBtn,
  isLoginPage,
}) {
  const currentPath = useLocation().pathname.split('/')[1];
  let btnText = [];

  switch (currentPath) {
    case 'mycar':
      btnText = ['마이카이빙', '아카이빙'];
      break;
    case 'archiving':
      btnText = ['마이카이빙', '내차만들기'];
      break;
    case 'mychiving':
      btnText = ['아카이빙', '내차만들기'];
      break;
    default:
  }

  function showAlert({ flag, index }) {
    setIsMainBtn(flag);
    setClickLinkBtn(index);
    setShowCommonAlert(true);
  }

  if (useLocation().pathname !== '/main') {
    return (
      <HeaderDiv $isLoginPage={isLoginPage}>
        <HeaderElements>
          <HyundaiLogoDiv onClick={() => showAlert({ flag: true })}>
            <HyundaiLogo />
          </HyundaiLogoDiv>
          <HyundaiLeftDiv />
          <HeaderPageText>{headerPageName[currentPath]}</HeaderPageText>
        </HeaderElements>
        <HeaderElements>
          {Array.from({ length: 2 }, (_, index) => (
            <ToCarivingBtn onClick={() => showAlert({ flag: false, index })}>
              <ArchivingLogo style={{ width: '20px', height: '18px' }} />
              <ToCarivingBtnText>{btnText[index]}</ToCarivingBtnText>
            </ToCarivingBtn>
          ))}
        </HeaderElements>
      </HeaderDiv>
    );
  }
}
export default Header;
