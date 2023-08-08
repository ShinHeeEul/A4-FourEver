import { styled } from 'styled-components';
import { Container } from './Trim';
import { LeftWrap, OptionImgWrap, RightWrap } from './Engine';
import TitlePriceTag from '../components/TitlePriceTag';
import MandatoryCard from '../components/MandatoryCard';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { bodyTypeInfo } from '../../constant';
import ImgSelect from '../components/ImgSelect';
import { SelectedIndex } from '../util/SelectedIndex';

const BodyTypeContainer = styled(Container)`
  flex-direction: row;
  gap: 40px;
`;
function BodyType() {
  const { setUserCar, userCar, page } = useOutletContext();
  const [selected, setSelected] = useState(
    SelectedIndex({
      userOptionID: userCar.bodyType?.id || bodyTypeInfo[0].id,
      optionInfo: bodyTypeInfo,
    }),
  );
  const [imgSelected, setImgSelected] = useState(0);
  const setEngineOption = ({ selectOption, index }) => {
    const Price = [...userCar.price];
    Price[page] = parseInt(selectOption.price.replace(/,/g, ''), 10);
    setUserCar((prevState) => ({
      ...prevState,
      bodyType: selectOption,
      price: Price,
    }));
    setSelected(index || 0);
  };

  useEffect(() => {
    setImgSelected(0);
  }, [selected]);

  useEffect(() => {
    if (!userCar.bodyType?.id) {
      setEngineOption({ selectOption: bodyTypeInfo[0] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BodyTypeContainer>
      <LeftWrap style={{ position: 'relative' }}>
        <ImgSelect
          selected={selected}
          setImgSelected={setImgSelected}
          imgSelected={imgSelected}
        />
        <OptionImgWrap>
          <img src={bodyTypeInfo[selected].src[imgSelected]} alt="car" />
        </OptionImgWrap>
        <TitlePriceTag selectedOption={bodyTypeInfo[selected]} />
      </LeftWrap>
      <RightWrap>
        {bodyTypeInfo.map((option, index) => (
          <MandatoryCard
            key={index}
            index={index}
            isActive={selected === index}
            clickHandler={setEngineOption}
            option={option}
          />
        ))}
      </RightWrap>
    </BodyTypeContainer>
  );
}
export default BodyType;
