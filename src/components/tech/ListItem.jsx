import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const ItemContent = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  text-transform: capitalize;
  padding: .6rem;
  margin: .5rem;
`;

const ListItem = ({ item, starColor, addFavorites, isFavorite, countFavorites }) => (
  <ItemContent>
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
      <FontAwesomeIcon className="pointer"
        icon={['fas', 'star']}
        size="2x"
        color={starColor}
        onClick={() =>
          addFavorites(
            [`${item.tech}_${item.year}`],
            !isFavorite,
            countFavorites
          )
        }
      />
    </span>
  </ItemContent>
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  starColor: PropTypes.string.isRequired,
  addFavorites: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  countFavorites: PropTypes.number.isRequired,
};

export default ListItem;