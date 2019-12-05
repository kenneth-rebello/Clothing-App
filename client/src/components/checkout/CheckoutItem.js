import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import { removeItem, removeFromCart, addToCart } from '../../redux/actions/cart.action';

const CheckoutItem = ({cartItem, removeFromCart, addToCart, removeItem }) => {

    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeFromCart(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addToCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>removeItem(cartItem.id)}>&#10008;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addToCart: item => dispatch(addToCart(item)),
    removeFromCart: item => dispatch(removeFromCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem); 