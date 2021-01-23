import React from 'react';
import Navbar from '../components/landing_page/Navbar';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  padding: 2rem;
  align-items: center;
`;
const List = styled.div`
  margin-top: 6rem; 
`;

const ListTechScreen = ({ history }) => {
  return (
    <ListContainer>
      <Navbar history={history} />
      <List>esta es la lista</List>
    </ListContainer>
  );
};

ListTechScreen.propTypes = {
  history: PropTypes.object
};

export default ListTechScreen;