import { styled } from 'styled-components';
import palette from '../../../style/styleVariable';

const ImgContainer = styled.div`
  width: 700px;
  height: 404px;
  flex-shrink: 0;
  background-color: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: transparent;

  img {
    border-radius: 8px;
    border: 2px solid ${palette.LightSand};
    width: 600px;
    height: 400px;
  }
`;

function TrimImg({ src }) {
  return (
    <ImgContainer>
      <img alt="trim" src={src} />
    </ImgContainer>
  );
}
export default TrimImg;
