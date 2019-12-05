import React, { Component } from 'react'

import FormInput from '../utils/form-input/FormInput';
import Button from '../utils/button/Button'

import {auth, createUserProfile } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

export class SignUp extends Component {

    constructor(props){
        super(props)

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password!==confirmPassword){
            alert('Passwords do not match');
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfile(user, {displayName});

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword: ''
            })

        } catch (err) {
            console.log(err)
        }
    }

    handleChange = e =>{

        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {

        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your email</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label = 'Display Name'
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label = 'Password'
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label = 'Confirm Password'
                        required
                    />
                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;