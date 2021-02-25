import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  setNameFilter,
  setTypeFilter
} from '../../redux/tech2Ducks';
// componentes
import FormItem from '../../styled/FormItem';
import { SELECT_TYPES } from '../../config/constants';

const FilterContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeName = value => dispatch(setNameFilter(value));
  const onChangeType = value => dispatch(setTypeFilter(value));

  return (

    <FilterContainer>
      <label>
        <FormItem
          type="text"
          placeholder="Tecnología"
          onChange={({ target }) =>
            onChangeName(target.value)
          }
        />
      </label>
      <label>
        Tipo
          <FormItem
          as="select"
          onChange={({ target }) =>
            onChangeType(target.value)
          }
        >
          {
            SELECT_TYPES.map(
              type => <option key={`key_${type}`} value={type}>{type}</option>
            )
          }
        </FormItem>
      </label>
    </FilterContainer>
  );
};

export default Filter;

