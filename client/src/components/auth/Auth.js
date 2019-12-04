import React from 'react'
import './auth.styles.scss'

import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}


export default Auth 