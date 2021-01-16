import React from 'react';
// import GlobalStyle from './styled/GlobalStyle';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
// estilos globales
import { GlobalStyle } from './styled/GlobalStyle';
// ruta
import { BrowserRouter as Router, Route } from 'react-router-dom';
// pantalla
import LandingPageScreen from './screen/LandingPageScreen';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route exact path='/' component={LandingPageScreen} />
      </Router>
    </>
  );
}

export default App;