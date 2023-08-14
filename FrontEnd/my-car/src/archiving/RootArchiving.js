import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
const Test = styled.h2`
  margin-top: 200px;
`;

function RootArchiving() {
  return (
    <Test>
      아카이빙페이지입니다
      <Outlet />
    </Test>
  );
}
export default RootArchiving;
