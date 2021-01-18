import React from 'react';
import styled from 'styled-components';
import LogoFooterSvg from '../../assets/Ic_Wolox_Footer.svg';
import Button from '../../styled/Button';
import { WLX_PAGE_URL } from '../../config/constants';

const InfoContainer = styled.div`
  margin-top: 25px;
  align-items: center;
`;

const ImgContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  margin-bottom: 65px;
`;

const Info = () => (
  <InfoContainer className="center">
    <TextContainer>
      <b className="font-h1">
        Gracias por
        <span className="font-color-blue"> completar el ejercicio</span>
      </b>
      <div className="font-h3">Te invitamos a ver mas informaci&oacute;n</div>
    </TextContainer>

    <Button as="a" href={WLX_PAGE_URL} className="color" target='_blank'>
      Conocer m&aacute;s
    </Button>
    <ImgContainer>
      <img src={LogoFooterSvg} width="120" alt="Logo" />
    </ImgContainer>
  </InfoContainer>
);

export default Info;
