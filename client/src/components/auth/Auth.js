import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

import {AuthDiv} from './auth.styles';

const Auth = () => {
    return (
        <AuthDiv>
            <SignIn/>
            <SignUp/>
        </AuthDiv>
    )
}


export default Auth 