import React, { useState, useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// estilos
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from '../components/landing_page/Navbar';
import Filter from '../components/tech/Filter';
import Header from '../components/tech/Header';
import ListItem from '../components/tech/ListItem';

import {
  getListTech,
  getFilterListTech,
  setFavorites,
} from '../redux/techDucks';

const ListContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  margin-top: 10rem;
  flex-direction: column;
  align-items: center;
`;

const ListStyled = styled.div`
  box-shadow: 0px 1px 5px 1px #b0b2b5;
  border-radius: 0.5rem;
  overflow: hidden;
  min-width: 60rem;
  margin: 2rem 0.2rem;
  padding: 0 0 0.5rem;

  @media only screen and (max-width: 450px) {
    box-shadow: none;
  }
`;

const ListTechScreen = ({ history }) => {
  const initialType = 'All';
  const [type, setType] = useState(initialType);
  const [nameTech, setNameTech] = useState('');
  const [orderDesc, setOrderDesc] = useState('');

  const dispatch = useDispatch();
  const { list, filterList, favorites, countFavorites } = useSelector(
    ({ listTech }) => listTech
  );

  useEffect(() => {
    dispatch(getListTech());
  }, [dispatch]);

  function listTechnology(newList) {
    return dispatch(getFilterListTech(newList));
  }

  function changeOrder(item) {
    let newList = sortList(item, !orderDesc);
    listTechnology(newList);
  }

  function filterListTech({ valueName, valueType }, option) {
    let newList = [...list];
    let lowerCaseValue = valueName.toLowerCase();

    option === 'type' && setType(valueType);
    option === 'name' && setNameTech(valueName);

    newList = newList.filter((l) => l.type === valueType || initialType === valueType);
    newList = newList.filter((l) =>
      l.tech.toLowerCase().includes(lowerCaseValue)
    );

    listTechnology(newList);
  }

  function sortList(item, desc = false) {
    setOrderDesc(desc);
    filterList.sort(function (a, b) {
      const itemA = a[item].toLowerCase();
      const itemB = b[item].toLowerCase();
      if (itemA < itemB) {
        return -1;
      }
      if (itemA > itemB) {
        return 1;
      }
      return 0;
    });

    if (desc) {
      return filterList.reverse();
    }
    return filterList;
  }

  function addFavorites(key, status, count) {
    dispatch(
      setFavorites(
        key,
        status,
        count
      )
    );
  }

  return (
    <>
      <Navbar history={history} />
      <ListContainer>
        <Filter
          filterListTech={filterListTech}
          type={type}
          nameTech={nameTech}
        />

        <div className="scroll-table">
          <ListStyled>

            <Header changeOrder={changeOrder} />

            {filterList.map((item, p) => {
              let isFavorite = favorites[`${item.tech}_${item.year}`] ?? false;

              return (
                <ListItem
                  key={p}
                  item={item}
                  starColor={isFavorite ? '#D4AC0D' : '#D6DBDF'}
                  addFavorites={addFavorites}
                  isFavorite={isFavorite}
                  countFavorites={countFavorites}
                />
              );
            })}

            <strong className="font-h4">
              Total tecnologías: {filterList.length}
            </strong>
          </ListStyled>
        </div>
      </ListContainer>
    </>
  );
};

ListTechScreen.propTypes = {
  history: PropTypes.object.isRequired
};

export default ListTechScreen;