import React from 'react';
import styled from 'styled-components';

const HrStyled = styled.hr`
  width: 90%;
  box-shadow: 0px 0px 7px 1px #dfdee6;
  border: 0.5px solid #e8e7ef;
  margin-top: 50px;
`;

const Hr = () => <HrStyled />;

export default Hr;
