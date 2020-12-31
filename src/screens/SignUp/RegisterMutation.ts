import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import { useCallback, useState } from 'react';
import { useToasts } from '~/hooks';
import { RegisterVariables, Register } from './__generated__/Register';

const mutation = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
    }
  }
`;

export const useRegisterMutation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToasts();
  const { push } = useHistory();
  const [mutate] = useMutation<Register, RegisterVariables>(mutation);

  const register = useCallback(async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const { data } = await mutate({
        variables: {
          input: {
            email,
            password,
            username: name,
          },
        },
      });

      console.log(data);
      localStorage.setItem('token', data?.register?.token || '');
      push('/update-profile');
    } catch (error) {
      showToast(error.message, 3000);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    register,
  };
};
