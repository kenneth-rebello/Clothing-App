import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CollectionPreview = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    @media screen and (max-width: 800px) {
        margin-top: 0.5rem;   
    }
`

export const Title = styled(Link)`
    font-size: 28px;
    font-weight: 'bold';
    padding: 0.2rem;
`

export const Preview = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.1rem
    }
`