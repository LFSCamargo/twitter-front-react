import React, { ButtonHTMLAttributes } from 'react';
import { Wrapper, WrapperProps } from './styles';

type Props = WrapperProps & {
  id?: string;
  text: string;
} & ButtonHTMLAttributes<any>;

export const Button: React.FC<Props> = ({
  outlined = false,
  id = `btn_${outlined ? 'outlined' : 'filled'}`,
  onClick,
  text,
  selectedColor,
}) => {
  return (
    <Wrapper id={id} selectedColor={selectedColor} onClick={onClick} outlined={outlined}>
      {text}
    </Wrapper>
  );
};
