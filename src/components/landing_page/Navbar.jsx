import React from 'react';
import styled from 'styled-components';
import LogoHeaderSvg from '../../assets/logo_full_color.svg';
import Button from '../../styled/Button';


const NavbarSection = styled.div`
  display: grid;
  grid-template-columns: auto 40%;
  align-items: center;
 
`;

const NavbarContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
`;

const NavUl = styled.ul`
  list-style-type: none;
  margin: 25px;
  padding: 0;
`;

const NavLi = styled.li`
  display: inline;
  margin: 0;
`;

const NavA = styled.a`
  color: #212121;
  text-decoration: none;
  font-size: 1.2em;
  margin-right: 3em;
`;

const LogoHeader = styled.img`
  width: 250px;
 
`;

const Navbar = () => (
  <NavbarSection>
    <LogoHeader src={LogoHeaderSvg} alt="Logo" />

    <NavbarContainer>
      <NavUl className="navbar-nav">
        <NavLi className="nav-item active">
          <NavA className="nav-link" href="#">
            <b className="font-h4">Inicio</b>
          </NavA>
          <NavA className="nav-link" href="#">
            <b className="font-h4">Beneficios</b>
          </NavA>
          <Button>
            <b>Registro</b>
          </Button>
        </NavLi>
      </NavUl>
    </NavbarContainer>
  </NavbarSection>
);

export default Navbar;
