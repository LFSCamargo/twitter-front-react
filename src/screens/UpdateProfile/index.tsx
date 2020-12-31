import React, { FC } from 'react';
import { useFormik } from 'formik';
import { Button, TextInput } from '~/components';
import { useUpdateProfile } from './hooks';
import { Image, Wrapper } from './styles';
import { TwitterIcon } from '~/assets/svg';

interface Props {}

const UpdateProfile: FC<Props> = ({}) => {
  const { isLoading, updateUserProfile } = useUpdateProfile();
  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      picture: '',
      nickname: '',
      bio: '',
    },
    onSubmit: formValues => {
      updateUserProfile({ input: formValues });
    },
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <TwitterIcon />
        <h1>Add some infos to your profile</h1>
        <Image
          src={
            values.picture ||
            'https://cms.qz.com/wp-content/uploads/2017/03/twitter_egg_blue.png?quality=75&strip=all&w=900&h=900&crop=1'
          }
        />
        <TextInput
          placeholder="Picture URL"
          name="picture"
          value={values.picture}
          onChange={e => setFieldValue('picture', e.target.value)}
          required
        />
        <TextInput
          placeholder="Bio"
          name="bio"
          value={values.bio}
          onChange={e => setFieldValue('bio', e.target.value)}
          required
        />
        <TextInput
          placeholder="Username like: luiziscoding"
          name="nickname"
          value={values.nickname}
          onChange={e => setFieldValue('nickname', e.target.value)}
          required
        />
        <Button disabled={isLoading} type="submit" text="Submit" />
      </form>
    </Wrapper>
  );
};

export default UpdateProfile;
