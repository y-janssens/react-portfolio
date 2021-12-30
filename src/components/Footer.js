import React, { useState } from "react";
import styled from "styled-components";

function Footer() {
  let lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const [contactStatus, setContactStatus] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <Container>
      <More>
        <a href="https://www.yoann-janssens.fr/cv" target="blank">
          À propos
        </a>
      </More>
      <Ctc onClick={() => setContactStatus(true)}>Contact</Ctc>
      <Copyright>© Yoann Janssens 2021-2022 Tous droits réservés</Copyright>
      <Contact show={contactStatus}>
        <Paper>{lorem.repeat(5)}</Paper>
        <Title>
          <span>Me contacter</span>
          <hr />
          <Infos>
            <a href="https://www.linkedin.com/in/yoann-janssens-a83b09222/" alt=""><span>Yoann Janssens</span></a>
            <br />
            <a href="tel:0621414125"><span>06.21.41.41.25</span></a>
            <br />
            <a href="mailto: y.janssens@protonmail.com"><span>y.janssens@protonmail.com</span></a>
          </Infos>
          <Form>
          <Name placeholder="Nom" />
          <Email placeholder="E-mail" />
          <Message placeholder="Message" />
          <Send type="submit" onClick={handleSubmit}/>
          </Form>
        </Title>
        <Close onClick={() => setContactStatus(false)}>X</Close>
      </Contact>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 2em;
  border-top: 0.02em solid rgba(120, 120, 120, 0.25);
  background-color: #e8e7e3;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const More = styled.button`
  color: #77787b;
  font-size: 8px;
  letter-spacing: 0.2em;
  line-height: 2em;
  border: none;
  background-color: transparent;
  margin: 0px 60px 0px 60px;
  cursor: pointer;
`;

const Ctc = styled(More)``;

const Copyright = styled(More)`
  pointer-events: none;
`;

const Contact = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20em;
  height: 25em;
  border-radius: 10px;
  background-color: rgba(232, 231, 227, 1);
  box-shadow: rgb(0 0 0 / 25%) 0px 26px 30px -10px,
    rgb(0 0 0 / 50%) 0px 16px 10px -10px;
  overflow: hidden;
  display: ${(props) => (props.show ? "initial" : "none")};
`;

const Paper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  color: rgba(120, 120, 120, 0.1);
  letter-spacing: 0.5em;
  font-family: "Cinzel", serif;
  font-weight: 500;
  text-align: justify;
  font-size: 8px;
  background-color: transparent;
  transition: 500ms all;
  pointer-events: none;
`;

const Title = styled.div`
  margin-top: 10px;
  text-align: center;
  color: rgba(120, 120, 120, 0.9);
  font-family: "Rokkitt", serif;
  font-size: 16px;

  hr {
    width: 60%;
    opacity: 0.75;
    color: inherit;
    border-bottom: none;
    border-left: none;
    border-right: none;
    transform: scaleY(1.5);
  }
`;

const Close = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  color: #b84040bf;
  font-family: "Comic Neue", cursive;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Form = styled.form``;

const Infos = styled.div`
  color: rgba(120, 120, 120, 0.9);
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  line-height: 20px;
  font-family: "Rokkitt", serif;
  text-align: left;
  margin-left: 50px;
  margin-top: 20px;
  padding-bottom: 10px;
`;

const Name = styled.input`
  width: 70%;
  margin-top: 0.35em;
  margin-bottom: 0.35em;
  border-radius: 0.25em;
  padding: 0.75em;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  line-height: 10px;
  font-family: "Rokkitt", serif;
  color: rgba(120, 120, 120, 0.75);
  border: none;
  outline: none;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.15));

  ::placeholder {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    margin-left: 0.25em;
    color: rgba(120, 120, 120, 0.5);
    font-weight: 400;
    font-size: 0.7rem;
    letter-spacing: 0.25em;
    line-height: 10px;
    font-family: "Rokkitt", serif;
  }
`;

const Email = styled(Name)``;

const Message = styled(Name)`
  height: 115px;

  ::placeholder {
    position: absolute;
    top: 1.5em;
    margin-left: 0.25em;
    color: rgba(120, 120, 120, 0.5);
    font-weight: 400;
    font-size: 0.7rem;
    letter-spacing: 0.25em;
    line-height: 10px;
    font-family: "Rokkitt", serif;
  }
`;

const Send = styled(Name)`
  height: 35px;
  letter-spacing: 0.25em;
  background-color: #DCDBD7;
  border: none;
  border-radius: 0.25em;
  color: rgba(120, 120, 120, 0.9);
  box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 20%);
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.15));
  transition: 250ms all;
  cursor: pointer;

  &:hover {
    background-color: #D1D0CC;
  }
}`;
