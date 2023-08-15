import { css, styled } from 'styled-components';
import { Body2Medium, Body2Regular, Heading2Bold } from '../../style/typo';
import palette from '../../style/styleVariable';
import {
  OptionSelectAction,
  OptionSelectValue,
} from '../../context/archiving/ArchivingProvider';
import { useContext } from 'react';
import { ArchivingTabMenu } from '../../constant';

export const Container = styled.div`
  width: 1280px;
  margin: 20px auto;
`;

const TabText = styled.span`
  ${({ $isActive }) =>
    $isActive
      ? css`
          ${Body2Medium}
          font-weight: bolder;
        `
      : css`
          ${Body2Regular}
        `}
`;

const HeaderWrap = styled.div`
  /* border-bottom: 1px solid ${palette.LightGray}; */
  border-bottom: 2px solid #e4dcd396;
  gap: 20px;
  display: flex;
  align-items: flex-end;
  h1 {
    ${Heading2Bold}
  }

  padding: 15px 0;
  margin: 0 150px;
`;

const TabWrap = styled.div`
  display: flex;

  span {
    cursor: pointer;

    padding: 0 10px;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`;

function OptReviewHeader() {
  const { action } = useContext(OptionSelectAction);
  const { activeTab } = useContext(OptionSelectValue);

  const TabClick = ({ index }) => {
    action.tab({ index });
  };

  return (
    <Container>
      <HeaderWrap>
        <h1>사용후기</h1>
        <TabWrap>
          {ArchivingTabMenu.map((tab, index) => (
            <TabText
              $isActive={activeTab === index}
              key={index}
              onClick={() => TabClick({ index })}
            >
              {tab}
            </TabText>
          ))}
        </TabWrap>
      </HeaderWrap>
    </Container>
  );
}
export default OptReviewHeader;
