import styled from 'styled-components';

export const DropdownComtainer = styled.div`
    position: absolute;
    width: 17rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 4.2rem;
    right: 40px;
    z-index: 5;
    button {
        margin-top: auto;
    }
`

export const CartItemsDiv = styled.div`
    height: 20rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const EmptyMessage = styled.span`
    font-size: 2rem;
    margin: 2rem auto;
`