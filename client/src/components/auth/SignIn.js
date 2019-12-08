import React, { Component } from 'react'

import FormInput from '../utils/form-input/FormInput';
import Button from '../utils/button/Button';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import { SigninDiv, Title, ButtonsDiv } from './sign-in.styles';

export class SignIn extends Component {

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async(e) => {

        const {email, password} = this.state;
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        } catch (err) {
            console.log(err);   
        }
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]:value})
    }

    render() {
        return (
            <SigninDiv>
                <Title>I already have an account</Title>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" 
                        name="email" 
                        value={this.state.email} required 
                        handleChange={this.handleChange} 
                        label="Email"/>
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} required 
                        handleChange={this.handleChange} 
                        label="Password"/>
                    <ButtonsDiv className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</Button>
                    </ButtonsDiv>
                </form>
            </SigninDiv>
        )
    }
}

export default SignIn
