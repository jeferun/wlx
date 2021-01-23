import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    background-color: #ffffff;
    scroll-behavior: smooth;
  }
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
    margin: 0px;
    grid-template-columns: 1fr;
    font-family: ${({ theme }) => theme.font.family.primary};
  }
  select,
  option {
    color: #757575;
  }
  .center {
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
    font-size: 2.8rem;
  }
  .font-h2 {
    font-size: 2.6rem;
  }
  .font-h3 {
    font-size: 2rem;
    margin-top: 20px;
  }
  .font-h4 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  b.font-bold {
    font-family: ${({ theme }) => theme.font.family.secondary};
  }
  p {
    margin: 0;
  }

@media only screen and (max-width: 780px) {
    .font-h1 {
      font-size: 2.5rem !important;
    }
    .font-h2 {
      font-size: 2.4rem !important;
    }
    .font-h3 {
      font-size: 1.8rem !important;
    }
    .font-h4 {
      font-size: 1.4rem !important;
    }
  }
  @media only screen and (max-width: 450px) {
    .font-h1 {
      font-size: 2rem !important;
    }
    .font-h2 {
      font-size: 1.8rem !important;
    }
    .font-h3 {
      font-size: 1.6rem !important;
    }
    .font-h4 {
      font-size: 1.2rem !important;
    }
  }

`;