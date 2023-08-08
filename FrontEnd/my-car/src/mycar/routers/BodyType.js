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
    SelectedIndex({ userOption: userCar.bodyType, optionInfo: bodyTypeInfo }),
  );
  const [imgSelected, setImgSelected] = useState(0);
  const setEngineOption = (index) => {
    const Price = [...userCar.price];
    Price[page] = parseInt(bodyTypeInfo[index].price.replace(/,/g, ''), 10);
    setUserCar((prevState) => ({
      ...prevState,
      bodyType: bodyTypeInfo[index],
      price: Price,
    }));
  };

  const optionClick = (optionId) => {
    setSelected(optionId);
    setEngineOption(optionId);
  };

  useEffect(() => {
    setImgSelected(0);
  }, [selected]);

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
            id={index}
            isActive={selected === index}
            clickHandler={optionClick}
            option={option}
          />
        ))}
      </RightWrap>
    </BodyTypeContainer>
  );
}
export default BodyType;
