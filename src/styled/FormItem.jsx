import styled from 'styled-components';

export default styled.input`
    transition: all 0.2s;
    border-style: initial;
    border-bottom: 1px solid ${({ theme }) => theme.colors.default};
    font-size: 14px;
    outline: none;
    margin: .5rem;
    padding: .6rem;

    &.error {
      border-bottom: 2px solid ${({ theme }) => theme.colors.danger} !important;
    }

    &:focus {
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    }
`;
