import { getListTechApi } from '../api/tech';

let localFavoriteTech =
  localStorage.getItem('favoriteTech') ?
    JSON.parse(localStorage.getItem('favoriteTech'))
    : {};
// state initial
const initialData = {
  list: [],
  filterList: [],
  favorites: localFavoriteTech,
  countFavorites: localStorage.getItem('countFavorites') ?? 0
};

// constatntes
const GET_LIST_TECH_OK = 'GET_LIST_TECH_OK';
const GET_LIST_TECH_ERROR = 'GET_LIST_TECH_ERROR';
const GET_FILTER_LIST_TECH = 'GET_FILTER_LIST_TECH';
const FAVORITES_LIST_TECH = 'FAVORITES_LIST_TECH';

// reducer
function techReducer(state = initialData, action) {
  switch (action.type) {
    case GET_LIST_TECH_OK:
      return {
        ...state,
        list: action.payload,
        filterList: action.payload,
      };
    case GET_LIST_TECH_ERROR:
      return { ...state, error: action.payload };
    case GET_FILTER_LIST_TECH:
      return {
        ...state,
        filterList: action.payload,
      };
    case FAVORITES_LIST_TECH:
      return {

        ...state,
        favorites: action.payload[0],
        countFavorites: action.payload[1]
      };
    default:
      return state;
  }
}

//acciones
export const getListTech = () => async (dispatch) => {
  const listTech = await getListTechApi();

  if (listTech) {
    dispatch({
      type: GET_LIST_TECH_OK,
      payload: listTech,
    });
  } else {
    dispatch({
      type: GET_LIST_TECH_ERROR,
      payload: 'Problemas al realizar la petición',
    });
  }
};

// add list filetr
export const getFilterListTech = (list) => (dispatch) => {
  dispatch({
    type: GET_FILTER_LIST_TECH,
    payload: list,
  });
};

// add favorites
export const setFavorites = (key, status, countFavorite) => (dispatch, getState) => {
  let initialFavorite = getState().listTech.favorites;
  let newFavorites = {
    ...initialFavorite,
    [`${key}`]: status
  };
  let newCountFavorite = status ? countFavorite + 1 : countFavorite - 1;

  dispatch({
    type: FAVORITES_LIST_TECH,
    payload: [newFavorites, newCountFavorite],
  });

  localStorage.setItem('favoriteTech', JSON.stringify(newFavorites));
  localStorage.setItem('countFavorites', newCountFavorite);
};

export default techReducer;
