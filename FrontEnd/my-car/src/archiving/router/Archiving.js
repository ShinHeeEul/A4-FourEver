import { styled } from 'styled-components';
import OptSelectionBar from '../components/OptSelectionBar';
import OptReviewHeader from '../components/OptReviewHeader';
import OptReviewCard from '../components/OptReviewCard';
import ArchivingProvider from '../../context/archiving/ArchivingProvider';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import WarningTooltip from '../components/WarningTooltip';
import Loading from '../../common/Loading';

const Container = styled.div`
  width: 100%;
  min-width: 1280px;

  position: relative;
  padding-top: 370px;
`;

const FixedContainer = styled.div`
  position: fixed;
  top: 150px;
  width: 100%;
`;

function Archiving() {
  const { loading } = useOutletContext();

  return (
    <>
      {loading ? (
        <Loading text={'후기를 불러오는 중입니다'} />
      ) : (
        <Container>
          <FixedContainer>
            <OptSelectionBar />
            <OptReviewHeader />
          </FixedContainer>
          <OptReviewCard />
        </Container>
      )}
    </>
  );
}
export default Archiving;
