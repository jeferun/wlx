import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// // componentes
import Navbar from '../components/landing_page/Navbar';
import Welcome from '../components/landing_page/Welcome';
import Woloxers from '../components/landing_page/Woloxers';
import Benefits from '../components/landing_page/Benefits';
import Info from '../components/landing_page/Info';
// //imagenes
import FooterBackground from '../assets/Backgrounds/Bg_Footer@2x.png';
import HeaderBackground from '../assets/Backgrounds/Bg_Header@2x.png';

const Header = styled.header`
  background-image: url(${HeaderBackground});
  background-size: cover;
  padding: 7rem 5rem 0 5rem;
  margin-bottom: 85px;

  @media only screen and (max-width: 780px) {
    padding: 2px 8px 0 8px !important;
    margin-top: 6rem;
  }
`;

const Footer = styled.footer`
    background-image: url(${FooterBackground});
    background-size: cover;
    padding: 70px 100px 0 100px;
    height: auto;
    min-height: 500px;
    position: relative;

  @media only screen and (max-width: 690px) {
    padding: 2px 8px 0 8px !important;
  }
`;

const LandingPageScreen = ({ history }) => {
  return (
    <>
      <Header>
        <Navbar history={history} />
        <Welcome />
      </Header>
      <main>
        <Woloxers />
        <Benefits />
      </main>
      <Footer>
        <Info />
      </Footer>
    </>
  );
};

LandingPageScreen.propTypes = {
  history: PropTypes.object.isRequired,
};

export default LandingPageScreen;