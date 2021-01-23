import React from 'react';
// estilos globales
import { GlobalStyle } from './styled/GlobalStyle';
//iconos
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
//redux
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import Router from './router/Router';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  );
}

export default App;