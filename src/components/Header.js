import React from "react";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";

function Header() {
  let lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <Container>
      <Paper>{lorem.repeat(5)}</Paper>
      <Wrap>
        <Title>
          <Bounce left cascade>
            Yoann Janssens
          </Bounce>
          <hr />
        </Title>
        <Bounce right cascade>
          <SubTitle>Infographiste & Webdesigner</SubTitle>
        </Bounce>
      </Wrap>
      {/* <Buttons>
        <Btn1>
        <a href="#"><span>Portfolio</span></a>
        </Btn1>
        <Btn2>
          <a href="#"><span>Galerie</span></a>
        </Btn2>
        <Btn3>
        <a href="#"><span>Real-Time</span></a>
        </Btn3>
        <Btn4>
        <a href="#"><span>Developpement</span></a>
        </Btn4>
      </Buttons> */}
      <Picture src="cv/src/assets/ui/u1.jpg" />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 9em;
  background-color: rgba(232, 231, 227, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.25)) sepia(0.1);
  z-index: 1000;

  @media (max-width: 500px) {
    height: 6em;
  }
`;

const Paper = styled.div`
  position: fixed;
  width: 100vw;
  height: 144px;
  top: 0;
  margin: 0;
  color: rgba(120, 120, 120, 0.1);
  letter-spacing: 0.5em;
  font-family: "Cinzel", serif;
  font-weight: 500;
  text-align: justify;
  font-size: 8px;
  background-color: transparent;
  z-index: 0;
  transition: 500ms linear;
  overflow: hidden;
  user-select: none;

  &:hover {
    font-size: 10px;
    letter-spacing: 0.75em;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.div`
  color: rgba(120, 120, 120, 0.9);
  letter-spacing: 0.5em;
  font-family: "Cinzel", serif;
  font-weight: 500;
  font-size: 32px;

  hr {
    margin-top: 0.25em;
    opacity: 0.75;
    margin-right: 0.75em;
    color: inherit;
    border-bottom: none;
    border-left: none;
    border-right: none;
    transform: scaleX(1.15) scaleY(2);
  }

  @media (max-width: 750px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 15px;    
    margin-right: 5em;
  }
`;

const SubTitle = styled(Title)`
  font-weight: 500;
  font-size: 10px;
  line-height: 0.1em;

  @media (max-width: 750px) {
    font-size: 8px;
  }

  @media (max-width: 500px) {
    margin-right: 9.5em;
  }
`;

const Picture = styled.img`
  position: fixed;
  right: 1em;
  width: 7em;
  height: 7em;
  border-radius: 50%;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));

  @media (max-width: 750px) {
    width: 5em;
    height: 5em;
  }

  @media (max-width: 500px) {
    width: 4em;
    height: 4em;
  }
`;

/*const Buttons = styled.div`
  position: absolute;
  top: 7.5em;
`;

 const Btn1 = styled.button`
  letter-spacing: 0.3em;
  font-family: "Rokkitt", serif;
  font-weight: 400;
  font-size: 0.75em;
  color: rgba(120, 120, 120, 0.85);
  background-color: transparent;
  border: none;
  margin: 0px 12px 0px 12px;
  cursor: pointer;

  span {
    padding: 0 15px;
  }
`;

const Btn2 = styled(Btn1)``;
const Btn3 = styled(Btn1)``;
const Btn4 = styled(Btn1)``; */
