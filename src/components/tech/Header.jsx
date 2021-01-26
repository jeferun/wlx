import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  text-transform: capitalize;
  padding: .6rem;
  background-color: ${({ theme }) => theme.colors.primary};

  & > span {
    color: #ffffff;
  }
`;

const Header = ({ changeOrder }) => (
  <HeaderRow>
    <span>
      <b className="font-h4">logo</b>
    </span>
    <span>
      <b className="font-h4">tecnolog&iacute;a</b>
      &nbsp;
        <FontAwesomeIcon className="pointer"
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
  </HeaderRow>
);

Header.propTypes = {
  changeOrder: PropTypes.func.isRequired
};

export default Header;