import React from "react";
import { useParams } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce';
import styled from "styled-components";
import videos from "./data_v";

function Details2() {
  const { id } = useParams();
   
  return (
    <Container>
      <Background />
      <Maintitle>
      <Bounce left cascade>
        <a href="/">&#60; Accueil</a>
        </Bounce>
        <hr />
      </Maintitle>
      <Wrap>
      <video src={"cv/src/assets/videos/capture" + videos[id].id + ".mp4"} width="100%" height="100%" preload="auto" controls="true"/>
        <Description>
          <Title>{videos[id].title}</Title>
          <Desc>{videos[id].description}</Desc>

          <Soft>Langages et bibliothèques utilisés</Soft>
          <Desc>
            {videos[id].software[0]}<br/>
            {videos[id].software[1]}<br/>
            {videos[id].software[2]}<br/>
            {videos[id].software[3]}<br/>
            {videos[id].software[4]}<br/>
            {videos[id].software[5]}<br/>
          </Desc>
        </Description>
      </Wrap>
    </Container>
  );
  
}

export default Details2;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  padding-top: 9em;
  z-index: 100;
`;

const Background = styled(Container)`
  position: fixed;
  background-color: #dcdcdc;
  background: url("/cv/src/assets/ui/texture.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  filter: contrast(1.5) grayscale(1) sepia(0.5) brightness(0.75) blur(3px);
  opacity: 0.5;
  overflow: hidden;
  z-index: -1;
`;

const Maintitle = styled.div`
  position: fixed;
  top: 10em;
  left: -1em;
  color: rgba(120, 120, 120, 0.9);
  letter-spacing: 0.5em;
  font-family: "Cinzel", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
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
      letter-spacing: 15px;
  }

  @media (max-width: 500px) {
    top: 11em;
    font-size: 12px;
  }
`;

const Wrap = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 80%;
  max-height: 80%;
  transform: translate(-50%, calc(-50% - 1em));
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 25%) 0px 26px 30px -10px,
    rgb(0 0 0 / 50%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: 250ms linear;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
    align-items: center;
  }
`;

const Description = styled(Wrap)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 1000%;
  margin-top: 1em;
  color: #a69c7c;
  opacity: 0;
  font-family: 'Share Tech Mono', monospace;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
  }
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  padding-top: 0.5em;
  padding-bottom: 1.5em;
`;

const Desc = styled.span`
  display: flex;
  justify-content: right;
  font-size: 0.7rem;
  text-align: right !important;
  line-height: 200%;
  padding-left: 50%;
  padding-right: 0.8em;
  padding-bottom: 0.8em;
`;

const Soft = styled.span`
  display: flex;
  justify-content: right;
  font-size: 0.9rem;
  padding-right: 0.8em;
  line-height: 300%;
`;
