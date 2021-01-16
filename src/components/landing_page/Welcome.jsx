import React from 'react';
import styled from 'styled-components';
import WoloxerImg from '../../assets/ImgHero/Ic_ilustra_Hero@2x.png';

const WelcomeContainer = styled.div`
  display: grid;
  grid-template-columns: 60% auto;

  text-align: initial;
  padding: 70px 0px;
`;

const Texts = styled.div`
  margin-top: 10%;
`;

const Img = styled.img`
  height: auto;
  transform: scaleX(-1);
  max-height: 78vh;
`;

const Welcome = () => (
  <WelcomeContainer>
    <Texts>
      <div className="font-h2">
        <div>Bienvenido a tu</div>
        <div>
          <b> Entrevista T&eacute;cnica </b>en
        </div>
        <span className="font-color-green">
          <b className="font-bold">Wolox</b>
        </span>
      </div>
    </Texts>

    <div>
      <Img src={WoloxerImg} alt="Woloxer" />
    </div>
  </WelcomeContainer>
);

export default Welcome;
