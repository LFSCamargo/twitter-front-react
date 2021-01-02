import styled, { css } from 'styled-components';
import { accents } from '~/design';

export interface WrapperProps {
  outlined?: boolean;
  selectedColor?: {
    solid: string;
    transparent: string;
  };
}

export const Wrapper = styled.button<WrapperProps>`
  background: ${props => (props.outlined ? 'transparent' : props.selectedColor?.solid)};
  color: ${props => (props.outlined ? props.selectedColor?.solid : props.theme.colors.textColor)};
  border: ${props => (props.outlined ? `1px solid ${props.selectedColor?.solid}` : 'none')};
  border-radius: 100px;
  padding: 16px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  transition: 0.3s;
  &:hover {
    ${props =>
      props.outlined
        ? css`
            background: ${props.selectedColor?.transparent};
          `
        : css`
            opacity: 0.5;
          `}
  }
`;

Wrapper.defaultProps = {
  outlined: false,
  selectedColor: {
    solid: accents.blue,
    transparent: accents.transparentBlue,
  },
};
