import React from 'react';
import styled from 'styled-components';
//svg
import HourSvg from '../../assets/Ic_Hour.svg';
import HomeOfficeSvg from '../../assets/Ic_HomeOffice.svg';
import WorkshopsSvg from '../../assets/Ic_Workshops.svg';
import DrinkSnacksSvg from '../../assets/Ic_DrinkSnacks.svg';
import LaptopSvg from '../../assets/Ic_laptop.svg';
import BrainSvg from '../../assets/Ic_brain.svg';
//componente con estilos
import Hr from '../../styled/Hr';

const BenefitsContainer = styled.section`
  padding: 120px 0px 20px;
`;

const BenefitsItem = styled.div`
  margin: 40px;
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(6, 1.1fr);
  grid-gap: 1rem;
  grid-row-gap: 1em;

  @media only screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 1.5fr);
  }

  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    font-size: 200px;
  }
`;

const ImgBenefits = styled.img`
  margin-bottom: 25px;
`;

const LaptopContainer = styled.div`
  padding: 20px;
`;

const Benefits = () => (
  <BenefitsContainer id="benefits" className="center">
    <b className="font-h3">
      Entre los beneficios que ofrecemos se encuentran
      <span className="font-color-blue"> </span>
    </b>
    <BenefitsItem className="font-h4">
      <div>
        <ImgBenefits src={HourSvg} alt="Hour" />
        <p>Flexibilidad</p>
        <p>Horaria</p>
      </div>
      <div>
        <ImgBenefits src={HomeOfficeSvg} alt="HomeOffice" />
        <p>Home Office</p>
      </div>
      <div>
        <ImgBenefits src={WorkshopsSvg} alt="Workshops" />
        <p>Capacitaciones </p> <p>y workshops</p>
      </div>
      <div>
        <ImgBenefits src={DrinkSnacksSvg} alt="DrinkSnacks" />
        <p>Snacks, frutas </p> <p> y bebidas gratis</p>
      </div>
      <LaptopContainer>
        <ImgBenefits src={LaptopSvg} alt="Laptop" />
        <p>Semana </p> <p> Remota</p>
      </LaptopContainer>
      <div>
        <ImgBenefits src={BrainSvg} alt="Brain" />
        <p>Trabajar </p> <p> en ultimas </p> <p> tecnolog&iacute;as</p>
      </div>
    </BenefitsItem>
    <Hr />
  </BenefitsContainer>
);

export default Benefits;
