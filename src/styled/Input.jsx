import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  transition: all 0.3s;
  border: 1px;
  border-radius: 2rem;
  box-shadow: 0px 1px 5px 1px #b0b2b5;
  font-size: 20px;
  outline: none;
  margin: 1rem;
  padding: 0.5rem;
`;

const Input = ({ children, type, placeholder, value, onChange }) => (
  <InputStyled
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  >
    {children}
  </InputStyled>
);

export default Input;
