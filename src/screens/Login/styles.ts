import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.backgroundColor};
  display: flex;
  width: 100vw;
  min-height: 100vh;
  align-items: flex-start;
  justify-content: center;
  button {
    width: 100%;
    margin: 10px 20px;
  }
  input {
    margin: 5px 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    padding: 20px;
  }
  h1 {
    font-size: 23px;
    color: ${props => props.theme.colors.textColor};
  }
  svg {
    fill: ${props => props.theme.colors.textColor};
    width: 50px;
  }
  a {
    color: ${props => props.theme.colors.accents.blue};
    font-size: 15px;
    text-decoration: none;
    margin: 10px 0px;
    text-align: center;
  }
`;
