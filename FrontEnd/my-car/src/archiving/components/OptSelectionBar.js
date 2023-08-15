import { css, styled } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body3Regular } from '../../style/typo';
import { useContext, useState } from 'react';
import {
  OptionSelectAction,
  OptionSelectValue,
} from '../../context/archiving/ArchivingProvider';

const Container = styled.div`
  background-color: ${palette.Neutral};
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagWrap = styled.div`
  width: calc(1280px - 180px);
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const OptTag = styled.button`
  border: 0;

  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: #385da2;
          color: ${palette.Neutral};
        `
      : css`
          background-color: #fff;
          color: ${palette.DarkGray};
        `}

  border-radius: 4px;
  border: 0.5px solid var(--light-gray, #dcdcdc);
  ${Body3Regular}
  cursor: pointer;
  padding: 4px 12px;
`;

const Mock = [
  { id: '1', name: '컴포트 || 패키지' },
  { id: '2', name: '주차 보조 시스템 ||' },
  { id: '3', name: '2열 통풍시트' },
  { id: '4', name: '듀얼 와이드 선루프' },
  { id: '5', name: '현대스마트센스 |' },
  { id: '6', name: '빌트인 캠(보조배터리 포함)' },
  { id: '7', name: '듀얼 머플러 패키지' },
  { id: '8', name: '사이드스텝' },
  { id: '9', name: '빌트인 공기청정기' },
  { id: '10', name: '적외선 무릎워머' },
  { id: '11', name: '차량 보호 필름' },
  { id: '12', name: '프로텍션 매트 패키지 |' },
  { id: '13', name: '20인치 다크 스퍼터링 휠' },
  { id: '14', name: '20인치 블랙톤 전면 가공휠' },
  { id: '15', name: '알콘 단조브레이크 휠 패키지' },
];

function OptSelectionBar() {
  const { action } = useContext(OptionSelectAction);
  const { activeStates } = useContext(OptionSelectValue);

  const ClickOption = ({ id }) => {
    action.select({ id });
  };

  return (
    <Container>
      <TagWrap>
        {Mock.map((list, index) => (
          <OptTag
            onClick={() => ClickOption({ id: list.id })}
            key={index}
            $isActive={activeStates[list.id]}
          >
            {list.name}
          </OptTag>
        ))}
      </TagWrap>
    </Container>
  );
}
export default OptSelectionBar;
