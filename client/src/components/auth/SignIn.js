import React, { useState } from 'react'

import FormInput from '../utils/form-input/FormInput';
import Button from '../utils/button/Button';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import { SigninDiv, Title, ButtonsDiv } from './sign-in.styles';

const SignIn = (props) => {

    const [user, setUser] = useState({
        email:'',
        password:''
    })

    const handleSubmit = async(e) => {

        const {email, password} = user;
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUser({...user, [e.target.name]:e.target.value})
        } catch (err) {
            console.log(err);   
        }
    }

    const handleChange = e => {
        const {value, name} = e.target;

        setUser({...user, [name]:value})
    }

    return (
        <SigninDiv>
            <Title>I already have an account</Title>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" 
                    name="email" 
                    value={user.email} required 
                    handleChange={handleChange} 
                    label="Email"/>
                <FormInput 
                    type="password" 
                    name="password" 
                    value={user.password} required 
                    handleChange={handleChange} 
                    label="Password"/>
                <ButtonsDiv className="buttons">
                    <Button type="submit">Sign In</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</Button>
                </ButtonsDiv>
            </form>
        </SigninDiv>
    )
    
}

export default SignIn