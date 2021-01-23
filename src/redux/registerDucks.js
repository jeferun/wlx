import { registerUser } from '../api/user';

localStorage.getItem('token');
localStorage.getItem('user');

// state initial
const initialData = {
  user: localStorage.getItem('user') ?? {},
  token: localStorage.getItem('token') ?? null,
  isUserAuth: localStorage.getItem('token') && true,
  error: ''
};

// constatntes
const USER_AUTH_OK = 'USER_AUTH_OK';
const USER_AUTH_ERROR = 'USER_AUTH_ERROR';

// reducer
function registerReducer(state = initialData, action) {
  switch (action.type) {
    case USER_AUTH_OK:
      return {
        ...state,
        token: action.payload[0],
        user: action.payload[1],
        isUserAuth: action.payload[2],
      };
    case USER_AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

//acciones
export const setDataUser = (userData) => async (dispatch) => {
  let result = await registerUser(userData);
  let token = result.token;

  if (token) {
    dispatch({
      type: USER_AUTH_OK,
      payload: [token, userData, true]
    });

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));

  } else {
    dispatch({
      type: USER_AUTH_ERROR,
      payload: result.error,
    });
  }
};

export const logout = (history) => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  dispatch({
    type: USER_AUTH_OK,
    payload: [null, {}, false]
  });

  history.push('/');
};

export default registerReducer;
