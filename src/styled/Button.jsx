import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  text-decoration: none;
  cursor: pointer;
  outline: none;

  &.default {
    padding: 10px 80px;
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
  }

  &.trasparent,
  &.color {
    padding: 14px 92px;
    font-size: 20px;
  }

  &.trasparent {
    background-color: transparent;
    color: #ffffff;
  }

  &.color {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    box-shadow: -1px 1px 4px 1px #b9b6b6;
  }

  &.disabled {
    padding: 10px 80px;
    background-color: white;
    border: 2px solid ${({ theme }) => theme.colors.default};
    color: ${({ theme }) => theme.colors.default};
    cursor: not-allowed;
  }

  &:hover.default {
    box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
    text-shadow: 1px 1px 6px ${({ theme }) => theme.colors.primary};
    transition: 0.2s;
  }

  &:hover.trasparent,
  &:hover.color {
    box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
    text-shadow: 1px 1px 6px #fff;
    transition: 0.2s;
  }

  @media only screen and (max-width: 626px) {
      padding: 5px 20px !important;
  }
`;
