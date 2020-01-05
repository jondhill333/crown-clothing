import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SiginAndSignupPageContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
    <SiginAndSignupPageContainer>
        <SignIn />
        <SignUp />
        </SiginAndSignupPageContainer>

);

export default SignInAndSignUpPage;

