import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  border: 2px solid ${props => props.theme.colors.separatorColor};
  background: transparent;
  color: ${props => props.theme.colors.textColor};
  border-radius: 10px;
  padding: 15px;
  font-weight: 500;
  width: 100%;
  font-size: 15px;
  transition: 0.5s;
  :focus {
    border: 2px solid ${props => props.theme.colors.accents.blue};
  }
`;
