import React from 'react';
import styled from 'styled-components';
import WoloxerBackground from '../../assets/img_woloxer@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../styled/Button';
import { WLX_TWITTER_URL } from '../../config/constants';

const WoloxersContainer = styled.div`
  display: grid;
  grid-template-columns: 55% auto;

  @media only screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const WoloxerImgBackground = styled.div`
  position: relative;
  background-image: url(${WoloxerBackground});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  height: 550px;
  align-items: center;
`;

const WoloxerColorBackground = styled.div`
  background-color: #f2f5fa;;
  height: 550px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const Woloxers = () => (
  <WoloxersContainer>
    <WoloxerImgBackground className="center">
      <div className="font-h1">
        <b className="font-bold">
          <span className="font-color-green">350 + </span>
          <span className="font-color-blue">Woloxers</span>
        </b>
      </div>
      <IconContainer>
        <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" color="white" />
        <span className="font-h4 font-color-white">@Wolox</span>
      </IconContainer>
      <Button url={WLX_TWITTER_URL} backgroundColor="trasparent">
        Siguenos
      </Button>
    </WoloxerImgBackground>

    <WoloxerColorBackground className="center">
      <div className="font-h2">
        <div>Trabajamos para </div>
        <span className="font-color-blue">
          <b className="font-bold">convertir</b>
        </span>
        <span className="font-color-green">
          <b className="font-bold">ideas</b>
        </span>
        en
        <div>productos</div>
      </div>
    </WoloxerColorBackground>
  </WoloxersContainer>
);

export default Woloxers;
