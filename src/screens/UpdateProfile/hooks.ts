import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import { useCallback, useState } from 'react';
import { useToasts } from '~/hooks';
import { UpdateUserProfileVariables, UpdateUserProfile } from './__generated__/UpdateUserProfile';

const mutation = gql`
  mutation UpdateUserProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      id
    }
  }
`;

export const useUpdateProfile = () => {
  const { push } = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [mutate] = useMutation<UpdateUserProfile, UpdateUserProfileVariables>(mutation);
  const { showToast } = useToasts();

  const updateUserProfile = useCallback(async (input: UpdateUserProfileVariables) => {
    try {
      setIsLoading(true);
      await mutate({
        variables: {
          ...input,
        },
      });
      push('/home');
    } catch (error) {
      showToast(error.message, 2000);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    updateUserProfile,
  };
};
