import React from 'react';
import './collection-item.styles.scss';

import Button from '../utils/button/Button';

import {connect} from 'react-redux';
import {addToCart} from '../../redux/actions/cart.action';

const CollectionItem = ({ item, addToCart}) => {

    const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button inverted onClick={()=>addToCart(item)}>Add To Cart</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart : item => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem); 