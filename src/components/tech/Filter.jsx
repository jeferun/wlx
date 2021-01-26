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
          onChange={({ target }) =>
            filterListTech({
              valueName: target.value,
              valueType: type
            }, 'name')
          }
        />
      </label>
      <label>
        Tipo
          <FormItem
          as="select"
          value={type}
          onChange={({ target }) =>
            filterListTech({
              valueName: nameTech,
              valueType: target.value
            }, 'type')
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

Filter.propTypes = {
  filterListTech: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  nameTech: PropTypes.string.isRequired,
};

export default Filter;

