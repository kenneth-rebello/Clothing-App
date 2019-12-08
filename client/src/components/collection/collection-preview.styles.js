import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CollectionPreview = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
`

export const Title = styled(Link)`
    font-size: 28px;
`

export const Preview = styled.div`
    display: flex;
    justify-content: space-between;
`