import styled from 'styled-components';

export default styled.hr`
  width: 90%;
  box-shadow: 0px 0px 7px 1px ${({ theme }) => theme.colors.default};
  border: 0.5px solid ${({ theme }) => theme.colors.default};
  margin-top: 50px;
`;
