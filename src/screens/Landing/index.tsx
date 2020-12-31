import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { Button } from '~/components';
import { TwitterIcon } from '~/assets/svg';
import { BirdWrapper, Wrapper, LandingWrapper } from './styles';

type Props = {};

const Landing: FC<Props> = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <BirdWrapper>
        <TwitterIcon />
      </BirdWrapper>
      <LandingWrapper>
        <div>
          <TwitterIcon />
          <h1>See what’s happening in the world right now</h1>
          <p>Join twitter today</p>
          <Button text="Sign Up" onClick={() => history.push('/signup')} />
          <Button outlined text="Log in" onClick={() => history.push('/login')} />
        </div>
      </LandingWrapper>
    </Wrapper>
  );
};

export default Landing;
