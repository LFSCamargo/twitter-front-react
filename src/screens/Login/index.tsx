import React, { FC } from 'react';
import { useFormik } from 'formik';
import { TwitterIcon } from '~/assets/svg';
import { Button } from '~/components';
import { Input } from '~/components/Input/styles';
import { Wrapper } from './styles';
import { useLoginMutation } from './LoginMutation';

interface Props {}

const Login: FC<Props> = () => {
  const { login, isLoading } = useLoginMutation();
  const { setFieldValue, values, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      await login(values.email, values.password);
    },
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <TwitterIcon />
        <h1>Log in to Twitter</h1>
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
        <Button disabled={isLoading} type="submit" text="Log in" />
        <a>Sign Up for Twitter</a>
      </form>
    </Wrapper>
  );
};

export default Login;
