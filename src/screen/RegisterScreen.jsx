import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import PropTypes from 'prop-types';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getProvinces } from '../redux/provincesDucks';
import { setDataUser } from '../redux/registerDucks';
import { PATH } from '../config/constants';
// componente
import Navbar from '../components/landing_page/Navbar';
import Form from '../components/form_user/Form';

const FormContainer = styled.div`
  padding: 2rem;
  align-items: center;

  @media only screen and (max-width: 450px) {
    padding: 0.5rem;
  }
`;

const RegisterScreen = ({ history }) => {
  //redux
  const dispatch = useDispatch();
  const { provinces } = useSelector(
    ({ listProvinces }) => listProvinces
  );
  // formState
  const userFrom = useForm({
    mode: 'all'
  });

  const onSubmit = async data => {

    delete data.password_repeat;
    delete data.terms;

    await dispatch(setDataUser(data));
    history.push(PATH.LIST_TECH);
  };

  function changeProvinces() {
    // provinces
    let idCountrie = userFrom.watch('country') - 1;
    dispatch(getProvinces(idCountrie));
  }

  return (
    <>
      <Navbar history={history} />
      <FormContainer className="center">
        <Form
          userFrom={userFrom}
          changeProvinces={changeProvinces}
          onSubmit={onSubmit}
          provinces={provinces}
        />
      </FormContainer>
    </>
  );
};

RegisterScreen.propTypes = {
  history: PropTypes.object.isRequired
};

export default RegisterScreen;
