import React from "react";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";

function Galery() {
  return (
    <Container>
      <Title>
        <Bounce left cascade>
          Galerie
        </Bounce>
        <hr />
      </Title>
      <Content>
        <Wrap>
          <a href="img0">
            <img src="cv/src/assets/showcase/img1.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="img1">
            <img src="cv/src/assets/showcase/img2.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="img2">
            <img src="cv/src/assets/showcase/img3.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="img3">
            <img src="cv/src/assets/showcase/img4.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="img4">
            <img src="cv/src/assets/showcase/img5.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="img5">
            <img src="cv/src/assets/showcase/img6.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="img6">
            <img src="cv/src/assets/showcase/img7.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="img7">
            <img src="cv/src/assets/showcase/img8.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="img8">
            <img src="cv/src/assets/showcase/img9.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="img9">
            <img src="cv/src/assets/showcase/img10.jpg" alt="" />
          </a>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Galery;

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
