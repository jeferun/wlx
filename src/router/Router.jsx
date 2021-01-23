import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// constamtes de las rutas
import { PATH } from '../config/constants';
import Loading from '../styled/Loading';
// pantallas
const LandingPageScreen = lazy(() => import('../screen/LandingPageScreen'));
const RegisterScreen = lazy(() => import('../screen/RegisterScreen'));
const TermsScreen = lazy(() => import('../screen/TermsConditionsScreen'));
const ListTechScreen = lazy(() => import('../screen/ListTechScreen'));

export default function Router() {
  const { isUserAuth } = useSelector(({ registerUser }) => registerUser);


  const routeAuth = () => (
    !isUserAuth ?
      <Redirect to={PATH.REGISTER} /> :
      <Redirect to={PATH.LIST_TECH} />
  );

  return (
    <>
      <BrowserRouter>
        <Route
          exact
          path="/">
          <Redirect to={PATH.HOME} />
        </Route>
        <Route
          exact
          path={PATH.LIST_TECH}
          render={() => routeAuth()}
        />
        <Route
          exact
          path={PATH.REGISTER}
          render={() => routeAuth()}
        />

        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={PATH.HOME} component={LandingPageScreen} />
            <Route exact path={PATH.REGISTER} component={RegisterScreen} />
            <Route exact path={PATH.TERMS} component={TermsScreen} />
            <Route exact path={PATH.LIST_TECH} component={ListTechScreen} />

            <Redirect to={PATH.HOME} />
          </Switch>
        </Suspense>

      </BrowserRouter>
    </>
  );
}


