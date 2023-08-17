import { styled } from 'styled-components';
import { Container } from './Model';
import { LeftWrap, OptionImgWrap, RightWrap } from './Engine';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MYCAR } from '../../constant';
import TrimImg from '../components/TrimImg';
import { useSelect } from '../useSelect';

const BodyTypeContainer = styled(Container)`
  flex-direction: row;
  gap: 40px;
`;

function BodyType() {
  const { setUserCar, userCar, trimOptions, page } = useOutletContext();
  const [imgSelected, setImgSelected] = useState(0);

  const bodyTypeOptions = trimOptions[MYCAR.TRIM.FILED.BODY];

  const [selected, setSelectedOption] = useSelect({
    setUserCar,
    userCar,
    option: bodyTypeOptions,
    field: 'bodyType',
    page,
  });

  return (
    <BodyTypeContainer>
      <LeftWrap style={{ position: 'relative' }}>
        {/* <ImgSelect
          selected={selected}
          setImgSelected={setImgSelected}
          imgSelected={imgSelected}
        /> */}
        <TrimImg src={bodyTypeOptions[selected].image} />

        <TitlePriceTag selectedOption={bodyTypeOptions[selected]} />
      </LeftWrap>
      <RightWrap>
        {bodyTypeOptions.map((option, index) => (
          <MandatoryCard
            key={index}
            index={index}
            isActive={selected === index}
            clickHandler={setSelectedOption}
            option={option}
          />
        ))}
      </RightWrap>
    </BodyTypeContainer>
  );
}
export default BodyType;
