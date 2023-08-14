import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import ChivingHeader from '../common/ChivingHeader';

function RootArchiving() {
  return (
    <>
      <ChivingHeader />
      <Outlet />
    </>
  );
}
export default RootArchiving;
