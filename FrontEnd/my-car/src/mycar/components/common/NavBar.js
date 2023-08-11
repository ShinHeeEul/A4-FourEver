import styled from 'styled-components';
import palette from '../../../style/styleVariable';
import { Body2Medium, Body3Medium, Body4Medium } from '../../../style/typo';
import { navCategoryName } from '../../../constant';
import { useLocation } from 'react-router-dom';
const NavBarDiv = styled.div`
  width: 100%;
  height: 58px;
  flex-shrink: 0;
  background-color: ${palette.LightSand};
  display: flex;
  align-items: center;
  margin-top: 60px;
`;

const NavBarCategory = styled.div`
  margin-left: 120px;
  display: flex;
  align-items: center;
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
  margin-left: 10px;
  ${(props) => {
    if (props.$isSelected === true) {
      return `
      background-color: ${palette.Black};
      `;
    }
    return `
      background-color: ${palette.LightGray};
      `;
  }}
`;

const CategoryNumText = styled.span`
  ${Body4Medium}
  color: #fFF;
`;
const CategoryTextMain = styled.span`
  ${Body2Medium};
  color: ${palette.Black};
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.$show === true) {
      return `display: flex;`;
    }
    return `display: none`;
  }}
`;

const CategoryTextSub = styled.span`
  ${Body3Medium};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  ${(props) => {
    if (props.$isSelected === true) {
      return `
         color: ${palette.Black}
      `;
    }
    return `
      color: ${palette.MediumGray};
    `;
  }}
`;

const CategoryTextSubShow = styled(CategoryTextSub)`
  ${(props) => {
    if (props.$show === true) {
      return `display: flex;`;
    }
    return `display: none`;
  }}
`;

function NavBarImg({ show }) {
  if (show === true) {
    return (
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
    );
  }
}

function NavBar() {
  const location = useLocation().pathname;
  const pathnameList = location.split('/').slice(2);
  const [titlePathName, subPathName] = pathnameList;

  const nowPageObj = Object.entries(navCategoryName[titlePathName].value);
  if (titlePathName !== 'complete') {
    return (
      <NavBarDiv>
        <NavBarCategory>
          {Object.keys(navCategoryName).map((_, navFullIdx) => {
            return (
              <>
                <CategoryNumSubDiv
                  $isSelected={
                    Object.keys(navCategoryName)[navFullIdx] === titlePathName
                  }
                >
                  <CategoryNumText>{navFullIdx + 1}</CategoryNumText>
                </CategoryNumSubDiv>

                <CategoryTextMain
                  $show={
                    Object.keys(navCategoryName)[navFullIdx] === titlePathName
                  }
                >
                  {navCategoryName[titlePathName].id}
                </CategoryTextMain>

                {nowPageObj.map(([key, value], eachElemIdx) => {
                  return (
                    <>
                      <CategoryTextSubShow
                        $show={
                          Object.keys(navCategoryName)[navFullIdx] ===
                          titlePathName
                        }
                        $isSelected={
                          key === subPathName || subPathName === undefined
                        }
                      >
                        {value}
                      </CategoryTextSubShow>
                      {eachElemIdx !==
                      Object.keys(navCategoryName[titlePathName].value).length -
                        1 ? (
                        <NavBarImg
                          show={
                            Object.keys(navCategoryName)[navFullIdx] ===
                            titlePathName
                          }
                        />
                      ) : (
                        <div></div>
                      )}
                    </>
                  );
                })}
              </>
            );
          })}
        </NavBarCategory>
      </NavBarDiv>
    );
  }
}
export default NavBar;
