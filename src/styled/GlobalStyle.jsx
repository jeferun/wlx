import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ${({ theme }) => theme.font.family.primary};
    src: url(${({ theme }) => theme.font.src.primary}) format('truetype');
  }
  @font-face {
    font-family: ${({ theme }) => theme.font.family.secondary};
    src: url(${({ theme }) => theme.font.src.secondary}) format('truetype');
  }
  body {
    display: grid;
    text-align: center;

    grid-template-columns: 1fr;
    font-family: ${({ theme }) => theme.font.family.primary};
  }
  div.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  span.font-color-blue {
    color: ${({ theme }) => theme.colors.primary};
  }
  span.font-color-green {
    color: ${({ theme }) => theme.colors.secondary};
  }
  span.font-color-white {
    color: #ffffff;
  }
  .font-h1 {
    font-size: 3.2rem;
  }
  .font-h2 {
    font-size: 3rem;
  }
  .font-h3 {
    font-size: 2.3rem;
    margin-top: 20px;
  }
  .font-h4 {
    font-size: 1.5rem;
  }
  b.font-bold {
    font-family: ${({ theme }) => theme.font.family.secondary};

  }
  p {
    margin: 0;
  }
`;