import { gql, useMutation } from '@apollo/client';
import { useCallback, useState } from 'react';
import { useToasts } from '~/hooks';
import { LoginMutationVariables, LoginMutation } from './__generated__/LoginMutation';

const mutationQuery = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      token
    }
  }
`;

export const useLoginMutation = () => {
  const { showToast } = useToasts();
  const [isLoading, setIsLoading] = useState(false);
  const [mutate] = useMutation<LoginMutation, LoginMutationVariables>(mutationQuery);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { data, errors } = await mutate({
        variables: {
          input: {
            email,
            password,
          },
        },
      });

      console.log(data);
      console.log(errors);

      localStorage.setItem('token', data?.login?.token || '');
    } catch (error) {
      showToast(error.message, 3000, 'bottom-center');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    login,
    isLoading,
  };
};
