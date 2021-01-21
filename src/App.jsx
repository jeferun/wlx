import React, { useState } from 'react';
// import GlobalStyle from './styled/GlobalStyle';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
// estilos globales
import { GlobalStyle } from './styled/GlobalStyle';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// constamtes de las rutas
import { PATH } from './config/constants';
// pantallas
import LandingPageScreen from './screen/LandingPageScreen';
import RegisterScreen from './screen/RegisterScreen';
import TermsScreen from './screen/TermsConditionsScreen';

library.add(fab, faCheckSquare, faCoffee);

function App() {

  const [isUserAuth, setIsUserAuth] = useState(false);
  console.log(setIsUserAuth);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route
          exact
          path="/">
          <Redirect to={PATH.HOME} />
        </Route>
        <Route
          exact
          path={PATH.LIST_TECH}
          render={() => {
            return (
              !isUserAuth ?
                <Redirect to={PATH.REGISTER} /> :
                <Redirect to={PATH.LIST_TECH} />
            );
          }}
        />
        <Route
          exact
          path={PATH.REGISTER}
          render={() => {
            return (
              !isUserAuth ?
                <Redirect to={PATH.REGISTER} /> :
                <Redirect to={PATH.LIST_TECH} />
            );
          }}
        />
        <Route exact path={PATH.HOME} component={LandingPageScreen} />
        <Route exact path={PATH.REGISTER} component={RegisterScreen} />
        <Route exact path={PATH.LIST_TECH} component={RegisterScreen} />
        <Route exact path={PATH.TERMS} component={TermsScreen} />
      </Router>
    </>
  );
}

export default App;