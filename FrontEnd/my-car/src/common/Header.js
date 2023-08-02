import styled from "styled-components";
import { palette } from "../style/styleVariable";
import { Body4_Medium } from "../style/typo";

const HeaderDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${palette.Sand};
  ${Body4_Medium};
`;

function Header() {
  return <HeaderDiv>현대차</HeaderDiv>;
}
export default Header;
