import React from "react";
import styled from "styled-components";
import Bounce from 'react-reveal/Bounce';

function Dev() {
  
  return (
    <Container>
      <Title>
      <Bounce left cascade>
        <div id="dev">Web & Developpement</div>
        </Bounce>
        <hr />
      </Title>
      <Content>
        <Wrap>
          <video src="cv/src/assets/videos/capture1.mp4" />
        </Wrap>
        <Wrap>
          <video src="cv/src/assets/videos/capture2.mp4" />
        </Wrap>
        <Wrap>
          <img src="cv/src/assets/showcase/dev1.jpg" alt=""/>
        </Wrap>
        <Wrap>
        <a href="cv/src/assets/links/clock" target="blank" alt=""><img src="cv/src/assets/showcase/img11.jpg" alt=""/></a>
        </Wrap>
        <Wrap>
          <img src="cv/src/assets/showcase/img.jpg" alt=""/>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Dev;

const Container = styled.div`
padding-bottom: 2em;
`;

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
`;

const Content = styled.div`
  margin: 50px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 25%) 0px 26px 30px -10px,
    rgb(0 0 0 / 50%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img, video {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    display: flex;
    align-items: center;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
