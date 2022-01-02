import React from "react";
import styled from "styled-components";
import Bounce from 'react-reveal/Bounce';

function Real() {
  return (
    <Container>
      <Title>
      <Bounce left cascade>
        3D Temps Réel
        </Bounce>
        <hr />
      </Title>
      <Content>
        <Wrap>
          <a href="https://www.yoann-janssens.fr/cv/site/3D/index.html" target="blank" alt=""><img src="cv/src/assets/showcase/real1.jpg" alt="" /></a>
        </Wrap>
        <Wrap>
        <a href="https://www.yoann-janssens.fr/cv/site/Remparts/index.html" target="blank" alt=""><img src="cv/src/assets/showcase/real2.jpg" alt="" /></a>
        </Wrap>
        <Wrap>
        <a href="https://www.yoann-janssens.fr/cv/site/Herse/index.html" target="blank" alt=""><img src="cv/src/assets/showcase/img6.jpg" alt="" /></a>
        </Wrap>
        <Wrap>
        <a href="https://www.yoann-janssens.fr/cv/site/space/index.html" target="blank" alt=""><img src="cv/src/assets/showcase/img10.jpg" alt="" /></a>
        </Wrap>
        {/* <Wrap>
          <img src="cv/src/assets/showcase/img.jpg" alt="" />
        </Wrap> */}
      </Content>
    </Container>
  );
}

export default Real;

const Container = styled.div``;

const Title = styled.div`
  color: rgba(120, 120, 120, 0.9);
  letter-spacing: 0.5em;
  font-family: "Cinzel", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 22px;
  margin: 50px;
  transition: 500ms all;

  hr {
    margin-top: 5px;
    color: inherit;
    border-bottom: none;
    border-left: none;
    border-right: none;
    opacity: 0.75;
    transform: scaleY(1.25);
  }

  &:hover {
      letter-spacing: 30px;
  }

  @media (max-width: 750px) {
    font-size: 18px;

    &:hover {
      letter-spacing: 20px;
    }
  }

  @media (max-width: 350px) {
    font-size: 10px;
    margin: 50px 50px -20px 50px;

    &:hover {
      letter-spacing: 0.5em;
    }
  }
`;

const Content = styled.div`
  margin: 50px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 750px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));    
    grid-gap: 40px;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 30px;
  }
`;

const Wrap = styled.div`
  height: 20vh;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 25%) 0px 26px 30px -10px,
    rgb(0 0 0 / 50%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    display: flex;
    align-items: center;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 1500px) {
    height: 33vh;
  }
  
  @media (max-width: 750px) {
    height: 10vh;
  } 
`;
