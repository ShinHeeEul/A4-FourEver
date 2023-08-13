import styled from 'styled-components';
import palette from '../style/styleVariable';
import { Body4Medium, Heading4Bold } from '../style/typo';
import { headerPageName } from '../constant';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderValueContext } from '../Root';
import { ReactComponent as HyundaiLogo } from '../../src/assets/hyundaiLogo.svg';
import { ReactComponent as HyundaiLeftDiv } from '../../src/assets/leftDivisionBar.svg';
import { ReactComponent as HyundaiRightDiv } from '../../src/assets/rightDivisionBar.svg';
import { ReactComponent as ArchivingLogo } from '../../src/assets/archivingLogo.svg';
const HeaderDiv = styled.div`
  width: calc(100% - 180px);
  height: 60px;
  background-color: ${palette.Sand};
  ${{ Body4Medium }};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px 0 90px;
  position: fixed;
  top: 0;
  z-index: 3;
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
  width: 98px;
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

const CarNameText = styled.span`
  color: ${palette.DarkGray};
  ${Heading4Bold};
  font-size: 16px;
`;

const HyundaiLogoDiv = styled.div`
  margin-top: 3px;
  cursor: pointer;
`;

function showAlert(setShowCommonAlert, setIsMainBtn, flag) {
  setShowCommonAlert(true);
  setIsMainBtn(flag);
}

function Header({ setShowCommonAlert, setIsMainBtn }) {
  const currentPath = useLocation().pathname.split('/')[1];
  const { isAccess } = useContext(HeaderValueContext);
  let btnText;

  switch (currentPath) {
    case 'mycar':
      btnText = '아카이빙';
      break;
    case 'archiving':
      btnText = '마이카이빙';
      break;
    case 'mychiving':
      btnText = '아카이빙';
      break;
    default:
  }

  if (useLocation().pathname !== '/main') {
    return (
      <HeaderDiv>
        <HeaderElements>
          <HyundaiLogoDiv
            onClick={() => showAlert(setShowCommonAlert, setIsMainBtn, true)}
          >
            <HyundaiLogo />
          </HyundaiLogoDiv>
          <HyundaiLeftDiv />
          <HeaderPageText>{headerPageName[currentPath]}</HeaderPageText>
        </HeaderElements>
        <HeaderElements>
          <CarNameText>팰리세이드</CarNameText>
          <HyundaiRightDiv />

          {currentPath === 'archiving' && !isAccess ? (
            <></>
          ) : (
            <ToCarivingBtn
              onClick={() => showAlert(setShowCommonAlert, setIsMainBtn, false)}
            >
              <ArchivingLogo />
              <ToCarivingBtnText>{btnText}</ToCarivingBtnText>
            </ToCarivingBtn>
          )}
        </HeaderElements>
      </HeaderDiv>
    );
  }
}
export default Header;
