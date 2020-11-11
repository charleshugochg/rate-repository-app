import React from 'react';
import { useHistory } from 'react-router-native'

import SingInContainer from './SignInContainer'
import { useSignIn } from '../hooks'

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory()
  const onSubmit = async ({username, password}) => {
    const { data } = await signIn({username, password})
    history.push('/')
  };
  return (
    <SingInContainer onSubmit={onSubmit} />
  )
};

export default SignIn;
