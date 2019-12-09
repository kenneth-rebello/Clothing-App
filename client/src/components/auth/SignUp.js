import React, { useState } from 'react'

import FormInput from '../utils/form-input/FormInput';
import Button from '../utils/button/Button'

import {auth, createUserProfile } from '../../firebase/firebase.utils';
import { SignupDiv, Title } from './sign-up.styles';

const SignUp = (props) => {

    const [formData , setFormData] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword: ''
    });

    const {displayName, email, password, confirmPassword} = formData;

    const handleSubmit = async e => {
        e.preventDefault();

        if(password!==confirmPassword){
            alert('Passwords do not match');
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfile(user, {displayName});

            setFormData({
                displayName:'',
                email:'',
                password:'',
                confirmPassword: ''
            })

        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = e =>{

        const {name, value} = e.target;
        setFormData({...formData,[name]: value})
    }

    return (
        <SignupDiv>
            <Title>I do not have an account</Title>
            <span>Sign Up with your email</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label = 'Display Name'
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label = 'Email'
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label = 'Password'
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label = 'Confirm Password'
                    required
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </SignupDiv>
    )
    
}

export default SignUp;