import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  border: 1px solid ${props => props.theme.colors.greySearchInput};
  background: transparent;
  color: ${props => props.theme.colors.textColor};
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  font-size: 15px;
`;
