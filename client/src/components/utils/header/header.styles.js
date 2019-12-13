import styled ,{css} from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        height: 70px;
        margin: 1rem 0.5rem
    }
`   

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    display:felx;
    align-items: center;
    justify-items: center;
    flex:1;
    h2{
        font-size: 1.8rem;
        margin:0.5rem;
    }

    @media screen and (max-width: 800px) {
        width: 50px;
        h2{
            display: none
        }   
    }
`

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
    @media screen and (max-width: 800px) {
        padding: 5px;   
    }
`
export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`
export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 800px) {
        width: 75%;   
    }
`