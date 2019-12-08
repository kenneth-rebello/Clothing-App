import React from 'react';
import {connect} from 'react-redux';
import { removeItem, removeFromCart, addToCart } from '../../redux/actions/cart.action';
import { CheckoutItemContainer, ImageContainer, QuantityContainer, TextContainer, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, removeItem, addToCart, removeFromCart }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
          <div onClick={() => removeFromCart(cartItem)}>&#10094;</div>
          <span>{quantity}</span>
          <div onClick={() => addToCart(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={() => removeItem(cartItem.id)}>
          &#10005;
        </RemoveButtonContainer>
      </CheckoutItemContainer>
    );
  };
  
  const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addToCart: item => dispatch(addToCart(item)),
    removeFromCart: item => dispatch(removeFromCart(item))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(CheckoutItem);