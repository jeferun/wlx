import React from 'react';
import styled, { keyframes } from 'styled-components';
import WelcomeImg from '../../assets/ImgHero/Ic_ilustra_Hero@2x.png';

const WelcomeContainer = styled.section`
  display: grid;
  grid-template-columns: 60% auto;

  text-align: initial;
  padding: 70px 0px;

  @media only screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const TextsContainer = styled.div`
  margin-top: 10%;

  @media only screen and (max-width: 780px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const appear = keyframes`
  100% {
    opacity: 1;
  }
`;

const ImgWelcome = styled.img`
  height: 28vw;
  transform: scaleX(-1);

  transition: 1s;
	opacity: 0;
	animation: 1s ${appear} 0.5s forwards;

  @media only screen and (max-width: 780px) {
    height: 25rem;
  }

  @media only screen and (max-width: 320px) {
    height: 18rem;
    margin-left: 0px;
  }

`;

const Welcome = () => (
  <WelcomeContainer id="welcome">
    <TextsContainer className="font-h2">
      <div>Bienvenido a tu</div>
      <div>
        <b> Entrevista T&eacute;cnica </b>en
        </div>
      <span className="font-color-green">
        <b className="font-bold">Wolox</b>
      </span>
    </TextsContainer>

    <div>
      <ImgWelcome src={WelcomeImg} alt="Welcome" />
    </div>
  </WelcomeContainer>
);

export default Welcome;
