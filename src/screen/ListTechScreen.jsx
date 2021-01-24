import React, { useState, useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// estilos
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Navbar from '../components/landing_page/Navbar';
import Filter from '../components/tech/Filter';

import {
  getListTech,
  getFilterListTech,
  setFavorites,
} from '../redux/techDucks';

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  textTransform: 'capitalize',
  padding: '0.6rem',
};

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

const HeadRow = styled.div`
  ${style};
  background-color: ${({ theme }) => theme.colors.primary};

  & > span {
    color: #ffffff;
  }
`;

const BodyRow = styled.div`
  ${style};
  margin: 0.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const ListTechScreen = ({ history }) => {
  let countFavorite = 0;
  const initialType = 'All';
  const [type, setType] = useState(initialType);
  const [nameTech, setNameTech] = useState('');
  const [orderDesc, setOrderDesc] = useState('');

  const dispatch = useDispatch();
  const { list, filterList, favorites } = useSelector(
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

  function filterListTech({ target }, option) {
    let newList = [];
    let value = target.value;
    let lowerCaseValue = value.toLowerCase();

    if (option === 'type') {
      setType(value);
      newList = list.filter((l) => l.type === value || initialType === value);
    }

    if (option === 'name') {
      setNameTech(value);
      newList = list.filter((l) =>
        l.tech.toLowerCase().includes(lowerCaseValue)
      );
    }

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
            <HeadRow>
              <span>
                <b className="font-h4">logo</b>
              </span>
              <span>
                <b className="font-h4">tecnolog&iacute;a</b>
                &nbsp;
              <Icon
                  icon={['fas', 'arrows-alt-v']}
                  size="lg"
                  color="#000000"
                  onClick={() => changeOrder('tech')}
                />
              </span>
              <span>
                <b className="font-h4">a&ntilde;o</b>
              </span>
              <span>
                <b className="font-h4">autor</b>
              </span>
              <span>
                <b className="font-h4">licencia</b>
              </span>
              <span>
                <b className="font-h4">idioma</b>
              </span>
              <span>
                <b className="font-h4">tipo</b>
              </span>
              <span>
                <b className="font-h4">favorito</b>
              </span>
            </HeadRow>

            {filterList.map((item, p) => {
              let favorite = false;
              favorite = favorites[`${item.tech}_${item.year}`];
              let starColor = '#D6DBDF';

              if (favorite) {
                starColor = '#D4AC0D';
                countFavorite++;
              }

              return (
                <BodyRow key={p}>
                  <span>
                    <img src={item.logo} width="60" alt="logo" />
                  </span>
                  <span>{item.tech}</span>
                  <span>{item.year}</span>
                  <span>{item.author}</span>
                  <span>{item.license}</span>
                  <span>{item.language}</span>
                  <span>{item.type}</span>
                  <span>
                    <Icon
                      icon={['fas', 'star']}
                      size="2x"
                      color={starColor}
                      onClick={() =>
                        dispatch(
                          setFavorites(
                            [`${item.tech}_${item.year}`],
                            !favorite,
                            countFavorite
                          )
                        )
                      }
                    />
                  </span>
                </BodyRow>
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
  history: PropTypes.object
};

export default ListTechScreen;