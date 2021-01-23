import { PROVINCES } from '../config/constants';

const initialProvinces = [...PROVINCES];
// state initial
const initialData = {
  provinces: [],
};

// constatntes
const GET_PROVINCES = 'GET_PROVINCES';

// reducer
function provincesReducer(state = initialData, action) {
  switch (action.type) {
    case GET_PROVINCES:
      return {
        ...state,
        provinces: action.payload,
      };
    default:
      return state;
  }
}

//acciones
export const getProvinces = (idCountrie) => (dispatch) => {
  let newProvinces = initialProvinces[idCountrie];
  dispatch({
    type: GET_PROVINCES,
    payload: newProvinces,
  });
};

export default provincesReducer;
