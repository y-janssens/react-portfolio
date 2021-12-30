import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <Background />

    </Container>
  );
}

export default Details;

const Container = styled.div`
  height: calc(100vh - 9em);
  width: 100vw;
  padding-top: 9em;
  overflow-x: hidden;
`;

const Background = styled(Container)`
position: fixed;
background-color: #dcdcdc;
background: url("/assets/ui/texture.jpg");
background-size: 100%;
background-repeat: no-repeat;
filter: grayscale(1) blur(3px) sepia(0.25);
opacity: 0.5;
overflow: hidden;
z-index: -1;
`;
