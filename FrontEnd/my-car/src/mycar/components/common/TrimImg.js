import { styled } from 'styled-components';

const ImgContainer = styled.div`
  width: 620px;
  height: 400px;
  flex-shrink: 0;
  background-color: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: transparent;
  /* background-color: beige; */
  img {
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
