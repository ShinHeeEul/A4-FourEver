import { styled } from 'styled-components';
import palette from '../../../style/styleVariable';
import { Body4Regular } from '../../../style/typo';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ToolTipWrap = styled.div`
  position: absolute;
  top: 70px;
  right: 100px;
  span {
    width: 156px;
    position: absolute;
    top: 18px;
    left: 13px;
    color: ${palette.LightSand};
    ${Body4Regular}
  }
  opacity: ${(props) => (props.$isSHow ? '1' : '0')};
  cursor: ${(props) => (props.$isSHow ? 'pointer' : 'auto')};
  transition: opacity 0.3s ease-in;
  display: ${(props) => (props.$notUsed ? 'none' : 'block')};
`;

function ToolTipContainer() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="198"
      height="68"
      viewBox="0 0 198 68"
      fill="none"
    >
      <g filter="url(#filter0_b_479_9606)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M162.866 0.5C162.481 -0.166667 161.519 -0.166666 161.134 0.5L156.804 8H4C1.79086 8 0 9.79086 0 12V64C0 66.2091 1.79087 68 4 68H194C196.209 68 198 66.2091 198 64V12C198 9.79086 196.209 8 194 8H167.196L162.866 0.5Z"
          fill="#232323"
          fillOpacity="0.9"
        />
      </g>

      <path
        d="M172.25 23.25L179.75 30.75"
        stroke="#F6F3F2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ cursor: 'pointer' }}
      />
      <path
        d="M172.25 30.75L179.75 23.25"
        stroke="#F6F3F2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_479_9606"
          x="-4"
          y="-4"
          width="206"
          height="76"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_479_9606"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_479_9606"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

function ToolTip() {
  const [showTooltip, setShowTooltip] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 10000);
  };

  const stopTimer = () => {
    clearTimeout(timerRef.current);
    setShowTooltip(false);
  };

  useEffect(() => {
    const handleClick = () => {
      setShowTooltip(false);
      stopTimer();
      startTimer();
    };
    startTimer();

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation().pathname;
  const pathnameList = location.split('/').slice(2);
  const [titlePathName, _] = pathnameList;

  return (
    <ToolTipWrap $notUsed={titlePathName === 'complete'} $isSHow={showTooltip}>
      <ToolTipContainer />
      <span>
        다른 시승자의 리얼한 후기가 <br />
        궁금하다면?
      </span>
    </ToolTipWrap>
  );
}
export default ToolTip;
