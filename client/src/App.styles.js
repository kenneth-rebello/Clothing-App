import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 5px 10px;

        @media screen and (max-width: 800px) {
            padding: 0;
        }
    }
    
    a{
        text-decoration: none;
        color: black;
    }
    
    *{
        box-sizing: border-box;
    }
`