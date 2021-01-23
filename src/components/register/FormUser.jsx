// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { PATH, COUNTRIES } from '../config/constants';
// // componente
// import FormItem from '../styled/FormItem';
// import Button from '../styled/Button';

// const FormUser = ({ useForm }) => {

//   const { register, handleSubmit, watch, trigger, errors, formState } = useForm;

//   return (
//     <Form onSubmit={handleSubmit(onSubmit)} className="center">
//       <span className="font-h2 font-color-blue">
//         <b className="font-bold">Registro</b>
//       </span>
//       <FormItem
//         type="text"
//         placeholder="Nombre"
//         name="name"
//         className={errors?.name && 'error'}
//         ref={register({
//           required: {
//             value: true,
//             message: `${msgRequiered}`
//           },
//           maxLength: {
//             value: 30,
//             message: `${msgMaxLength}`
//           }
//         })}
//       />
//       <Span>{errors?.name?.message}</Span>

//       <FormItem
//         type="text"
//         placeholder="Apellido"
//         name="lastName"
//         className={errors?.lastName && 'error'}
//         ref={register({
//           required: {
//             value: true,
//             message: `${msgRequiered}`
//           },
//           maxLength: {
//             value: 30,
//             message: `${msgMaxLength}`
//           }
//         })}
//       />
//       <Span>{errors?.lastName?.message}</Span>

//       <FormItem
//         as="select"
//         name="country"
//         className={errors?.country && 'error'}
//         defaultValue=""
//         onChange={changeProvinces3}
//         ref={register({
//           required: {
//             value: true,
//             message: `${msgRequiered}`
//           }
//         })}>
//         <option value="" disabled hidden>Pa&iacute;ses</option>
//         {
//           COUNTRIES.map(
//             ({ id, name }) => <option key={id} value={id}>{name}</option>
//           )
//         }
//       </FormItem>
//       <Span>{errors?.country?.message}</Span>

//       <FormItem
//         as="select"
//         name="province"
//         ref={register({
//           required: {
//             value: true,
//             message: `${msgRequiered}`
//           }
//         })}
//         className={errors?.country && 'error'}
//         defaultValue="">
//         <option value="" disabled hidden>Provincias</option>
//         {
//           provinces.map(
//             ({ id, name }) => <option key={id} value={id}>{name}</option>
//           )
//         }
//       </FormItem>
//       <Span>{errors?.province?.message}</Span>

//       <FormItem
//         type="text"
//         placeholder="Email"
//         name="email"
//         className={errors?.email && 'error'}
//         ref={register({
//           required: {
//             value: true,
//             message: `${msgRequiered}`
//           },
//           pattern: {
//             value: /^\S+@\S+$/i,
//             message: `${msgPattern}`
//           }
//         })}
//       />
//       <Span>{errors?.email?.message}</Span>

//       <FormItem
//         type="tel"
//         placeholder="Teléfono"
//         name="phone"
//         className={errors?.phone && 'error'}
//         ref={register({
//           required: {
//             value: true,
//             message: `${msgRequiered}`
//           },
//           maxLength: {
//             value: 10,
//             message: `${msgMaxLength}`
//           }
//         })}
//       />
//       <Span>{errors?.phone?.message}</Span>

//       <FormItem
//         placeholder="Contraseña"
//         name="password"
//         type="password"
//         onChange={() => (trigger('password_repeat'))}
//         className={errors?.password && 'error'}
//         ref={register({
//           required: {
//             value: true,
//             message: `${msgRequiered}`
//           },
//           pattern: {
//             value: /^[a-zA-Z0-9]+$/,
//             message: 'La contraseña debe tener tanto números como letras'
//           },
//           minLength: {
//             value: 6,
//             message: 'La contraseña debe contener mas de 6 caracteres'
//           }
//         })}
//       />
//       <Span>{errors?.password?.message}</Span>

//       <FormItem
//         placeholder="Repetir Contraseña"
//         name="password_repeat"
//         type="password"
//         className={errors?.password_repeat && 'error'}
//         ref={register({
//           required: {
//             value: true,
//             message: `${msgRequiered}`
//           },
//           validate: (value) => value === watch('password')
//         })}
//       />
//       <Span>{errors?.password_repeat?.message}</Span>
//       {errors?.password_repeat?.type === 'validate' && <Span>La contraseña debe coincidir</Span>}

//       <label>
//         <br></br>
//         Acepto<Link target="_blank" to={PATH.TERMS}> T&eacute;rminos y Condiciones</Link>
//         <input
//           name="terms"
//           type="checkbox"
//           checked={terms}
//           onChange={() => setTerms(!terms)}
//           ref={register({
//             required: {
//               value: true,
//               message: `${msgRequiered}`
//             }
//           })}
//         />
//       </label>
//       <Span>{errors?.terms?.message}</Span>

//       <br></br>
//       <Button
//         as="input"
//         type="submit"
//         className={!formState.isValid ? 'disabled' : 'default'}
//         value="Registrate"
//         disabled={!formState.isValid}
//       />
//     </Form>
//   );
// };

// FormUser.propTypes = {
//   useForm: PropTypes.object.isRequired,
// };

// export default FormUser;
