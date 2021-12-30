import React from "react";
import styled from "styled-components";
import Slides from "./Slides";
import Galery from "./Galery";
import Real from "./Real";
import Dev from "./Dev";


function Home() {
  return (
    <Container>
      <Background />
      <Slides />
      <Galery />
      <Real />
      <Dev />      
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: calc(100vh - 9em);
  width: 100vw;
  padding-top: 9em;
  overflow-x: hidden;
`;

const Background = styled(Container)`
position: fixed;
background-color: #dcdcdc;
background: url("/cv/src/assets/ui/texture.jpg");
background-size: 100%;
background-repeat: no-repeat;
filter: contrast(1.5) grayscale(1) sepia(0.5) brightness(0.75) blur(3px);
opacity: 0.5;
overflow: hidden;
z-index: -1;
`;