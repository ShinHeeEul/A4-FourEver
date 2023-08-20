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
  margin: 0px auto;
  background-color: white;
  background: linear-gradient(
    to bottom,

    rgba(250, 250, 250, 1),
    rgba(250, 250, 250, 1),
    rgba(250, 250, 250, 0.9),
    rgba(250, 250, 250, 0.3),
    rgba(250, 250, 250, 0.2),
    rgba(250, 250, 250, 0)
  );

  width: 100vw;
  margin: 0px auto;
  height: 120px;
  padding: 0px 0px 30px 0;
`;

const TabText = styled.span`
  height: 24px;

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
  gap: 20px;
  display: flex;
  align-items: center;
  /* padding: 15px 0 0 0; */
  width: 960px;
  margin: 0 auto;

  height: 70px;
  padding-bottom: 52px;
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
