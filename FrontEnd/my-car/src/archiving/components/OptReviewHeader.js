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
  height: 24px;
  /* border-radius: 3px; */

  ${({ $isActive }) =>
    $isActive
      ? css`
          ${Body2Medium}
          font-weight: bolder;
          color: ${palette.DarkGray};
          border-bottom: 2px solid;
        `
      : css`
          ${Body2Regular}
          color: ${palette.MediumGray};
        `}
`;

const HeaderWrap = styled.div`
  /* border-bottom: 1px solid ${palette.LightGray}; */
  /* border-bottom: 2px solid #e4dcd396; */
  gap: 16px;
  display: flex;
  align-items: flex-end;
  gap: 20px;
  display: flex;
  align-items: center;
  padding: 15px 0 0 0;
  width: 960px;
  margin: 0 auto;
  h1 {
    ${Heading2Bold}
  }
`;

const TabWrap = styled.div`
  display: flex;

  span {
    cursor: pointer;
    margin: 0 5px;
    padding: 0 3px;
    width: 28px;
    /* &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    } */
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
        <h1>사용후기 </h1>
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
