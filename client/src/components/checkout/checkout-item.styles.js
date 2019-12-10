import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 3fr 1fr;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 1rem;
  align-items: center;
`;

export const ImageContainer = styled.div`
padding: 0.1rem;
  img {
    width: 8rem;
    height: 9.5rem;
  }
`;

export const TextContainer = styled.span`
  align-items: center;
  font-size: 1.2rem;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  flex-direction: rows;
  align-items: center;
  span {
    margin: 0 0.3rem;
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;