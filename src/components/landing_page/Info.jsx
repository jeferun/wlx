import React from 'react';
import styled from 'styled-components';
import LogoFooterSvg from '../../assets/Ic_Wolox_Footer.svg';
import Button from '../../styled/Button';
import { WLX_PAGE_URL } from '../../config/constants';

const InfoContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.img`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  margin-bottom: 65px;
`;

const Info = () => (
  <InfoContainer>
    <TextContainer>
      <b className="font-h1">
        Gracias por
        <span className="font-color-blue"> completar el ejercicio</span>
      </b>
      <div className="font-h3">Te invitamos a ver mas informaci&oacute;n</div>
    </TextContainer>

    <Button url={WLX_PAGE_URL} backgroundColor="color">
      Conocer m&aacute;s
    </Button>
    <ImgContainer src={LogoFooterSvg} width="120" alt="Logo" />
  </InfoContainer>
);

export default Info;
