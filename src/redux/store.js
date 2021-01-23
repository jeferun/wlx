import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import provincesDucks from './provincesDucks';
import registerDucks from './registerDucks';

const rootReducer = combineReducers({
  listProvinces: provincesDucks,
  registerUser: registerDucks,
});

// configurar extensión
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}

export default generateStore;
