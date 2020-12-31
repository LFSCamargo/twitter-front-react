import React, { FC } from 'react';
import { useFormik } from 'formik';
import { useRegisterMutation } from './RegisterMutation';
import { Wrapper } from './styles';
import { TwitterIcon } from '~/assets/svg';
import { Input } from '~/components/Input/styles';
import { Button } from '~/components';

interface Props {}

const SignUp: FC<Props> = ({}) => {
  const { isLoading, register } = useRegisterMutation();
  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
      picture: '',
      username: '',
    },
    onSubmit: async values => {
      await register(values.username, values.email, values.picture, values.password);
    },
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <TwitterIcon />
        <h1>Sign up to Twitter</h1>
        <Input
          type="text"
          placeholder="Full Name"
          name="username"
          value={values.username}
          onChange={e => setFieldValue('username', e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Picture URL"
          name="picture"
          value={values.picture}
          onChange={e => setFieldValue('picture', e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={e => setFieldValue('email', e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={e => setFieldValue('password', e.target.value)}
          required
        />
        <Button disabled={isLoading} type="submit" text="Sign me up" />
        <a>Login on Twitter</a>
      </form>
    </Wrapper>
  );
};

export default SignUp;
