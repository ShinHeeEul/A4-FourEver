import { styled } from 'styled-components';

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    height: 380px;
  }
`;

function TrimModelImg({ src }) {
  return (
    <ImgContainer>
      <img alt="trim-model" src={src} />
    </ImgContainer>
  );
}
export default TrimModelImg;
