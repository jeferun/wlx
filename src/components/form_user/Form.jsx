import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PATH, COUNTRIES } from '../../config/constants';
// componentes
import FormItem from '../../styled/FormItem';
import Button from '../../styled/Button';

const FormStyled = styled.form`
  margin-top: 6rem;
  padding: 1rem;
  width: 30rem;
  border-radius: 45px;
  box-shadow: 0px 1px 5px 1px ${({ theme }) => theme.colors.default};

  @media only screen and (max-width: 980px) {
    width: 94vw;
  }

  @media only screen and (max-width: 450px) {
    padding: 0.2rem;
    border-radius: none;
    box-shadow: none;
  }
`;

const Form = ({ userFrom, changeProvinces, onSubmit, provinces }) => {
  //mensajes de error
  const msgRequiered = 'Este campo es obligatorio';
  const msgMaxLength = 'El campo excede los 30 caracteres';
  const msgPattern = 'El formato no es valido';

  const { register, handleSubmit, watch, trigger, errors, formState } = userFrom;

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} className="center">
      <span className="font-h2 font-color-blue">
        <b className="font-bold">Registro</b>
      </span>
      <FormItem
        type="text"
        placeholder="Nombre"
        name="name"
        className={errors?.name && 'error'}
        ref={register({
          required: {
            value: true,
            message: `${msgRequiered}`
          },
          maxLength: {
            value: 30,
            message: `${msgMaxLength}`
          }
        })}
      />
      <span className="error">{errors?.name?.message}</span>

      <FormItem
        type="text"
        placeholder="Apellido"
        name="last_name"
        className={errors?.last_name && 'error'}
        ref={register({
          required: {
            value: true,
            message: `${msgRequiered}`
          },
          maxLength: {
            value: 30,
            message: `${msgMaxLength}`
          }
        })}
      />
      <span className="error">{errors?.last_name?.message}</span>

      <FormItem
        as="select"
        name="country"
        className={errors?.country && 'error'}
        defaultValue=""
        onChange={changeProvinces}
        ref={register({
          required: {
            value: true,
            message: `${msgRequiered}`
          }
        })}>
        <option value="" disabled hidden>Pa&iacute;ses</option>
        {
          COUNTRIES.map(
            ({ id, name }) => <option key={id} value={id}>{name}</option>
          )
        }
      </FormItem>
      <span className="error">{errors?.country?.message}</span>

      <FormItem
        as="select"
        name="province"
        className={errors?.country && 'error'}
        defaultValue=""
        ref={register({
          required: {
            value: true,
            message: `${msgRequiered}`
          }
        })}>
        <option value="" disabled hidden>Provincias</option>
        {
          provinces.map(
            ({ id, name }) => <option key={id} value={id}>{name}</option>
          )
        }
      </FormItem>
      <span className="error">{errors?.province?.message}</span>

      <FormItem
        type="text"
        placeholder="Email"
        name="email"
        className={errors?.email && 'error'}
        ref={register({
          required: {
            value: true,
            message: `${msgRequiered}`
          },
          pattern: {
            value: /^\S+@\S+$/i,
            message: `${msgPattern}`
          }
        })}
      />
      <span className="error">{errors?.email?.message}</span>

      <FormItem
        type="tel"
        placeholder="Teléfono"
        name="phone"
        className={errors?.phone && 'error'}
        ref={register({
          required: {
            value: true,
            message: `${msgRequiered}`
          },
          maxLength: {
            value: 10,
            message: `${msgMaxLength}`
          },
          pattern: {
            value: /^[0-9]*$/,
            message: 'El campo permite solo números'
          }
        })}
      />
      <span className="error">{errors?.phone?.message}</span>

      <FormItem
        placeholder="Contraseña"
        name="password"
        type="password"
        onChange={() => (trigger('password_repeat'))}
        className={errors?.password && 'error'}
        ref={register({
          required: {
            value: true,
            message: `${msgRequiered}`
          },
          pattern: {
            value: /^[a-zA-Z0-9]+$/,
            message: 'La contraseña debe tener tanto números como letras'
          },
          minLength: {
            value: 6,
            message: 'La contraseña debe contener mas de 6 caracteres'
          }
        })}
      />
      <span className="error">{errors?.password?.message}</span>

      <FormItem
        placeholder="Repetir Contraseña"
        name="password_repeat"
        type="password"
        className={errors?.password_repeat && 'error'}
        ref={register({
          required: {
            value: true,
            message: `${msgRequiered}`
          },
          validate: (value) => value === watch('password')
        })}
      />
      <span className="error">{errors?.password_repeat?.message}</span>
      {errors?.password_repeat?.type === 'validate' && <span className="error">La contraseña debe coincidir</span>}

      <label>
        <br></br>
        Acepto<Link target="_blank" to={PATH.TERMS}> T&eacute;rminos y Condiciones</Link>
        <input
          name="terms"
          type="checkbox"
          value={true}
          ref={register({
            required: {
              value: true,
              message: `${msgRequiered}`
            }
          })}
        />
      </label>
      <span className="error">{errors?.terms?.message}</span>

      <br></br>
      <Button
        as="input"
        type="submit"
        className={!formState.isValid ? 'disabled' : 'default'}
        value="Registrate"
        disabled={!formState.isValid}
      />
    </FormStyled>
  );
};

Form.propTypes = {
  userFrom: PropTypes.object.isRequired,
  changeProvinces: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  provinces: PropTypes.array.isRequired
};

export default Form;