import React from 'react';
import { Input } from './styles';

export const TextInput: React.FC<React.InputHTMLAttributes<any>> = props => {
  return <Input {...props} />;
};
