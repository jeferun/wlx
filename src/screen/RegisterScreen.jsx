import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormItem from '../styled/FormItem';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PATH } from '../config/constants';
// componente
import Button from '../styled/Button';
import Navbar from '../components/landing_page/Navbar';

const FormContainer = styled.div`
    padding: 2rem;
    align-items: center;
`;

const Form = styled.form`
    margin-top: 6rem;
    padding: 1rem;
    width: 30rem;
    border-radius: 45px;
    box-shadow: 0px 1px 5px 1px ${({ theme }) => theme.colors.default};
`;

const Span = styled.span`
    display: flex;
    color: ${({ theme }) => theme.colors.danger};
    font-size: 12px;
`;

const RegisterScreen = ({ history }) => {
    const [terms, setTerms] = useState(false);
    // formState
    const { register, handleSubmit, watch, trigger, errors, formState } = useForm({
        mode: 'all'
    });
    const onSubmit = data => {
        delete data.password_repeat;
        console.log(data);
        history.push('/list-tech');
    };
    console.log(formState.isValid);
    //mensajes de error
    const msgRequiered = 'Este campo es obligatorio';
    const msgMaxLength = 'El campo excede los 30 caracteres';
    const msgPattern = 'El formato no es valido';

    return (
        <>
            <Navbar history={history} />
            <FormContainer className="center">
                <Form onSubmit={handleSubmit(onSubmit)} className="center">
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
                    <Span>{errors?.name?.message}</Span>

                    <FormItem
                        type="text"
                        placeholder="Apellido"
                        name="lastName"
                        className={errors?.lastName && 'error'}
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
                    <Span>{errors?.lastName?.message}</Span>

                    <FormItem
                        as="select"
                        name="country"
                        ref={register({
                            required: {
                                value: true,
                                message: `${msgRequiered}`
                            }
                        })}
                        className={errors?.country && 'error'}>
                        <option value=""></option>
                        <option value="pa1">pa1</option>
                        <option value="pa2">pa2</option>
                        <option value="p3">p3</option>
                        <option value="pa4">pa4</option>
                        <option value="pa5">pa5</option>
                    </FormItem>
                    <Span>{errors?.country?.message}</Span>

                    <FormItem
                        as="select"
                        name="province"
                        ref={register({
                            required: {
                                value: true,
                                message: `${msgRequiered}`
                            }
                        })}
                        className={errors?.province && 'error'}>
                        <option value=""></option>
                        <option value="pa1">pa1</option>
                        <option value="pa2">pa2</option>
                        <option value="p3">p3</option>
                        <option value="pa4">pa4</option>
                        <option value="pa5">pa5</option>
                    </FormItem>
                    <Span>{errors?.province?.message}</Span>

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
                    <Span>{errors?.email?.message}</Span>

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
                                maxLength: 10,
                                message: `${msgMaxLength}`
                            }
                        })}
                    />
                    <Span>{errors?.phone?.message}</Span>

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
                    <Span>{errors?.password?.message}</Span>

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
                    <Span>{errors?.password_repeat?.message}</Span>
                    {errors?.password_repeat?.type === 'validate' && <Span>La contraseña debe coincidir</Span>}

                    <label>
                        <br></br>
                        Acepto<Link target="_blank" to={PATH.TERMS}> T&eacute;rminos y Condiciones</Link>
                        <input
                            name="terms"
                            type="checkbox"
                            checked={terms}
                            onChange={() => setTerms(!terms)}
                            ref={register({
                                required: {
                                    value: true,
                                    message: `${msgRequiered}`
                                }
                            })}
                        />
                    </label>
                    <Span>{errors?.terms?.message}</Span>

                    <br></br>
                    <Button
                        as="input"
                        type="submit"
                        className={!formState.isValid ? 'disabled' : 'default'}
                        value="Registrate"
                        disabled={!formState.isValid}
                    />
                </Form>
            </FormContainer>
        </>
    );
};

RegisterScreen.propTypes = {
    history: PropTypes.object
};

export default RegisterScreen;