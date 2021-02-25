import { getListTechApi } from '../api/tech';
import { createSelector } from 'reselect';

let localFavoriteTech =
  localStorage.getItem('favoriteTech') ?
    JSON.parse(localStorage.getItem('favoriteTech'))
    : {};

// state initial
const initialType = 'All';
const initialOrderBy = 'ASC';
const initialData = {
  list: [],
  filterList: [],
  nameFilter: '',
  typeFilter: initialType,
  orderBy: initialOrderBy,
  orderColumn: 'tech',
  favorites: localFavoriteTech,
  countFavorites:
    localStorage.getItem('countFavorites') ?
      parseInt(localStorage.getItem('countFavorites')) :
      0
};

// constatntes
const GET_LIST_TECH_OK = 'GET_LIST_TECH_OK';
const GET_LIST_TECH_ERROR = 'GET_LIST_TECH_ERROR';
const FILTER_LIST_TECH = 'FILTER_LIST_TECH';
const SET_NAME_FILTER = 'SET_NAME_FILTER';
const SET_TYPE_FILTER = 'SET_TYPE_FILTER';
const SET_ORDER_LIST = 'SET_ORDER_LIST';
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
      return {
        ...state,
        error: action.payload
      };
    case FILTER_LIST_TECH:
      return {
        ...state,
        filterList: action.payload,
      };
    case SET_NAME_FILTER:
      return {
        ...state,
        nameFilter: action.payload,
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        typeFilter: action.payload,
      };
    case SET_ORDER_LIST: {
      const { orderBy, orderColumn } = action.payload;
      return {
        ...state,
        orderBy,
        orderColumn,
      };
    }
    case FAVORITES_LIST_TECH:
      return {
        ...state,
        favorites: action.payload.favorites,
        countFavorites: action.payload.countFavorites
      };
    default:
      return state;
  }
}

// selector
const selectList = state => state.listTech.list;
const selectOrderBy = state => state.listTech.orderBy;
const selectOrderColumn = state => state.listTech.orderColumn;
const selectNameFilter = state => state.listTech.nameFilter;
const selectTypeFilter = state => state.listTech.typeFilter;

export const selectFilter = createSelector(
  [selectNameFilter, selectTypeFilter, selectList],
  (name, type, list) => {
    list = list.filter((l) => l.type === type || initialType === type);
    list = list.filter((l) => l.tech.toLowerCase().includes(name.toLowerCase()));
    return list;
  }
);

export const selectOrder = createSelector(
  [selectFilter, selectOrderBy, selectOrderColumn],
  (listFilter, order, column) => {
    console.log(column);
    listFilter.sort(function (a, b) {
      const itemA = a[column].toLowerCase();
      const itemB = b[column].toLowerCase();

      return itemA < itemB ? -1 : itemA > itemB ? 1 : 0;
    });

    if (order !== initialOrderBy) {
      return listFilter.reverse();
    }

    return [...listFilter];
  }
);

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

// otra forma de crear acciones
export const setNameFilter = payload => ({
  type: SET_NAME_FILTER,
  payload
});

export const setTypeFilter = payload => ({
  type: SET_TYPE_FILTER,
  payload
});

export const updateOrder = (column) => (dispatch, getState) => {
  const order = getState().listTech.orderBy;
  dispatch({
    type: SET_ORDER_LIST,
    payload: {
      orderBy: order === initialOrderBy ? 'DESC' : initialOrderBy,
      orderColumn: column
    }
  });
};

// add favorites
export const setFavorites = (key, status, countFavorites) => (dispatch, getState) => {
  let initialFavorite = getState().listTech.favorites;
  let newFavorites = {
    ...initialFavorite,
    [`${key}`]: status
  };
  let newCountFavorites = status ? countFavorites + 1 : countFavorites - 1;

  dispatch({
    type: FAVORITES_LIST_TECH,
    payload: {
      favorites: newFavorites,
      countFavorites: newCountFavorites
    },
  });

  localStorage.setItem('favoriteTech', JSON.stringify(newFavorites));
  localStorage.setItem('countFavorites', newCountFavorites);
};

export default techReducer;
