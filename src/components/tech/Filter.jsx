import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// componentes
import FormItem from '../../styled/FormItem';
import { SELECT_TYPES } from '../../config/constants';



const FilterContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const Filter = ({ filterListTech, type, nameTech }) => {

  return (

    <FilterContainer>
      <label>
        <FormItem
          type="text"
          placeholder="Tecnología"
          value={nameTech}
          onChange={(event) => filterListTech(event, 'name')}
        />
      </label>
      <label>
        Tipo
          <FormItem
          as="select"
          value={type}
          onChange={(event) => filterListTech(event, 'type')}
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

Filter.propTypes = {
  filterListTech: PropTypes.func,
  type: PropTypes.string,
  nameTech: PropTypes.string,
};

export default Filter;

