import styled from 'styled-components';
import palette from '../../style/styleVariable';
import { Body2Medium, Body3Medium, Body4Medium } from '../../style/typo';
import { navCategoryName } from '../../constant';

const NavBarDiv = styled.div`
  width: 100%;
  height: 58px;
  flex-shrink: 0;
  background-color: ${palette.LightSand};
  display: flex;
  align-items: center;
`;

const NavBarCategory = styled.div`
  display: flex;
  align-items: center;
`;
const CategoryNum = styled.div`
  padding-left: 120px;
`;

const CategoryNumDiv = styled.div`
  background-color: ${palette.Black};
  border-radius: 100px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryNumSubDiv = styled(CategoryNumDiv)`
  background-color: ${palette.MediumGray};
  margin-left: 10px;
`;

const CategoryNumText = styled.span`
  ${Body4Medium}
  color: #fFF;
`;
const CategoryTextMain = styled.span`
  ${Body2Medium};
  color: ${palette.Black};
  padding-left: 5px;
`;

const CategoryTextSub = styled.span`
  ${Body3Medium};
  color: ${palette.MediumGray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 12px;
`;
function NavBar() {
  return (
    <NavBarDiv>
      <NavBarCategory>
        <CategoryNum>
          <CategoryNumDiv>
            <CategoryNumText>1</CategoryNumText>
          </CategoryNumDiv>
        </CategoryNum>
        <CategoryTextMain>{navCategoryName[0].key}</CategoryTextMain>
        <CategoryTextSub>
          {navCategoryName[0].value[0]}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_107_10719)">
              <path
                d="M5.72656 11.06L8.7799 8L5.72656 4.94L6.66656 4L10.6666 8L6.66656 12L5.72656 11.06Z"
                fill="#BEBEBE"
              />
            </g>
            <defs>
              <clipPath id="clip0_107_10719">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {navCategoryName[0].value[1]}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_107_10719)">
              <path
                d="M5.72656 11.06L8.7799 8L5.72656 4.94L6.66656 4L10.6666 8L6.66656 12L5.72656 11.06Z"
                fill="#BEBEBE"
              />
            </g>
            <defs>
              <clipPath id="clip0_107_10719">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {navCategoryName[0].value[2]}
          <CategoryNumSubDiv>
            <CategoryNumText>2</CategoryNumText>
          </CategoryNumSubDiv>
          <CategoryNumSubDiv>
            <CategoryNumText>3</CategoryNumText>
          </CategoryNumSubDiv>
        </CategoryTextSub>
      </NavBarCategory>
    </NavBarDiv>
  );
}
export default NavBar;
