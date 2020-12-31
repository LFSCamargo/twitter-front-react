import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const BirdWrapper = styled.div`
  @media (max-width: 800px) {
    max-height: 50vh;
  }
  width: 100%;
  height: 100vh;
  background-color: rgb(116, 202, 254);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  svg {
    fill: ${props => props.theme.colors.accents.blue};
    width: 10359px;
  }
`;

export const LandingWrapper = styled.div`
  @media (max-width: 800px) {
    max-height: 50vh;
  }
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    max-width: 380px;
    width: 100%;
    margin: 10px;
  }
  p {
    font-size: 15px;
    color: ${props => props.theme.colors.textColor};
    font-weight: bold;
  }
  h1 {
    font-weight: bold;
    margin-top: 10px;
    font-size: 30px;
    color: ${props => props.theme.colors.textColor};
  }
  svg {
    fill: ${props => props.theme.colors.textColor};
    width: 50px;
    height: 50px;
  }
  button {
    margin: 10px 0px;
  }
`;
