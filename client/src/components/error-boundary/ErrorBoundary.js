import React, { Component } from 'react';

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles';

export class ErrorBoundary extends Component {

    constructor(){
        super();

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error){
        //process error handling
        return { hasErrored: true }
    }

    componentDidCatch(error, info){
        console.log(error)
    }

    render() {
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={'https://i.imgur.com/lKJiT77.png'}/>
                    <ErrorImageText>Sorry a dog ate this page</ErrorImageText>
                </ErrorImageOverlay>
            )
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;