import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .Toastify__toast {
    border-radius: 10px;
    padding: 20px;
    background-color: ${props => props.theme.colors.accents.blue};
    color: ${props => props.theme.colors.textColor};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  body {
    margin: 0px;
    display: flex;
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;
