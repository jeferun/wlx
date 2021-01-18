import React from 'react';
import styled, { keyframes } from 'styled-components';
import LogoHeaderSvg from '../../assets/logo_full_color.svg';
import Button from '../../styled/Button';


const NavbarSection = styled.div`
  padding: 3rem 5rem 0 5rem;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;

  display: grid;
  grid-template-columns: auto 40%;
  align-items: center;

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media only screen and (max-width: 360px) {
    padding: 5px !important;
  }

`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavLi = styled.li`
  display: inline;
  margin: 0;
`;

const NavA = styled.a`
  color: #212121;
  text-decoration: none;
  margin-right: 3rem;

  @media only screen and (max-width: 950px) {
    margin-right: 8px;
  }
`;

const shake = keyframes`
  from    { transform: rotate(0deg); }
  4%      { transform: rotate(5deg); }
  12.5%   { transform: rotate(-5deg); }
  21%     { transform: rotate(5deg); }
  29%     { transform: rotate(-5deg); }
  37.5%   { transform: rotate(5deg); }
  46%     { transform: rotate(-5deg); }
  50%,to  { transform: rotate(0deg); }
`;


const LogoHeader = styled.img`
  width: 250px;

  animation: 2s ${shake} 1s forwards;
  ${'' /* animation: ${shake} 2s ease 0s infinite; */}
  ${'' /* animation-play-state: paused; */}

  @media only screen and (max-width: 950px) {
    width: 400px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 360px) {
    width: 200px;
    margin-bottom: 20px;
  }
`;

const Navbar = () => (
  <NavbarSection>
    <LogoHeader src={LogoHeaderSvg} alt="Logo" />

    <NavbarContainer>
      <NavUl className="navbar-nav">
        <NavLi className="nav-item active">
          <NavA className="nav-link font-h4" href="#Welcome">
            Inicio
          </NavA>
          <NavA className="nav-link font-h4" href="#benefits">
            Beneficios
          </NavA>
          <Button to="/Register" className="default">
            <b className='font-bold font-h4'>Registro</b>
          </Button>
        </NavLi>
      </NavUl>
    </NavbarContainer>
  </NavbarSection>
);

export default Navbar;
