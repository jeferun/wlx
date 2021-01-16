import React from 'react';
import styled from 'styled-components';
// componentes
import Navbar from '../components/landing_page/Navbar';
import Welcome from '../components/landing_page/Welcome';
import Woloxers from '../components/landing_page/Woloxers';
import Benefits from '../components/landing_page/Benefits';
import Info from '../components/landing_page/Info';
//imagenes
import FooterBackground from '../assets/Backgrounds/Bg_Footer@2x.png';
import HeaderBackground from '../assets/Backgrounds/Bg_Header@2x.png';

const Header = styled.section`
  background-image: url(${HeaderBackground});
  background-size: cover;
  padding: 72px 100px 0 100px;
  margin-bottom: 85px;
`;

const Footer = styled.section`
    background-image: url(${FooterBackground});
    background-size: cover;
    padding: 70px 100px 0 100px;
    height: auto;
    min-height: 500px;
    position: relative;
`;

export default function LandingPageScreen() {
  return (
    <>
      <Header>
        <Navbar />
        <Welcome />
      </Header>
      <section>
        <Woloxers />
        <Benefits />
      </section>
      <Footer>
        <Info />
      </Footer>
    </>
  );
}
