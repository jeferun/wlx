import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import provincesReducer from './provincesDucks';
import registerReducer from './registerDucks';
import techReducer from './tech2Ducks';

const rootReducer = combineReducers({
  listProvinces: provincesReducer,
  registerUser: registerReducer,
  listTech: techReducer,
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
